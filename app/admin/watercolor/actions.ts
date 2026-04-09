"use server";

import { db } from "@/app/lib/db";
import { watercolorPieces } from "@/app/lib/db/schema";
import { eq, max } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { getSession } from "@/app/lib/session";

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function requireAdmin() {
  const session = await getSession();
  if (!session.isAdmin) throw new Error("Unauthorized");
}

export async function addWatercolorPiece(formData: FormData) {
  await requireAdmin();

  const title = formData.get("title") as string;
  const imageUrl = formData.get("imageUrl") as string;
  const price = parseInt(formData.get("price") as string) || 0;
  const size = (formData.get("size") as string) || '9"×12"';
  const status = (formData.get("status") as string) || "Available";
  const description = (formData.get("description") as string) || null;

  const [{ maxPos }] = await db
    .select({ maxPos: max(watercolorPieces.position) })
    .from(watercolorPieces);

  const id = slugify(title);

  await db.insert(watercolorPieces).values({
    id,
    title,
    imageUrl,
    price,
    medium: "Watercolor on paper",
    size,
    year: new Date().getFullYear().toString(),
    status,
    description,
    position: (maxPos ?? 0) + 10,
  });

  revalidatePath("/admin/watercolor");
  revalidatePath("/gallery");
  revalidatePath("/");
}

export async function deleteWatercolorPiece(id: string) {
  await requireAdmin();
  await db.delete(watercolorPieces).where(eq(watercolorPieces.id, id));
  revalidatePath("/admin/watercolor");
  revalidatePath("/gallery");
  revalidatePath("/");
}

export async function reorderWatercolorPieces(ids: string[]) {
  await requireAdmin();
  await Promise.all(
    ids.map((id, index) =>
      db
        .update(watercolorPieces)
        .set({ position: index * 10 })
        .where(eq(watercolorPieces.id, id))
    )
  );
  revalidatePath("/admin/watercolor");
  revalidatePath("/gallery");
  revalidatePath("/");
}
