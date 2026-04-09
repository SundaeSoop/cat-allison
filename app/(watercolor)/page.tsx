import Image from "next/image";
import { db } from "@/app/lib/db";
import { watercolorPieces } from "@/app/lib/db/schema";
import { asc, ne } from "drizzle-orm";

export default async function Home() {
  const pieces = await db
    .select()
    .from(watercolorPieces)
    .where(ne(watercolorPieces.status, "NFS"))
    .orderBy(asc(watercolorPieces.position))
    .limit(5);

  const hero = pieces[0];

  return (
    <div className="flex flex-col gap-12">
      {/* HERO */}
      {hero && (
        <section className="grid gap-8 md:grid-cols-2 items-center">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Watercolor paintings inspired by quiet moments.
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Original works. Soft color, fine detail, and timeless pieces made to live with you.
            </p>

            <div className="flex gap-3">
              <a
                href="/gallery"
                className="rounded-xl bg-gray-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-gray-800"
              >
                View Gallery
              </a>
              <a
                href="/contact"
                className="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-medium hover:border-gray-400"
              >
                Contact me.
              </a>
            </div>
          </div>

          <div className="card overflow-hidden">
            <div className="relative aspect-[4/3]">
              <Image
                src={hero.imageUrl}
                alt={hero.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* FEATURED */}
      <section className="flex flex-col gap-4">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-semibold">Featured</h2>
          <a className="text-sm text-gray-600 hover:text-gray-900" href="/gallery">
            See all
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pieces.map((p) => (
            <a key={p.id} href={`/gallery/${p.id}`} className="group">
              <div className="card overflow-hidden">
                <div className="relative aspect-square">
                  <Image
                    src={p.imageUrl}
                    alt={p.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
              <div className="mt-2 text-sm font-medium">{p.title}</div>
              <div className="text-xs text-gray-500">{p.medium}</div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
