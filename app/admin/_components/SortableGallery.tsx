"use client";

import Image from "next/image";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState, useTransition } from "react";

export type GalleryItem = {
  id: string;
  title: string;
  imageUrl: string;
  subtitle?: string;
  badge?: string;
};

function SortableItem({
  item,
  onDelete,
}: {
  item: GalleryItem;
  onDelete: (id: string) => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl px-4 py-3"
    >
      {/* Drag handle */}
      <button
        {...attributes}
        {...listeners}
        className="text-gray-300 hover:text-gray-500 cursor-grab active:cursor-grabbing select-none text-lg leading-none"
        title="Drag to reorder"
      >
        ⠿
      </button>

      {/* Thumbnail */}
      <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
        <Image src={item.imageUrl} alt={item.title} fill className="object-cover" />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-gray-900 truncate">{item.title}</div>
        {item.subtitle && (
          <div className="text-xs text-gray-400 mt-0.5">{item.subtitle}</div>
        )}
      </div>

      {item.badge && (
        <span
          className={`text-xs px-2 py-0.5 rounded-full ${
            item.badge === "Available"
              ? "bg-green-50 text-green-700"
              : item.badge === "Sold"
              ? "bg-red-50 text-red-700"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {item.badge}
        </span>
      )}

      <button
        onClick={() => onDelete(item.id)}
        className="text-xs text-red-500 hover:text-red-700 transition-colors ml-2"
      >
        Delete
      </button>
    </div>
  );
}

export function SortableGallery({
  items: initialItems,
  onReorder,
  onDelete,
}: {
  items: GalleryItem[];
  onReorder: (ids: string[]) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}) {
  const [items, setItems] = useState(initialItems);
  const [, startTransition] = useTransition();

  const sensors = useSensors(useSensor(PointerSensor));

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = items.findIndex((i) => i.id === active.id);
    const newIndex = items.findIndex((i) => i.id === over.id);
    const newItems = arrayMove(items, oldIndex, newIndex);

    setItems(newItems);
    startTransition(() => {
      onReorder(newItems.map((i) => i.id));
    });
  }

  function handleDelete(id: string) {
    if (!confirm("Delete this piece?")) return;
    setItems((prev) => prev.filter((i) => i.id !== id));
    startTransition(() => {
      onDelete(id);
    });
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-16 text-sm text-gray-400 border border-dashed border-gray-200 rounded-xl">
        No pieces yet. Add one above.
      </div>
    );
  }

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <div className="flex flex-col gap-2">
          {items.map((item) => (
            <SortableItem key={item.id} item={item} onDelete={handleDelete} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
