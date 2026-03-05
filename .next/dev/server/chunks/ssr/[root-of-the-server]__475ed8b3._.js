module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/data/releases.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

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
__turbopack_context__.s([
    "releases",
    ()=>releases
]);
const releases = [
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
            "Minimal UX — non-persistent workflow, nothing lingers after close"
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
                notesUrl: "https://github.com/Darkelf2024/Darkelf-Cocoa-Browser/releases/tag/v4.0.0"
            }
        ]
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
            "Disk writes capped to a strict folder; full wipe on shutdown"
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
                notesUrl: "https://github.com/Darkelf2024/Darkelf-Shadow/releases/tag/v0.1.0-nightly"
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
                notesUrl: "https://github.com/Darkelf2024/Darkelf-Shadow/releases/tag/v0.1.0-nightly"
            }
        ]
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
            "Ethical-first design — focused strictly on publicly available information"
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
                notesUrl: "https://github.com/Darkelf2024/Darkelf-OSINT-Ai"
            },
            {
                platform: "linux",
                arch: "x64",
                fileType: "appimage",
                url: "https://github.com/Darkelf2024/Darkelf-OSINT-Ai/releases/download/TODO_VERSION/DarkelfOSINT-AI-TODO_linux-x64.AppImage",
                sizeBytes: 0,
                sha256: "TODO_SHA256_PLACEHOLDER_REPLACE_WITH_ACTUAL_HASH_BEFORE_RELEASE",
                notesUrl: "https://github.com/Darkelf2024/Darkelf-OSINT-Ai"
            },
            {
                platform: "macos",
                arch: "x64",
                fileType: "dmg",
                url: "https://github.com/Darkelf2024/Darkelf-OSINT-Ai/releases/download/TODO_VERSION/DarkelfOSINT-AI-TODO_macos-x64.dmg",
                sizeBytes: 0,
                sha256: "TODO_SHA256_PLACEHOLDER_REPLACE_WITH_ACTUAL_HASH_BEFORE_RELEASE",
                notesUrl: "https://github.com/Darkelf2024/Darkelf-OSINT-Ai"
            }
        ]
    }
];
}),
"[project]/lib/config.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ---------------------------------------------------------------------------
// Download resolver config — SAFE DOMAIN ALLOWLIST
// ---------------------------------------------------------------------------
// Only artifact URLs originating from these hostnames will be followed.
// NEVER add untrusted domains here.
// ---------------------------------------------------------------------------
__turbopack_context__.s([
    "ALLOWED_DOWNLOAD_HOSTNAMES",
    ()=>ALLOWED_DOWNLOAD_HOSTNAMES,
    "PRODUCT_META",
    ()=>PRODUCT_META,
    "REPO_CONFIG",
    ()=>REPO_CONFIG
]);
const ALLOWED_DOWNLOAD_HOSTNAMES = new Set([
    "github.com",
    "objects.githubusercontent.com"
]);
const REPO_CONFIG = {
    cocoa: {
        org: "Darkelf2024",
        repo: "Darkelf-Cocoa-Browser",
        url: "https://github.com/Darkelf2024/Darkelf-Cocoa-Browser",
        releasesUrl: "https://github.com/Darkelf2024/Darkelf-Cocoa-Browser/releases"
    },
    shadow_lite: {
        org: "Darkelf2024",
        repo: "Darkelf-Shadow",
        url: "https://github.com/Darkelf2024/Darkelf-Shadow",
        releasesUrl: "https://github.com/Darkelf2024/Darkelf-Shadow/releases"
    },
    osint_ai: {
        org: "Darkelf2024",
        repo: "Darkelf-OSINT-Ai",
        url: "https://github.com/Darkelf2024/Darkelf-OSINT-Ai",
        releasesUrl: "https://github.com/Darkelf2024/Darkelf-OSINT-Ai/releases"
    }
};
const PRODUCT_META = {
    cocoa: {
        displayName: "Darkelf Cocoa",
        tagline: "Cocoa 4.0 — macOS Only · Security Containment & Minimization",
        shortDescription: "macOS-native (Cocoa/WebKit) browser. Reduced attack surface, non-persistent workflows, and hardware-level isolation. macOS only.",
        color: "var(--accent)",
        colorRgb: "54,255,154"
    },
    shadow_lite: {
        displayName: "Darkelf Shadow",
        tagline: "PySide6 Rewrite — Linux & Windows",
        shortDescription: "QtWebEngine/PySide6 rewrite for Linux and Windows. Hardened sandbox, request interception, no persistence, no WebRTC.",
        color: "var(--accent-2)",
        colorRgb: "0,234,255"
    },
    osint_ai: {
        displayName: "Darkelf OSINT AI",
        tagline: "AI-Assisted OSINT — Windows · Linux · macOS · Python + Ollama",
        shortDescription: "AI-powered Open-Source Intelligence assistant. Combines traditional OSINT workflows with local AI reasoning via Ollama. Modular, ethical, and built for investigators.",
        color: "var(--accent-4)",
        colorRgb: "255,152,0"
    }
};
}),
"[project]/lib/releases.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fileTypeLabel",
    ()=>fileTypeLabel,
    "formatBytes",
    ()=>formatBytes,
    "formatDate",
    ()=>formatDate,
    "getAllReleases",
    ()=>getAllReleases,
    "getArtifact",
    ()=>getArtifact,
    "getLatestRelease",
    ()=>getLatestRelease,
    "getRelease",
    ()=>getRelease,
    "getReleasesByProduct",
    ()=>getReleasesByProduct,
    "isAllowedDownloadUrl",
    ()=>isAllowedDownloadUrl,
    "markdownToSafeLines",
    ()=>markdownToSafeLines,
    "platformLabel",
    ()=>platformLabel,
    "resolveDownload",
    ()=>resolveDownload
]);
// ---------------------------------------------------------------------------
// Release data helpers — all pure functions, no side effects
// ---------------------------------------------------------------------------
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$releases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/releases.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config.ts [app-rsc] (ecmascript)");
;
;
function getAllReleases() {
    return [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$releases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["releases"]
    ].sort((a, b)=>new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime());
}
function getReleasesByProduct(product) {
    return getAllReleases().filter((r)=>r.product === product);
}
function getRelease(product, version) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$releases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["releases"].find((r)=>r.product === product && r.version === version);
}
function getLatestRelease(product) {
    const list = getReleasesByProduct(product);
    return list.find((r)=>r.channel === "stable") ?? list[0];
}
function getArtifact(release, platform) {
    return release.artifacts.find((a)=>a.platform === platform);
}
function isAllowedDownloadUrl(url) {
    try {
        const { hostname } = new URL(url);
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ALLOWED_DOWNLOAD_HOSTNAMES"].has(hostname);
    } catch  {
        return false;
    }
}
function resolveDownload(product, platform, version) {
    if (!product || !platform || !version) {
        return {
            ok: false,
            reason: "missing_params"
        };
    }
    const validProducts = [
        "cocoa",
        "shadow_lite",
        "osint_ai"
    ];
    const validPlatforms = [
        "windows",
        "linux",
        "macos"
    ];
    if (!validProducts.includes(product)) {
        return {
            ok: false,
            reason: "not_found"
        };
    }
    if (!validPlatforms.includes(platform)) {
        return {
            ok: false,
            reason: "unknown_platform"
        };
    }
    const release = getRelease(product, version);
    if (!release) {
        return {
            ok: false,
            reason: "not_found"
        };
    }
    const artifact = getArtifact(release, platform);
    if (!artifact) {
        return {
            ok: false,
            reason: "not_found"
        };
    }
    if (!isAllowedDownloadUrl(artifact.url)) {
        return {
            ok: false,
            reason: "bad_url"
        };
    }
    return {
        ok: true,
        release,
        artifact
    };
}
function formatBytes(bytes) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}
function formatDate(isoDate) {
    const d = new Date(isoDate + "T00:00:00Z");
    return d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC"
    });
}
function platformLabel(platform) {
    if (platform === "windows") return "Windows";
    if (platform === "macos") return "macOS";
    return "Linux";
}
function fileTypeLabel(fileType) {
    if (fileType === "exe") return ".exe";
    if (fileType === "dmg") return ".dmg";
    return ".AppImage";
}
function markdownToSafeLines(md) {
    return md.split("\n").filter(Boolean);
}
}),
"[project]/components/Nav.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Nav",
    ()=>Nav
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Nav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Nav() from the server but Nav is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/Nav.tsx <module evaluation>", "Nav");
}),
"[project]/components/Nav.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Nav",
    ()=>Nav
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Nav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Nav() from the server but Nav is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/Nav.tsx", "Nav");
}),
"[project]/components/Nav.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Nav$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/Nav.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Nav$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/Nav.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Nav$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/DownloadCenterClient.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DownloadCenterClient",
    ()=>DownloadCenterClient
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const DownloadCenterClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DownloadCenterClient() from the server but DownloadCenterClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/DownloadCenterClient.tsx <module evaluation>", "DownloadCenterClient");
}),
"[project]/components/DownloadCenterClient.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DownloadCenterClient",
    ()=>DownloadCenterClient
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const DownloadCenterClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DownloadCenterClient() from the server but DownloadCenterClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/DownloadCenterClient.tsx", "DownloadCenterClient");
}),
"[project]/components/DownloadCenterClient.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DownloadCenterClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/DownloadCenterClient.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DownloadCenterClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/DownloadCenterClient.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DownloadCenterClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/lib/asset.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BASE_PATH",
    ()=>BASE_PATH,
    "asset",
    ()=>asset
]);
/** Allowlisted base paths — only these values are ever used as a prefix */ const ALLOWED_BASE_PATHS = new Set([
    '',
    '/darkelf-web-browser'
]);
const raw = ("TURBOPACK compile-time value", "") ?? '';
const BASE_PATH = ALLOWED_BASE_PATHS.has(raw) ? raw : '';
function asset(path) {
    return `${BASE_PATH}${path}`;
}
}),
"[project]/app/download-center/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DownloadCenterPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$releases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/releases.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Nav$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Nav.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DownloadCenterClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DownloadCenterClient.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$asset$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/asset.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const metadata = {
    title: "Darkelf Download Center — Hardened Privacy Browsers for macOS, Linux & Windows",
    description: "Download Darkelf Cocoa (macOS WebKit), Darkelf Shadow (PySide6 Linux/Windows), and Darkelf OSINT AI. Non-persistent, anti-fingerprinting, SHA-256 verified. Free and open-source.",
    keywords: [
        "download privacy browser",
        "Darkelf Cocoa download",
        "Darkelf Shadow download",
        "Darkelf OSINT AI",
        "macOS privacy browser download",
        "Linux privacy browser download",
        "Windows privacy browser download",
        "hardened browser download",
        "free privacy browser",
        "open source browser download",
        "SHA-256 browser",
        "secure browser download",
        "anti-fingerprinting browser download",
        "non-persistent browser download"
    ],
    alternates: {
        canonical: "/download-center"
    },
    openGraph: {
        title: "Darkelf Download Center — Hardened Privacy Browsers",
        description: "Free, open-source, hardened privacy browsers. Darkelf Cocoa for macOS, Darkelf Shadow for Linux/Windows, and Darkelf OSINT AI. SHA-256 verified.",
        url: "https://darkelfbrowser.com/download-center",
        type: "website"
    }
};
function DownloadCenterPage() {
    const cocoaRelease = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$releases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLatestRelease"])("cocoa");
    const shadowRelease = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$releases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLatestRelease"])("shadow_lite");
    const osintAiRelease = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$releases$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLatestRelease"])("osint_ai");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "home-bg-video-wrap",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        className: "home-bg-video",
                        autoPlay: true,
                        loop: true,
                        muted: true,
                        playsInline: true,
                        preload: "metadata",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$asset$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["asset"])("/cyber_blue.mp4"),
                            type: "video/mp4"
                        }, void 0, false, {
                            fileName: "[project]/app/download-center/page.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/download-center/page.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "home-bg-overlay"
                    }, void 0, false, {
                        fileName: "[project]/app/download-center/page.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/download-center/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "orb one",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/app/download-center/page.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "orb two",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/app/download-center/page.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "orb three",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/app/download-center/page.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Nav$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Nav"], {
                activePath: "/download-center"
            }, void 0, false, {
                fileName: "[project]/app/download-center/page.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "dc-hero section",
                        "aria-labelledby": "dc-hero-title",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "eyebrow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "dot",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/app/download-center/page.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "SECURE • VERIFIED • NON-PERSISTENT"
                                    }, void 0, false, {
                                        fileName: "[project]/app/download-center/page.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/download-center/page.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                id: "dc-hero-title",
                                className: "dc-hero__title",
                                children: "Darkelf Download Center"
                            }, void 0, false, {
                                fileName: "[project]/app/download-center/page.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/download-center/page.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "section",
                        "aria-labelledby": "dc-downloads-title",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "section-title",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        id: "dc-downloads-title",
                                        children: "Choose Your Tool"
                                    }, void 0, false, {
                                        fileName: "[project]/app/download-center/page.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Browsers and AI tools. OS auto-detection highlights your build."
                                    }, void 0, false, {
                                        fileName: "[project]/app/download-center/page.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/download-center/page.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DownloadCenterClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DownloadCenterClient"], {
                                cocoaRelease: cocoaRelease,
                                shadowRelease: shadowRelease,
                                osintAiRelease: osintAiRelease
                            }, void 0, false, {
                                fileName: "[project]/app/download-center/page.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/download-center/page.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "section dc-philosophy",
                        "aria-labelledby": "dc-philosophy-title",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "section-title",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        id: "dc-philosophy-title",
                                        children: "Non-Persistent By Design"
                                    }, void 0, false, {
                                        fileName: "[project]/app/download-center/page.tsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "No data leaves the session. No exceptions."
                                    }, void 0, false, {
                                        fileName: "[project]/app/download-center/page.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/download-center/page.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid",
                                children: [
                                    {
                                        icon: "bi-trash3",
                                        title: "Session Wipe",
                                        body: "Cookies, cache, and history are destroyed on exit. Nothing survives the shutdown."
                                    },
                                    {
                                        icon: "bi-shield-lock",
                                        title: "Isolated Tabs",
                                        body: "Each tab runs in a contained context. Cross-tab contamination is blocked by design."
                                    },
                                    {
                                        icon: "bi-eye-slash",
                                        title: "Zero Telemetry",
                                        body: "No analytics, no crash reporting, no beacons. Your activity is yours alone."
                                    }
                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: `bi ${item.icon}`,
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/app/download-center/page.tsx",
                                                lineNumber: 112,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/download-center/page.tsx",
                                                lineNumber: 113,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: item.body
                                            }, void 0, false, {
                                                fileName: "[project]/app/download-center/page.tsx",
                                                lineNumber: 114,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, item.title, true, {
                                        fileName: "[project]/app/download-center/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/download-center/page.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/download-center/page.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/download-center/page.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                children: [
                    "© 2025 Dr. Kevin Moore — MIT Licensed",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "line",
                        children: "Built for those who refuse to be watched."
                    }, void 0, false, {
                        fileName: "[project]/app/download-center/page.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/download-center/page.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/app/download-center/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/download-center/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__475ed8b3._.js.map