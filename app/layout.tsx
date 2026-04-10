// app/layout.tsx
import "./globals.css";
import { GlitchProvider } from "./components/GlitchProvider";

export const metadata = {
  title: "Catherine Allison",
  description: "Watercolor paintings and digital art by Catherine Allison",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <GlitchProvider>{children}</GlitchProvider>
      </body>
    </html>
  );
}