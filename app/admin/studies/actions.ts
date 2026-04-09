"use server";

import { db } from "@/app/lib/db";
import { watercolorStudies } from "@/app/lib/db/schema";
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

export async function addStudy(formData: FormData) {
  await requireAdmin();

  const title = formData.get("title") as string;
  const imageUrl = formData.get("imageUrl") as string;
  const price = parseInt(formData.get("price") as string) || 0;
  const status = (formData.get("status") as string) || "Available";

  const [{ maxPos }] = await db
    .select({ maxPos: max(watercolorStudies.position) })
    .from(watercolorStudies);

  await db.insert(watercolorStudies).values({
    id: slugify(title),
    title,
    imageUrl,
    price,
    medium: "Watercolor study",
    year: new Date().getFullYear().toString(),
    status,
    position: (maxPos ?? 0) + 10,
  });

  revalidatePath("/admin/studies");
  revalidatePath("/studies");
}

export async function deleteStudy(id: string) {
  await requireAdmin();
  await db.delete(watercolorStudies).where(eq(watercolorStudies.id, id));
  revalidatePath("/admin/studies");
  revalidatePath("/studies");
}

export async function reorderStudies(ids: string[]) {
  await requireAdmin();
  await Promise.all(
    ids.map((id, index) =>
      db
        .update(watercolorStudies)
        .set({ position: index * 10 })
        .where(eq(watercolorStudies.id, id))
    )
  );
  revalidatePath("/admin/studies");
  revalidatePath("/studies");
}
