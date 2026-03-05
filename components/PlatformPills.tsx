"use client";

import { useState, useEffect } from "react";
import type { Platform } from "@/lib/releases";

interface PlatformPillsProps {
  value: Platform | null;
  onChange: (platform: Platform | null) => void;
}

export function PlatformPills({ value, onChange }: PlatformPillsProps) {
  return (
    <div className="platform-pills" role="group" aria-label="Filter by operating system">
      <button
        type="button"
        className={`platform-pill ${value === null ? "platform-pill--active" : ""}`}
        onClick={() => onChange(null)}
        aria-pressed={value === null}
      >
        All Platforms
      </button>
      <button
        type="button"
        className={`platform-pill ${value === "macos" ? "platform-pill--active" : ""}`}
        onClick={() => onChange("macos")}
        aria-pressed={value === "macos"}
      >
        <i className="bi bi-apple" aria-hidden="true" />
        macOS
      </button>
      <button
        type="button"
        className={`platform-pill ${value === "windows" ? "platform-pill--active" : ""}`}
        onClick={() => onChange("windows")}
        aria-pressed={value === "windows"}
      >
        <i className="bi bi-windows" aria-hidden="true" />
        Windows
      </button>
      <button
        type="button"
        className={`platform-pill ${value === "linux" ? "platform-pill--active" : ""}`}
        onClick={() => onChange("linux")}
        aria-pressed={value === "linux"}
      >
        <i className="bi bi-ubuntu" aria-hidden="true" />
        Linux
      </button>
    </div>
  );
}

/** Auto-detects OS and returns the detected platform, or null if unknown/macOS. */
export function useDetectedPlatform(): Platform | null {
  const [detected, setDetected] = useState<Platform | null>(null);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes("win")) {
      setDetected("windows");
    } else if (ua.includes("mac")) {
      setDetected("macos");
    } else if (ua.includes("linux") && !ua.includes("android")) {
      setDetected("linux");
    }
  }, []);

  return detected;
}
