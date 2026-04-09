import { db } from "@/app/lib/db";
import { digitalPieces } from "@/app/lib/db/schema";
import { asc } from "drizzle-orm";
import { SortableGallery, type GalleryItem } from "../_components/SortableGallery";
import { addDigitalPiece, deleteDigitalPiece, reorderDigitalPieces } from "./actions";
import { AddPieceForm } from "../_components/AddPieceForm";

const CATEGORIES = ["neon", "portraits", "characters", "cartoon", "ink", "studies"];

export default async function DigitalAdminPage() {
  const pieces = await db
    .select()
    .from(digitalPieces)
    .orderBy(asc(digitalPieces.position));

  const items: GalleryItem[] = pieces.map((p) => ({
    id: p.id,
    title: p.title,
    imageUrl: p.srcUrl,
    badge: p.category,
  }));

  return (
    <div className="flex flex-col gap-8 max-w-2xl">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Digital</h1>
        <p className="text-sm text-gray-500 mt-1">{pieces.length} pieces</p>
      </div>

      <AddPieceForm
        action={addDigitalPiece}
        fields={[
          {
            name: "category",
            label: "Category",
            type: "select",
            options: CATEGORIES,
          },
        ]}
      />

      <SortableGallery
        items={items}
        onReorder={reorderDigitalPieces}
        onDelete={deleteDigitalPiece}
      />
    </div>
  );
}
