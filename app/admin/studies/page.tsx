import { db } from "@/app/lib/db";
import { watercolorStudies } from "@/app/lib/db/schema";
import { asc } from "drizzle-orm";
import { SortableGallery, type GalleryItem } from "../_components/SortableGallery";
import { addStudy, deleteStudy, reorderStudies } from "./actions";
import { AddPieceForm } from "../_components/AddPieceForm";

export default async function StudiesAdminPage() {
  const studies = await db
    .select()
    .from(watercolorStudies)
    .orderBy(asc(watercolorStudies.position));

  const items: GalleryItem[] = studies.map((s) => ({
    id: s.id,
    title: s.title,
    imageUrl: s.imageUrl,
    subtitle: `${s.year} • $${s.price}`,
    badge: s.status,
  }));

  return (
    <div className="flex flex-col gap-8 max-w-2xl">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Studies</h1>
        <p className="text-sm text-gray-500 mt-1">{studies.length} studies</p>
      </div>

      <AddPieceForm
        action={addStudy}
        fields={[
          {
            name: "status",
            label: "Status",
            type: "select",
            options: ["Available", "Sold"],
          },
          { name: "price", label: "Price ($)", type: "number", placeholder: "250" },
        ]}
      />

      <SortableGallery
        items={items}
        onReorder={reorderStudies}
        onDelete={deleteStudy}
      />
    </div>
  );
}
