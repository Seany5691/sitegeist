"use client";

import { cn } from "@/lib/utils";

interface SiteGeistLogoProps {
  className?: string;
}

export function SiteGeistLogo({ className }: SiteGeistLogoProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {/* SVG Logo Mark — stylized "g" compass */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Outer ring */}
        <circle
          cx="16"
          cy="16"
          r="14"
          stroke="#DFFF00"
          strokeWidth="1.5"
          opacity="0.3"
        />
        {/* Inner stylized "g" */}
        <path
          d="M12 10C12 10 10 10 9.5 12C9 14 9 16 9 18C9 20 10 22 12 22C14 22 15 20 15 18C15 16 15 14 15 12"
          stroke="#DFFF00"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Compass arrow */}
        <path
          d="M16 8L22 16L16 24L10 16Z"
          fill="#DFFF00"
          opacity="0.15"
        />
        <path
          d="M16 11L20 16L16 21"
          stroke="#DFFF00"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Pixel dot */}
        <rect x="22" y="8" width="3" height="3" fill="#DFFF00" rx="0.5" />
      </svg>

      {/* Wordmark */}
      <span className="font-sans text-lg font-bold tracking-tight text-text-primary">
        Site
        <span className="text-accent">Geist</span>
      </span>
    </div>
  );
}
