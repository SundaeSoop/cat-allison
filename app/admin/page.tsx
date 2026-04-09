import { db } from "@/app/lib/db";
import { watercolorPieces, watercolorStudies, digitalPieces } from "@/app/lib/db/schema";
import { count } from "drizzle-orm";

export default async function AdminDashboard() {
  const [[{ wc }], [{ ws }], [{ dp }]] = await Promise.all([
    db.select({ wc: count() }).from(watercolorPieces),
    db.select({ ws: count() }).from(watercolorStudies),
    db.select({ dp: count() }).from(digitalPieces),
  ]);

  const sections = [
    { label: "Watercolor", count: wc, href: "/admin/watercolor" },
    { label: "Studies", count: ws, href: "/admin/studies" },
    { label: "Digital", count: dp, href: "/admin/digital" },
  ];

  return (
    <div className="flex flex-col gap-8 max-w-2xl">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">Manage Diana's artwork.</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {sections.map((s) => (
          <a
            key={s.href}
            href={s.href}
            className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-gray-300 transition-colors"
          >
            <div className="text-3xl font-semibold text-gray-900">{s.count}</div>
            <div className="text-sm text-gray-500 mt-1">{s.label}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
