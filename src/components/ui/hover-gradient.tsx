"use client";

import { ReactNode } from "react";

export function HoverBorderGradient({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden">
      {children}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r from-primary to-secondary
          opacity-0
          transition-opacity duration-300
          select-none
        "
      />
    </div>
  );
}

export function Spotlight({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden">
      {children}
      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity duration-300
          bg-gradient-circular
          pointer-events-none
        "
      />
    </div>
  );
}