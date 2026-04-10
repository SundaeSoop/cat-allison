// app/(watercolor)/layout.tsx
import { WindSong } from "next/font/google";
import { GlitchLink } from "../components/GlitchLink";
import { GlitchText } from "../components/GlitchText";

const windSong = WindSong({
  subsets: ["latin"],
  weight: "400",
});

export default function WatercolorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="min-h-screen"
      style={{ background: "rgb(var(--bg))", color: "rgb(var(--fg))" }}
    >
      <header
        className="sticky top-0 z-50 backdrop-blur"
        style={{
          borderBottom: "1px solid rgb(var(--border))",
          background: "rgba(255, 255, 255, 0.8)",
        }}
      >
        <div className="container py-5 flex items-center justify-between">
          <a href="/" className={`${windSong.className} text-4xl tracking-wide`}>
            catherine
          </a>

          <nav className="flex gap-6 text-sm" style={{ color: "rgb(var(--muted))" }}>
            <a className="hover:opacity-100 opacity-80" href="/gallery">Gallery</a>
            <a className="hover:opacity-100 opacity-80" href="/studies">Studies</a>
            <GlitchLink href="/digital" className="hover:opacity-100 opacity-80">
              <GlitchText text="Digital" hoverOnly />
            </GlitchLink>
            <a className="hover:opacity-100 opacity-80" href="/about">About</a>
            <a className="hover:opacity-100 opacity-80" href="/contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container py-10">{children}</main>

      <footer style={{ borderTop: "1px solid rgb(var(--border))" }}>
        <div className="container py-10 text-sm flex flex-col gap-2" style={{ color: "rgb(var(--muted))" }}>
          <div>© {new Date().getFullYear()} Catherine Allison</div>
          <div className="text-xs">Watercolor originals • Digital prints</div>
        </div>
      </footer>
    </div>
  );
}
