module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/data/releases.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/releases.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$releases$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/releases.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config.ts [app-ssr] (ecmascript)");
;
;
function getAllReleases() {
    return [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$releases$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["releases"]
    ].sort((a, b)=>new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime());
}
function getReleasesByProduct(product) {
    return getAllReleases().filter((r)=>r.product === product);
}
function getRelease(product, version) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$releases$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["releases"].find((r)=>r.product === product && r.version === version);
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
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ALLOWED_DOWNLOAD_HOSTNAMES"].has(hostname);
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
"[project]/components/StatusBadge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatusBadge",
    ()=>StatusBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function StatusBadge({ channel, className = "" }) {
    const isStable = channel === "stable";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `status-badge status-badge--${channel} ${className}`,
        "aria-label": `Release channel: ${isStable ? "Stable" : "Nightly"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "status-badge__dot",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/StatusBadge.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            isStable ? "Stable" : "Nightly"
        ]
    }, void 0, true, {
        fileName: "[project]/components/StatusBadge.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/DownloadCTA.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DownloadCTA",
    ()=>DownloadCTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$releases$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/releases.ts [app-ssr] (ecmascript)");
;
;
function DownloadCTA({ release, platform, className = "", fallbackUrl }) {
    const artifact = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$releases$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArtifact"])(release, platform);
    const isPlaceholder = !artifact || artifact.url.includes("TODO_");
    const isValid = artifact && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$releases$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAllowedDownloadUrl"])(artifact.url) && !isPlaceholder;
    const label = `Download for ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$releases$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["platformLabel"])(platform)} (${artifact ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$releases$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fileTypeLabel"])(artifact.fileType) : ""})`;
    const size = artifact ? ` — ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$releases$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatBytes"])(artifact.sizeBytes)}` : "";
    if (!isValid) {
        if (fallbackUrl) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: `btn primary dl-cta ${className}`,
                href: fallbackUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": `View ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$releases$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["platformLabel"])(platform)} release on GitHub`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: `bi ${platform === "windows" ? "bi-windows" : platform === "macos" ? "bi-apple" : "bi-ubuntu"}`,
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/components/DownloadCTA.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$releases$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["platformLabel"])(platform),
                            " — View on GitHub"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DownloadCTA.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DownloadCTA.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: `dl-cta dl-cta--pending ${className}`,
            "aria-label": `${label} — not yet available`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "bi bi-hourglass-split",
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/components/DownloadCTA.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$releases$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["platformLabel"])(platform),
                        " — Coming Soon"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/DownloadCTA.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/DownloadCTA.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, this);
    }
    const confirmUrl = `/download?product=${release.product}&platform=${platform}&version=${encodeURIComponent(release.version)}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        className: `btn primary dl-cta ${className}`,
        href: confirmUrl,
        "aria-label": `${label}${size}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: `bi ${platform === "windows" ? "bi-windows" : platform === "macos" ? "bi-apple" : "bi-ubuntu"}`,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/DownloadCTA.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: label
            }, void 0, false, {
                fileName: "[project]/components/DownloadCTA.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/DownloadCTA.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ProductCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCard",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$releases$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/releases.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StatusBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/StatusBadge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DownloadCTA$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DownloadCTA.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
function ProductCard({ release, productId, highlightPlatform }) {
    const meta = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRODUCT_META"][productId];
    const repo = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REPO_CONFIG"][productId];
    const supportedPlatforms = release?.artifacts.map((a)=>a.platform) ?? [];
    const isFiltering = highlightPlatform != null;
    const isSupported = isFiltering && supportedPlatforms.includes(highlightPlatform);
    const isUnsupported = isFiltering && !supportedPlatforms.includes(highlightPlatform);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: `dc-product-card${isSupported ? " dc-product-card--supported" : ""}${isUnsupported ? " dc-product-card--unsupported" : ""}`,
        "aria-label": `${meta.displayName} download card`,
        style: {
            "--card-accent": meta.color,
            "--card-accent-rgb": meta.colorRgb
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dc-product-card__header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dc-product-card__title-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "dc-product-card__name",
                                children: meta.displayName
                            }, void 0, false, {
                                fileName: "[project]/components/ProductCard.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            release && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StatusBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatusBadge"], {
                                channel: release.channel
                            }, void 0, false, {
                                fileName: "[project]/components/ProductCard.tsx",
                                lineNumber: 46,
                                columnNumber: 23
                            }, this),
                            !release && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "status-badge status-badge--nightly",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "status-badge__dot",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProductCard.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this),
                                    "No Releases"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ProductCard.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProductCard.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "dc-product-card__tagline",
                        children: meta.tagline
                    }, void 0, false, {
                        fileName: "[project]/components/ProductCard.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "dc-product-card__desc",
                        children: meta.shortDescription
                    }, void 0, false, {
                        fileName: "[project]/components/ProductCard.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProductCard.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            release && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "dc-product-card__highlights",
                "aria-label": "Key features",
                children: release.highlights.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "bi bi-check2",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/ProductCard.tsx",
                                lineNumber: 63,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: h
                            }, void 0, false, {
                                fileName: "[project]/components/ProductCard.tsx",
                                lineNumber: 64,
                                columnNumber: 15
                            }, this)
                        ]
                    }, h, true, {
                        fileName: "[project]/components/ProductCard.tsx",
                        lineNumber: 62,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ProductCard.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this),
            release && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dc-product-card__meta",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "bi bi-tag",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/ProductCard.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            " v",
                            release.version
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProductCard.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "bi bi-calendar3",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/ProductCard.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            " ",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$releases$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(release.dateISO)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProductCard.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProductCard.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dc-product-card__ctas",
                role: "group",
                "aria-label": "Download options",
                children: release ? (()=>{
                    const allPlaceholder = release.artifacts.every((a)=>a.url.includes("TODO_"));
                    if (allPlaceholder) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "btn primary dl-cta",
                            href: repo.url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            "aria-label": `View ${meta.displayName} on GitHub`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "bi bi-github",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/ProductCard.tsx",
                                    lineNumber: 97,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "View on GitHub"
                                }, void 0, false, {
                                    fileName: "[project]/components/ProductCard.tsx",
                                    lineNumber: 98,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProductCard.tsx",
                            lineNumber: 90,
                            columnNumber: 17
                        }, this);
                    }
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: release.artifacts.map((artifact)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DownloadCTA$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DownloadCTA"], {
                                release: release,
                                platform: artifact.platform,
                                fallbackUrl: repo.url,
                                className: highlightPlatform === artifact.platform ? "dl-cta--highlighted" : ""
                            }, artifact.platform, false, {
                                fileName: "[project]/components/ProductCard.tsx",
                                lineNumber: 105,
                                columnNumber: 19
                            }, this))
                    }, void 0, false);
                })() : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "dc-product-card__no-release",
                    children: "No release available yet. Check the repository for updates."
                }, void 0, false, {
                    fileName: "[project]/components/ProductCard.tsx",
                    lineNumber: 119,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ProductCard.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dc-product-card__footer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: repo.url,
                        className: "dc-link",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": `View ${meta.displayName} repository on GitHub`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "bi bi-github",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/ProductCard.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Repository"
                            }, void 0, false, {
                                fileName: "[project]/components/ProductCard.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProductCard.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    release && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `/releases/${productId}/${encodeURIComponent(release.version)}`,
                        className: "dc-link",
                        "aria-label": `Release notes for ${meta.displayName} v${release.version}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "bi bi-file-text",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/ProductCard.tsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Release Notes"
                            }, void 0, false, {
                                fileName: "[project]/components/ProductCard.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProductCard.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `/releases?product=${productId}`,
                        className: "dc-link",
                        "aria-label": `All ${meta.displayName} releases`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "bi bi-clock-history",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/ProductCard.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "All Releases"
                            }, void 0, false, {
                                fileName: "[project]/components/ProductCard.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProductCard.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProductCard.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProductCard.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/PlatformPills.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlatformPills",
    ()=>PlatformPills,
    "useDetectedPlatform",
    ()=>useDetectedPlatform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function PlatformPills({ value, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "platform-pills",
        role: "group",
        "aria-label": "Filter by operating system",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: `platform-pill ${value === null ? "platform-pill--active" : ""}`,
                onClick: ()=>onChange(null),
                "aria-pressed": value === null,
                children: "All Platforms"
            }, void 0, false, {
                fileName: "[project]/components/PlatformPills.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: `platform-pill ${value === "macos" ? "platform-pill--active" : ""}`,
                onClick: ()=>onChange("macos"),
                "aria-pressed": value === "macos",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "bi bi-apple",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/components/PlatformPills.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    "macOS"
                ]
            }, void 0, true, {
                fileName: "[project]/components/PlatformPills.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: `platform-pill ${value === "windows" ? "platform-pill--active" : ""}`,
                onClick: ()=>onChange("windows"),
                "aria-pressed": value === "windows",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "bi bi-windows",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/components/PlatformPills.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    "Windows"
                ]
            }, void 0, true, {
                fileName: "[project]/components/PlatformPills.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: `platform-pill ${value === "linux" ? "platform-pill--active" : ""}`,
                onClick: ()=>onChange("linux"),
                "aria-pressed": value === "linux",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "bi bi-ubuntu",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/components/PlatformPills.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    "Linux"
                ]
            }, void 0, true, {
                fileName: "[project]/components/PlatformPills.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PlatformPills.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
function useDetectedPlatform() {
    const [detected, setDetected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
}),
"[project]/components/DownloadCenterClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DownloadCenterClient",
    ()=>DownloadCenterClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProductCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PlatformPills$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PlatformPills.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function DownloadCenterClient({ cocoaRelease, shadowRelease, osintAiRelease }) {
    const detected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PlatformPills$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDetectedPlatform"])();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [autoDetected, setAutoDetected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Auto-select detected OS on first mount, but allow manual override
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (detected && !autoDetected) {
            setSelected(detected);
            setAutoDetected(true);
        }
    }, [
        detected,
        autoDetected
    ]);
    const highlight = selected;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "dc-client-wrapper",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dc-pills-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PlatformPills$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlatformPills"], {
                        value: selected,
                        onChange: setSelected
                    }, void 0, false, {
                        fileName: "[project]/components/DownloadCenterClient.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    detected && selected !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "dc-os-hint",
                        "aria-live": "polite",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "bi bi-cpu",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/DownloadCenterClient.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this),
                            "Detected:",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: detected === "windows" ? "Windows" : detected === "macos" ? "macOS" : "Linux"
                            }, void 0, false, {
                                fileName: "[project]/components/DownloadCenterClient.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DownloadCenterClient.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this),
                    !detected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "dc-os-hint dc-os-hint--neutral",
                        "aria-live": "polite",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "bi bi-info-circle",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/DownloadCenterClient.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                            "OS not auto-detected — both platforms always shown"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DownloadCenterClient.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DownloadCenterClient.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dc-cards-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductCard"], {
                        productId: "cocoa",
                        release: cocoaRelease,
                        highlightPlatform: highlight
                    }, void 0, false, {
                        fileName: "[project]/components/DownloadCenterClient.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductCard"], {
                        productId: "shadow_lite",
                        release: shadowRelease,
                        highlightPlatform: highlight
                    }, void 0, false, {
                        fileName: "[project]/components/DownloadCenterClient.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductCard"], {
                        productId: "osint_ai",
                        release: osintAiRelease,
                        highlightPlatform: highlight
                    }, void 0, false, {
                        fileName: "[project]/components/DownloadCenterClient.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DownloadCenterClient.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/DownloadCenterClient.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1f4696e5._.js.map