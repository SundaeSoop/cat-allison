"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { DIGITAL_CATEGORIES } from "../../../lib/digital-gallery";

type DigitalPiece = { id: string; title: string; srcUrl: string; category: string };

export function DigitalGalleryClient({ pieces }: { pieces: DigitalPiece[] }) {
  const [active, setActive] = useState<string>("all");

  const items = useMemo(() => {
    if (active === "all") return pieces.filter((p) => p.category !== "studies");
    return pieces.filter((p) => p.category === active);
  }, [active, pieces]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">Digital Gallery</h1>
        <p className="muted">Neon, characters, portraits, ink, and studies.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setActive("all")}
          className={`rounded-full px-4 py-2 text-sm border transition ${
            active === "all" ? "opacity-100" : "opacity-80 hover:opacity-100"
          }`}
          style={{ borderColor: "rgb(var(--border))", background: "rgba(255,255,255,0.03)" }}
        >
          All
        </button>

        {DIGITAL_CATEGORIES.filter((c) => c.key !== "studies").map((c) => (
          <button
            key={c.key}
            onClick={() => setActive(c.key)}
            className={`rounded-full px-4 py-2 text-sm border transition ${
              active === c.key ? "opacity-100" : "opacity-80 hover:opacity-100"
            }`}
            style={{ borderColor: "rgb(var(--border))", background: "rgba(255,255,255,0.03)" }}
          >
            {c.label}
          </button>
        ))}

        <a
          href="/digital/studies"
          className="rounded-full px-4 py-2 text-sm border opacity-90 hover:opacity-100 transition"
          style={{ borderColor: "rgb(var(--border))", background: "rgba(168, 85, 247, 0.12)" }}
        >
          Studies → Dedicated page
        </a>
      </div>

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((a) => (
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
          </div>
        ))}
      </div>
    </div>
  );
}
