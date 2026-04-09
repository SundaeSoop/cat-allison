import Image from "next/image";
import { db } from "@/app/lib/db";
import { watercolorStudies } from "@/app/lib/db/schema";
import { asc } from "drizzle-orm";

export default async function StudiesPage() {
  const studies = await db
    .select()
    .from(watercolorStudies)
    .orderBy(asc(watercolorStudies.position));

  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Studies</h1>
          <p className="muted mt-2">Watercolor practice pieces — exploration, technique, and iteration.</p>
        </div>

        <a href="/gallery" className="text-sm text-gray-600 hover:text-gray-900 transition">
          ← Back to gallery
        </a>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {studies.map((s) => (
          <div key={s.id}>
            <div className="card overflow-hidden">
              <div className="relative aspect-[4/3] bg-gray-100">
                <Image
                  src={s.imageUrl}
                  alt={s.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="mt-3 text-sm font-medium">{s.title}</div>
            <div className="text-xs text-gray-500">{s.medium}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
