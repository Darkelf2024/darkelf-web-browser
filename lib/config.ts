// ---------------------------------------------------------------------------
// Download resolver config — SAFE DOMAIN ALLOWLIST
// ---------------------------------------------------------------------------
// Only artifact URLs originating from these hostnames will be followed.
// NEVER add untrusted domains here.
// ---------------------------------------------------------------------------

export const ALLOWED_DOWNLOAD_HOSTNAMES: ReadonlySet<string> = new Set([
  "github.com",
  "objects.githubusercontent.com",
]);

// TODO: Replace slugs once real repos are created
export const REPO_CONFIG = {
  cocoa: {
    org: "Darkelf2024",
    repo: "Darkelf-Cocoa-Browser",
    url: "https://github.com/Darkelf2024/Darkelf-Cocoa-Browser",
    releasesUrl: "https://github.com/Darkelf2024/Darkelf-Cocoa-Browser/releases",
  },
  shadow_lite: {
    org: "Darkelf2024",
    repo: "Darkelf-Shadow",
    url: "https://github.com/Darkelf2024/Darkelf-Shadow",
    releasesUrl: "https://github.com/Darkelf2024/Darkelf-Shadow/releases",
  },
  osint_ai: {
    org: "Darkelf2024",
    repo: "Darkelf-OSINT-Ai",
    url: "https://github.com/Darkelf2024/Darkelf-OSINT-Ai",
    releasesUrl: "https://github.com/Darkelf2024/Darkelf-OSINT-Ai/releases",
  },
  mini_browser: {
    org: "Darkelf2024",
    repo: "Darkelf-Mini-Browser",
    url: "https://github.com/Darkelf2024/Darkelf-Mini-Browser",
    releasesUrl: "https://github.com/Darkelf2024/Darkelf-Mini-Browser/releases",
  },
} as const;

export const PRODUCT_META = {
  cocoa: {
    displayName: "Darkelf Cocoa",
    tagline: "Cocoa 4.0 — macOS Only · Security Containment & Minimization",
    shortDescription:
      "macOS-native (Cocoa/WebKit) browser. Reduced attack surface, non-persistent workflows, and hardware-level isolation. macOS only.",
    color: "var(--accent)",
    colorRgb: "54,255,154",
  },
  shadow_lite: {
    displayName: "Darkelf Shadow",
    tagline: "PySide6 Rewrite — Linux & Windows",
    shortDescription:
      "QtWebEngine/PySide6 rewrite for Linux and Windows. Hardened sandbox, request interception, no persistence, no WebRTC.",
    color: "var(--accent-2)",
    colorRgb: "0,234,255",
  },
  osint_ai: {
    displayName: "Darkelf OSINT AI",
    tagline: "AI-Assisted OSINT — Windows · Linux · macOS · Python + Ollama",
    shortDescription:
      "AI-powered Open-Source Intelligence assistant. Combines traditional OSINT workflows with local AI reasoning via Ollama. Modular, ethical, and built for investigators.",
    color: "var(--accent-4)",
    colorRgb: "255,152,0",
  },
  mini_browser: {
    displayName: "Darkelf Mini Browser",
    tagline: "Stealth · Hardened · Ephemeral — PySide6 + Tor · Windows · Linux · macOS",
    shortDescription:
      "Next-generation privacy mini browser built on PySide6/QtWebEngine. Tor-by-default, SuperHardenedPage JS shields, network adblock, and full ephemeral session isolation.",
    color: "var(--accent-5)",
    colorRgb: "0,200,180",
  },
} as const;
