import { db } from "@/app/lib/db";
import { digitalPieces } from "@/app/lib/db/schema";
import { asc } from "drizzle-orm";
import { DigitalGalleryClient } from "./_components/DigitalGalleryClient";

export default async function DigitalGalleryPage() {
  const pieces = await db
    .select()
    .from(digitalPieces)
    .orderBy(asc(digitalPieces.position));

  return <DigitalGalleryClient pieces={pieces} />;
}
