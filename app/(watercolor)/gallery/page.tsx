import Image from "next/image";
import { db } from "@/app/lib/db";
import { watercolorPieces } from "@/app/lib/db/schema";
import { asc } from "drizzle-orm";

export default async function GalleryPage() {
  const pieces = await db
    .select()
    .from(watercolorPieces)
    .orderBy(asc(watercolorPieces.position));

  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Gallery</h1>
          <p className="muted mt-2">Finished watercolor works.</p>
        </div>

        <a href="/studies" className="text-sm text-gray-600 hover:text-gray-900 transition">
          View studies →
        </a>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {pieces.map((p) => (
          <a key={p.id} href={`/gallery/${p.id}`} className="group">
            <div className="card overflow-hidden">
              <div className="relative aspect-[4/3] bg-gray-100">
                <Image
                  src={p.imageUrl}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
            <div className="mt-3 text-sm font-medium">{p.title}</div>
            <div className="text-xs text-gray-500">{p.medium}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
