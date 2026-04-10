"use client";

import { useGlitch } from "./GlitchProvider";

export function GlitchLink({
  href,
  children,
  className,
  style,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const { trigger } = useGlitch();

  return (
    <a
      href={href}
      className={className}
      style={style}
      onClick={(e) => {
        e.preventDefault();
        trigger(href);
      }}
    >
      {children}
    </a>
  );
}
