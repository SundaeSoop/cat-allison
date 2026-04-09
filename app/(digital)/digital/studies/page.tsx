import Image from "next/image";
import { db } from "@/app/lib/db";
import { digitalPieces } from "@/app/lib/db/schema";
import { asc, eq } from "drizzle-orm";

export default async function DigitalStudiesPage() {
  const studies = await db
    .select()
    .from(digitalPieces)
    .where(eq(digitalPieces.category, "studies"))
    .orderBy(asc(digitalPieces.position));

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">Studies</h1>
        <p className="muted">
          Practice, experimentation, and progress — lighting, anatomy, form, and iteration.
        </p>

        <div className="mt-2 flex gap-3">
          <a href="/digital" className="text-sm opacity-80 hover:opacity-100 transition">
            ← Back to Digital Gallery
          </a>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {studies.map((a) => (
          <div key={a.id}>
            <div className="card overflow-hidden">
              <div className="relative aspect-[4/3] bg-black/20">
                <Image
                  src={a.srcUrl}
                  alt={a.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="mt-2 text-sm font-medium">{a.title}</div>
            <div className="text-xs muted">Study</div>
          </div>
        ))}
      </div>
    </div>
  );
}
