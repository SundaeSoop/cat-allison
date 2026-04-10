// app/(digital)/layout.tsx
import type { ReactNode } from "react";
import { GlitchLink } from "../components/GlitchLink";
import { GlitchText } from "../components/GlitchText";

const neonStyle: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(90deg, #ff2ec4 0%, #00f7ff 50%, #faff00 100%)",
  textShadow:
    "0 0 6px rgba(255, 46, 196, 0.8), 0 0 14px rgba(0, 247, 255, 0.6)",
};

export default function DigitalLayout({ children }: { children: ReactNode }) {
  return (
    <div
      data-theme="cyberpunk"
      className="min-h-screen"
      style={{ background: "rgb(var(--bg))", color: "rgb(var(--fg))" }}
    >
      <div
        className="min-h-screen"
        style={{
          background:
            "radial-gradient(900px circle at 15% 0%, rgba(168, 85, 247, 0.18), transparent 40%)," +
            "radial-gradient(900px circle at 85% 20%, rgba(34, 211, 238, 0.14), transparent 45%)," +
            "linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.35))",
        }}
      >
        <header
          className="sticky top-0 z-50 backdrop-blur"
          style={{
            borderBottom: "1px solid rgb(var(--border))",
            background: "rgba(6, 8, 16, 0.75)",
          }}
        >
          <div className="container py-5 flex items-center justify-between">
            <a
              href="/digital"
              className="tracking-wide bg-clip-text text-transparent"
              style={{ ...neonStyle, fontWeight: 700, textTransform: "uppercase", fontSize: "2.5rem" }}
            >
              <GlitchText text="Catherine" />
            </a>

            <nav className="flex items-center gap-6 text-sm" style={{ fontWeight: 700, textTransform: "uppercase" }}>
              <GlitchLink href="/" className="bg-clip-text text-transparent" style={neonStyle}>
                <GlitchText text="Watercolor" />
              </GlitchLink>

              <a href="/digital/studies" className="bg-clip-text text-transparent" style={neonStyle}>
                <GlitchText text="Studies" />
              </a>

              <a href="/about" className="bg-clip-text text-transparent" style={neonStyle}>
                <GlitchText text="About" />
              </a>

              <a href="/contact" className="bg-clip-text text-transparent" style={neonStyle}>
                <GlitchText text="Contact" />
              </a>
            </nav>
          </div>
        </header>

        <main className="container py-10">{children}</main>

        <footer style={{ borderTop: "1px solid rgb(var(--border))" }}>
          <div className="container py-10 text-sm opacity-80">
            © {new Date().getFullYear()} Catherine Allison
          </div>
        </footer>
      </div>
    </div>
  );
}
