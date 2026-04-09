import { db } from "@/app/lib/db";
import { watercolorPieces } from "@/app/lib/db/schema";
import { asc } from "drizzle-orm";
import { SortableGallery, type GalleryItem } from "../_components/SortableGallery";
import { addWatercolorPiece, deleteWatercolorPiece, reorderWatercolorPieces } from "./actions";
import { AddPieceForm } from "../_components/AddPieceForm";

export default async function WatercolorAdminPage() {
  const pieces = await db
    .select()
    .from(watercolorPieces)
    .orderBy(asc(watercolorPieces.position));

  const items: GalleryItem[] = pieces.map((p) => ({
    id: p.id,
    title: p.title,
    imageUrl: p.imageUrl,
    subtitle: `${p.size} • ${p.year} • $${p.price}`,
    badge: p.status,
  }));

  return (
    <div className="flex flex-col gap-8 max-w-2xl">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Watercolor</h1>
        <p className="text-sm text-gray-500 mt-1">{pieces.length} pieces</p>
      </div>

      <AddPieceForm
        action={addWatercolorPiece}
        fields={[
          { name: "size", label: "Size", placeholder: '9"×12"', defaultValue: '9"×12"' },
          {
            name: "status",
            label: "Status",
            type: "select",
            options: ["Available", "Sold", "NFS"],
          },
          { name: "price", label: "Price ($)", type: "number", placeholder: "250" },
          { name: "description", label: "Description", type: "textarea" },
        ]}
      />

      <SortableGallery
        items={items}
        onReorder={reorderWatercolorPieces}
        onDelete={deleteWatercolorPiece}
      />
    </div>
  );
}
