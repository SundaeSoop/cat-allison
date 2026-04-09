"use server";

import { db } from "@/app/lib/db";
import { digitalPieces } from "@/app/lib/db/schema";
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

export async function addDigitalPiece(formData: FormData) {
  await requireAdmin();

  const title = formData.get("title") as string;
  const imageUrl = formData.get("imageUrl") as string;
  const category = (formData.get("category") as string) || "portraits";

  const [{ maxPos }] = await db
    .select({ maxPos: max(digitalPieces.position) })
    .from(digitalPieces);

  await db.insert(digitalPieces).values({
    id: `${category}-${slugify(title)}`,
    title,
    srcUrl: imageUrl,
    category,
    position: (maxPos ?? 0) + 10,
  });

  revalidatePath("/admin/digital");
  revalidatePath("/digital");
}

export async function deleteDigitalPiece(id: string) {
  await requireAdmin();
  await db.delete(digitalPieces).where(eq(digitalPieces.id, id));
  revalidatePath("/admin/digital");
  revalidatePath("/digital");
}

export async function reorderDigitalPieces(ids: string[]) {
  await requireAdmin();
  await Promise.all(
    ids.map((id, index) =>
      db
        .update(digitalPieces)
        .set({ position: index * 10 })
        .where(eq(digitalPieces.id, id))
    )
  );
  revalidatePath("/admin/digital");
  revalidatePath("/digital");
}
