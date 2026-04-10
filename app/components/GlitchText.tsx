"use client";

import "./GlitchText.css";

export function GlitchText({
  text,
  className,
  hoverOnly = false,
}: {
  text: string;
  className?: string;
  hoverOnly?: boolean;
}) {
  return (
    <span className={`glitch-text ${hoverOnly ? "glitch-text--hover-only" : ""} ${className ?? ""}`} data-text={text}>
      <span aria-hidden="true" className="glitch-text__layer glitch-text__layer--1">{text}</span>
      <span aria-hidden="true" className="glitch-text__layer glitch-text__layer--2">{text}</span>
      <span aria-hidden="true" className="glitch-text__layer glitch-text__layer--3">{text}</span>
      {/* Visible/readable text */}
      <span className="glitch-text__main">{text}</span>
    </span>
  );
}
