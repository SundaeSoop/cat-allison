import Image from "next/image";
import { db } from "@/app/lib/db";
import { watercolorPieces } from "@/app/lib/db/schema";
import { eq } from "drizzle-orm";

export default async function ArtworkPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const [piece] = await db
    .select()
    .from(watercolorPieces)
    .where(eq(watercolorPieces.id, id))
    .limit(1);

  if (!piece) {
    return (
      <div className="max-w-xl">
        <a className="text-sm text-gray-500 hover:text-gray-700 transition" href="/gallery">
          ← Back to gallery
        </a>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight">Not found</h1>
        <p className="mt-2 text-gray-600">
          That piece doesn't exist yet (or the link is wrong).
        </p>
        <div className="mt-4 text-xs text-gray-500">
          Requested id: <span className="font-mono">{id}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <a
          href="/gallery"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition"
        >
          ← Back to gallery
        </a>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="card overflow-hidden">
          <div className="relative aspect-square bg-gray-100">
            <Image
              src={piece.imageUrl}
              alt={piece.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold tracking-tight">{piece.title}</h1>

          <div className="text-sm text-gray-600">
            {piece.medium} • {piece.size} • {piece.year}
          </div>

          {piece.description && (
            <p className="text-gray-700 leading-relaxed">{piece.description}</p>
          )}

          <div className="card p-5 flex flex-col gap-3">
            <div className="text-sm">
              <span className="font-medium">Status:</span>{" "}
              <span className="text-gray-600">{piece.status}</span>
            </div>

            {piece.status !== "NFS" && (
              <div className="text-sm">
                <span className="font-medium">Price:</span>{" "}
                <span className="text-gray-600">${piece.price}</span>
              </div>
            )}

            {piece.status === "Available" && (
              <a
                href={`/contact?artwork=${encodeURIComponent(piece.id)}`}
                className="rounded-xl bg-gray-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-gray-800 text-center"
              >
                Inquire about this piece
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
