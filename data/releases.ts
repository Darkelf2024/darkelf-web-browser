// ---------------------------------------------------------------------------
// Darkelf Download Center — Release Data Store
// ---------------------------------------------------------------------------
// TODO: Replace all TODO_* placeholders with real values before publishing.
// TODO: Replace TODO_ORG with the GitHub organisation slug, e.g. "Darkelf2024"
// TODO: Replace TODO_COCOA_REPO with the Cocoa repo name
// TODO: Replace TODO_SHADOW_REPO with the Shadow Lite repo name
// TODO: Replace TODO_SHADOW_OSINT_REPO with the Darkelf Shadow (OSINT) repo name
// TODO: Replace every SHA256 value with the real hex digest of the artifact
// ---------------------------------------------------------------------------

export type ProductId = "cocoa" | "shadow_lite" | "osint_ai" | "mini_browser";
export type Channel = "stable" | "nightly";
export type Platform = "windows" | "linux" | "macos";
export type FileType = "exe" | "appimage" | "dmg";

export interface Artifact {
  platform: Platform;
  arch: "x64";
  fileType: FileType;
  /** Full GitHub Releases asset URL — ONLY github.com URLs are allowed. */
  url: string;
  /** Uncompressed file size in bytes. */
  sizeBytes: number;
  /** Lowercase hex SHA-256 of the artifact file. */
  sha256: string;
  /** Optional detached GPG / Minisign signature URL. */
  signature?: string;
  /** Human-readable release notes URL (GitHub Releases tag page). */
  notesUrl?: string;
}

export interface Release {
  product: ProductId;
  channel: Channel;
  version: string;
  /** ISO-8601 date, e.g. "2026-02-01" */
  dateISO: string;
  /** Short bullet highlights shown on product cards and detail pages. */
  highlights: string[];
  /** Optional markdown changelog — render safely (no raw HTML). */
  notesMarkdown?: string;
  artifacts: Artifact[];
}

// ---------------------------------------------------------------------------
// Seeded release data — 1 example release per product
// ---------------------------------------------------------------------------
export const releases: Release[] = [
  {
    product: "cocoa",
    channel: "stable",
    version: "4.0.0",
    dateISO: "2026-02-01",
    highlights: [
      "Secure Snapshot (Cmd+S): strips JS → static HTML, saves locally; PDF export optional",
      "TLS indicator — green on HTTPS, white on internal pages, red when blocked",
      "Canvas hardening with per-session rotation signatures",
      "Tab isolation + selective script / resource / tracker blocking (~100 rules, scalable)",
      "Minimal UX — non-persistent workflow, nothing lingers after close",
    ],
    notesMarkdown: `## Darkelf Cocoa 4.0.0\n\n### What's New\n- Initial Cocoa 4.0 release with full security containment model\n- Secure Snapshot feature introduced (Cmd+S)\n- TLS indicator now shows block state in red\n- Canvas per-session rotation enabled by default\n\n### Known Issues\n- YouTube fullscreen may be impacted by custom toolbar overlay; toolbar rework in progress`,
    artifacts: [
      {
        platform: "macos",
        arch: "x64",
        fileType: "dmg",
        // TODO: replace with real asset URL after creating the GitHub Release
        url: "https://github.com/Darkelf2024/Darkelf-Cocoa-Browser/releases/download/TODO_VERSION/DarkelfCocoa-TODO_macos-x64.dmg",
        sizeBytes: 48_234_567,
        // TODO: replace with real SHA-256 hex digest
        sha256: "TODO_SHA256_PLACEHOLDER_REPLACE_WITH_ACTUAL_HASH_BEFORE_RELEASE",
        // TODO: replace with real notes URL
        notesUrl: "https://github.com/Darkelf2024/Darkelf-Cocoa-Browser/releases/tag/v4.0.0",
      },
    ],
  },
  {
    product: "shadow_lite",
    channel: "nightly",
    version: "0.1.0-nightly",
    dateISO: "2026-02-15",
    highlights: [
      "Tab isolation + hardened sandbox (PySide6 / QtWebEngine rewrite)",
      "Request interception via QWebEngineUrlRequestInterceptor + injection-based mitigation",
      "Non-persistent: cookies, cache, and history wiped on shutdown",
      "No WebRTC — no downloads, no bookmarks (by design)",
      "Disk writes capped to a strict folder; full wipe on shutdown",
    ],
    notesMarkdown: `## Darkelf Shadow Lite 0.1.0-nightly\n\n### Status\nRewrite in progress — PySide6 target (Linux + Windows). **Nightly channel only** — not yet production-ready.\n\n### What's New\n- Initial PySide6 rewrite checkpoint\n- QWebEngineUrlRequestInterceptor wired up\n- Non-persistent session enforced at runtime\n\n### Planned (Next Steps)\n- Randomized canvas signatures\n- Auto-hash archive for session dumps\n\n### Notes\n- YouTube fullscreen expected to work better than Cocoa build (no custom toolbar overlay)`,
    artifacts: [
      {
        platform: "windows",
        arch: "x64",
        fileType: "exe",
        // TODO: replace with real asset URL
        url: "https://github.com/Darkelf2024/Darkelf-Shadow/releases/download/TODO_VERSION/DarkelfShadowLite-TODO_windows-x64.exe",
        sizeBytes: 38_534_567,
        // TODO: replace with real SHA-256 hex digest
        sha256: "TODO_SHA256_PLACEHOLDER_REPLACE_WITH_ACTUAL_HASH_BEFORE_RELEASE",
        notesUrl: "https://github.com/Darkelf2024/Darkelf-Shadow/releases/tag/v0.1.0-nightly",
      },
      {
        platform: "linux",
        arch: "x64",
        fileType: "appimage",
        // TODO: replace with real asset URL
        url: "https://github.com/Darkelf2024/Darkelf-Shadow/releases/download/TODO_VERSION/DarkelfShadowLite-TODO_linux-x64.AppImage",
        sizeBytes: 42_234_567,
        // TODO: replace with real SHA-256 hex digest
        sha256: "TODO_SHA256_PLACEHOLDER_REPLACE_WITH_ACTUAL_HASH_BEFORE_RELEASE",
        notesUrl: "https://github.com/Darkelf2024/Darkelf-Shadow/releases/tag/v0.1.0-nightly",
      },
    ],
  },
  {
    product: "osint_ai",
    channel: "nightly",
    version: "0.1.0-alpha",
    dateISO: "2026-02-01",
    highlights: [
      "AI-assisted analysis — leverages local Ollama models to interpret and correlate OSINT data",
      "Multi-source intelligence — domains, usernames, emails, IPs, and social platforms",
      "Structured intelligence output — actionable insights instead of raw, unfiltered data",
      "Modular & extensible architecture — easy to expand with new sources or analysis modules",
      "Ethical-first design — focused strictly on publicly available information",
    ],
    notesMarkdown: `## Darkelf OSINT AI 0.1.0-alpha\n\n### What Is This?\nAI-powered Open-Source Intelligence assistant. Combines traditional OSINT workflows with AI-driven reasoning via Ollama.\n\n### Requirements\n- Python 3.9 or newer\n- Ollama installed locally (brew install ollama)\n- pip install -r requirements.txt\n\n### Installation\n\`\`\`bash\ngit clone https://github.com/Darkelf2024/Darkelf-OSINT-Ai.git\ncd Darkelf-OSINT-Ai\npip install -r requirements.txt\npython "Darkelf OSINT Ai.py"\n\`\`\`\n\n### Roadmap\n- Advanced CLI interface\n- PDF / Markdown / JSON report export\n- Data visualization and relationship mapping\n- Expanded OSINT source coverage`,
    artifacts: [
      {
        platform: "windows",
        arch: "x64",
        fileType: "exe",
        url: "https://github.com/Darkelf2024/Darkelf-OSINT-Ai/releases/download/TODO_VERSION/DarkelfOSINT-AI-TODO_windows-x64.exe",
        sizeBytes: 0,
        sha256: "TODO_SHA256_PLACEHOLDER_REPLACE_WITH_ACTUAL_HASH_BEFORE_RELEASE",
        notesUrl: "https://github.com/Darkelf2024/Darkelf-OSINT-Ai",
      },
      {
        platform: "linux",
        arch: "x64",
        fileType: "appimage",
        url: "https://github.com/Darkelf2024/Darkelf-OSINT-Ai/releases/download/TODO_VERSION/DarkelfOSINT-AI-TODO_linux-x64.AppImage",
        sizeBytes: 0,
        sha256: "TODO_SHA256_PLACEHOLDER_REPLACE_WITH_ACTUAL_HASH_BEFORE_RELEASE",
        notesUrl: "https://github.com/Darkelf2024/Darkelf-OSINT-Ai",
      },
      {
        platform: "macos",
        arch: "x64",
        fileType: "dmg",
        url: "https://github.com/Darkelf2024/Darkelf-OSINT-Ai/releases/download/TODO_VERSION/DarkelfOSINT-AI-TODO_macos-x64.dmg",
        sizeBytes: 0,
        sha256: "TODO_SHA256_PLACEHOLDER_REPLACE_WITH_ACTUAL_HASH_BEFORE_RELEASE",
        notesUrl: "https://github.com/Darkelf2024/Darkelf-OSINT-Ai",
      },
    ],
  },
  {
    product: "mini_browser",
    channel: "stable",
    version: "3.10.4.9",
    dateISO: "2025-09-01",
    highlights: [
      "Tor-by-default routing with optional local Tor launcher and proxy fallback",
      "SuperHardenedPage — hundreds of anti-fingerprinting shields injected before any page JS runs",
      "Network-level adblock: blocks requests to known ad/tracker domains at the interceptor layer",
      "UA-CH & client-hints stripping — removes all identifying headers and browser hints",
      "Full ephemeral privacy — no cookies, cache, localStorage, or session data survives across sessions",
    ],
    notesMarkdown: `## Darkelf Mini Browser v3.10.4.9\n\n### What Is This?\nStealth. Private. Hardened. Ephemeral. A PySide6/QtWebEngine privacy mini browser with Tor integration, advanced anti-fingerprinting, and stealth network-level adblock.\n\n### Requirements\n- Python 3.8+\n- PySide6\n- stem (for Tor control)\n- Tor installed on your system\n\n### Installation\n\`\`\`bash\npip install PySide6 stem\nbrew install tor  # macOS\npython3.11 darkelf.py\n\`\`\`\n\n### Security Highlights\n- Canvas fingerprinting APIs blocked at source (not just randomized)\n- WebGL, WebRTC, WebAuthn, Bluetooth, Battery, Permissions API hard-blocked\n- Letterboxing: window/screen dimensions spoofed (Tor Browser style)\n- Supercookie kill: localStorage, sessionStorage, IndexedDB, ServiceWorker all blocked\n- Strict CSP + referrer policy applied at document creation`,
    artifacts: [
      {
        platform: "windows",
        arch: "x64",
        fileType: "exe",
        url: "https://github.com/Darkelf2024/Darkelf-Mini-Browser/releases/download/TODO_VERSION/DarkelfMini-TODO_windows-x64.exe",
        sizeBytes: 0,
        sha256: "TODO_SHA256_PLACEHOLDER_REPLACE_WITH_ACTUAL_HASH_BEFORE_RELEASE",
        notesUrl: "https://github.com/Darkelf2024/Darkelf-Mini-Browser/releases/tag/v.3.10.4.9",
      },
      {
        platform: "linux",
        arch: "x64",
        fileType: "appimage",
        url: "https://github.com/Darkelf2024/Darkelf-Mini-Browser/releases/download/TODO_VERSION/DarkelfMini-TODO_linux-x64.AppImage",
        sizeBytes: 0,
        sha256: "TODO_SHA256_PLACEHOLDER_REPLACE_WITH_ACTUAL_HASH_BEFORE_RELEASE",
        notesUrl: "https://github.com/Darkelf2024/Darkelf-Mini-Browser/releases/tag/v.3.10.4.9",
      },
      {
        platform: "macos",
        arch: "x64",
        fileType: "dmg",
        url: "https://github.com/Darkelf2024/Darkelf-Mini-Browser/releases/download/TODO_VERSION/DarkelfMini-TODO_macos-x64.dmg",
        sizeBytes: 0,
        sha256: "TODO_SHA256_PLACEHOLDER_REPLACE_WITH_ACTUAL_HASH_BEFORE_RELEASE",
        notesUrl: "https://github.com/Darkelf2024/Darkelf-Mini-Browser/releases/tag/v.3.10.4.9",
      },
    ],
  },
];
