module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/lib/asset.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/components/Nav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Nav",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$asset$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/asset.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Nav({ activePath = "" }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const links = [
        {
            href: "/home",
            label: "Home"
        },
        {
            href: "/download-center",
            label: "Download"
        },
        {
            href: "/releases",
            label: "Releases"
        },
        {
            href: "/security",
            label: "Security"
        }
    ];
    const closeMenu = ()=>setOpen(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "nav",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    className: "brand",
                    href: "/home",
                    "aria-label": "Darkelf Browser home",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$asset$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asset"])("/lock.png"),
                            alt: "Darkelf",
                            width: 32,
                            height: 32,
                            style: {
                                borderRadius: '8px',
                                objectFit: 'cover'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/Nav.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Darkelf Browser"
                        }, void 0, false, {
                            fileName: "[project]/components/Nav.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "badge",
                            children: "Mission + Security"
                        }, void 0, false, {
                            fileName: "[project]/components/Nav.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Nav.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    "aria-label": "Main navigation",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: `nav-toggle${open ? " nav-toggle--open" : ""}`,
                            "aria-expanded": open,
                            "aria-controls": "main-menu",
                            onClick: ()=>setOpen((v)=>!v),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "nav-toggle__bar"
                                }, void 0, false, {
                                    fileName: "[project]/components/Nav.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "nav-toggle__bar"
                                }, void 0, false, {
                                    fileName: "[project]/components/Nav.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "nav-toggle__bar"
                                }, void 0, false, {
                                    fileName: "[project]/components/Nav.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Nav.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `right${open ? " right--open" : ""}`,
                            id: "main-menu",
                            children: links.map((link)=>{
                                const isActive = activePath === link.href;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    className: `btn${isActive ? " btn--nav-active" : ""}`,
                                    href: link.href,
                                    "aria-current": isActive ? "page" : undefined,
                                    onClick: closeMenu,
                                    children: link.label
                                }, link.href, false, {
                                    fileName: "[project]/components/Nav.tsx",
                                    lineNumber: 47,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/Nav.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Nav.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Nav.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Nav.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

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
"[project]/components/VersionTimeline.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VersionTimeline",
    ()=>VersionTimeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$releases$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/releases.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StatusBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/StatusBadge.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
function VersionTimeline({ releases, filterProduct, filterChannel, filterPlatform }) {
    const visible = releases.filter((r)=>{
        if (filterProduct && r.product !== filterProduct) return false;
        if (filterChannel && r.channel !== filterChannel) return false;
        if (filterPlatform && !r.artifacts.some((a)=>a.platform === filterPlatform)) return false;
        return true;
    });
    if (visible.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "releases-empty",
            role: "status",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "bi bi-inbox",
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/components/VersionTimeline.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "No releases match the selected filters."
                }, void 0, false, {
                    fileName: "[project]/components/VersionTimeline.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/releases",
                    className: "dc-link",
                    children: "Clear filters"
                }, void 0, false, {
                    fileName: "[project]/components/VersionTimeline.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/VersionTimeline.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
        className: "version-timeline",
        "aria-label": "Release timeline",
        children: visible.map((release)=>{
            const meta = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRODUCT_META"][release.product];
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: "version-timeline__item",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "vtl-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "vtl-title-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "vtl-product",
                                        children: meta.displayName
                                    }, void 0, false, {
                                        fileName: "[project]/components/VersionTimeline.tsx",
                                        lineNumber: 51,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StatusBadge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatusBadge"], {
                                        channel: release.channel
                                    }, void 0, false, {
                                        fileName: "[project]/components/VersionTimeline.tsx",
                                        lineNumber: 52,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/VersionTimeline.tsx",
                                lineNumber: 50,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "vtl-version",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `/releases/${release.product}/${encodeURIComponent(release.version)}`,
                                    "aria-label": `${meta.displayName} v${release.version} release details`,
                                    children: [
                                        "v",
                                        release.version
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/VersionTimeline.tsx",
                                    lineNumber: 55,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/VersionTimeline.tsx",
                                lineNumber: 54,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                                className: "vtl-date",
                                dateTime: release.dateISO,
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$releases$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(release.dateISO)
                            }, void 0, false, {
                                fileName: "[project]/components/VersionTimeline.tsx",
                                lineNumber: 62,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/VersionTimeline.tsx",
                        lineNumber: 49,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "vtl-highlights",
                        "aria-label": "Highlights",
                        children: release.highlights.slice(0, 3).map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "bi bi-check2",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/components/VersionTimeline.tsx",
                                        lineNumber: 70,
                                        columnNumber: 19
                                    }, this),
                                    h
                                ]
                            }, h, true, {
                                fileName: "[project]/components/VersionTimeline.tsx",
                                lineNumber: 69,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/VersionTimeline.tsx",
                        lineNumber: 67,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "vtl-platforms",
                        "aria-label": "Available platforms",
                        children: release.artifacts.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "vtl-platform-chip",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: `bi ${a.platform === "windows" ? "bi-windows" : a.platform === "macos" ? "bi-apple" : "bi-ubuntu"}`,
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/components/VersionTimeline.tsx",
                                        lineNumber: 79,
                                        columnNumber: 19
                                    }, this),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$releases$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["platformLabel"])(a.platform)
                                ]
                            }, a.platform, true, {
                                fileName: "[project]/components/VersionTimeline.tsx",
                                lineNumber: 78,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/VersionTimeline.tsx",
                        lineNumber: 76,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "btn vtl-detail-btn",
                        href: `/releases/${release.product}/${encodeURIComponent(release.version)}`,
                        "aria-label": `View details for ${meta.displayName} v${release.version}`,
                        children: "View Release"
                    }, void 0, false, {
                        fileName: "[project]/components/VersionTimeline.tsx",
                        lineNumber: 88,
                        columnNumber: 13
                    }, this)
                ]
            }, `${release.product}-${release.version}`, true, {
                fileName: "[project]/components/VersionTimeline.tsx",
                lineNumber: 45,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/VersionTimeline.tsx",
        lineNumber: 41,
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
"[project]/components/ReleasesFilterClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReleasesFilterClient",
    ()=>ReleasesFilterClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VersionTimeline$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/VersionTimeline.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PlatformPills$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PlatformPills.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function ReleasesFilterInner({ releases }) {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const rawProduct = searchParams.get("product");
    const parsedProduct = rawProduct === "cocoa" || rawProduct === "shadow_lite" || rawProduct === "osint_ai" ? rawProduct : null;
    const [product, setProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(parsedProduct);
    const [channel, setChannel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [platform, setPlatform] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const totalVisible = releases.filter((r)=>{
        if (product && r.product !== product) return false;
        if (channel && r.channel !== channel) return false;
        if (platform && !r.artifacts.some((a)=>a.platform === platform)) return false;
        return true;
    }).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "releases-filter-wrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "releases-filters",
                role: "group",
                "aria-label": "Filter releases",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "filter-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "filter-label",
                                children: "Product"
                            }, void 0, false, {
                                fileName: "[project]/components/ReleasesFilterClient.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "platform-pills",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `platform-pill ${product === null ? "platform-pill--active" : ""}`,
                                        onClick: ()=>setProduct(null),
                                        "aria-pressed": product === null,
                                        type: "button",
                                        children: "All"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ReleasesFilterClient.tsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `platform-pill ${product === "cocoa" ? "platform-pill--active" : ""}`,
                                        onClick: ()=>setProduct("cocoa"),
                                        "aria-pressed": product === "cocoa",
                                        type: "button",
                                        children: "Cocoa"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ReleasesFilterClient.tsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `platform-pill ${product === "shadow_lite" ? "platform-pill--active" : ""}`,
                                        onClick: ()=>setProduct("shadow_lite"),
                                        "aria-pressed": product === "shadow_lite",
                                        type: "button",
                                        children: "Shadow Lite"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ReleasesFilterClient.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `platform-pill ${product === "osint_ai" ? "platform-pill--active" : ""}`,
                                        onClick: ()=>setProduct("osint_ai"),
                                        "aria-pressed": product === "osint_ai",
                                        type: "button",
                                        children: "OSINT AI"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ReleasesFilterClient.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ReleasesFilterClient.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ReleasesFilterClient.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "filter-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "filter-label",
                                children: "Channel"
                            }, void 0, false, {
                                fileName: "[project]/components/ReleasesFilterClient.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "platform-pills",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `platform-pill ${channel === null ? "platform-pill--active" : ""}`,
                                        onClick: ()=>setChannel(null),
                                        "aria-pressed": channel === null,
                                        type: "button",
                                        children: "All"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ReleasesFilterClient.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `platform-pill ${channel === "stable" ? "platform-pill--active" : ""}`,
                                        onClick: ()=>setChannel("stable"),
                                        "aria-pressed": channel === "stable",
                                        type: "button",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "status-badge__dot",
                                                style: {
                                                    background: "var(--accent)"
                                                },
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ReleasesFilterClient.tsx",
                                                lineNumber: 93,
                                                columnNumber: 15
                                            }, this),
                                            "Stable"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ReleasesFilterClient.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `platform-pill ${channel === "nightly" ? "platform-pill--active" : ""}`,
                                        onClick: ()=>setChannel("nightly"),
                                        "aria-pressed": channel === "nightly",
                                        type: "button",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "status-badge__dot",
                                                style: {
                                                    background: "#ffd36b"
                                                },
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ReleasesFilterClient.tsx",
                                                lineNumber: 102,
                                                columnNumber: 15
                                            }, this),
                                            "Nightly"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ReleasesFilterClient.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ReleasesFilterClient.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ReleasesFilterClient.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "filter-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "filter-label",
                                children: "Platform"
                            }, void 0, false, {
                                fileName: "[project]/components/ReleasesFilterClient.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PlatformPills$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlatformPills"], {
                                value: platform,
                                onChange: setPlatform
                            }, void 0, false, {
                                fileName: "[project]/components/ReleasesFilterClient.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ReleasesFilterClient.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ReleasesFilterClient.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "releases-count",
                "aria-live": "polite",
                "aria-atomic": "true",
                children: [
                    "Showing ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: totalVisible
                    }, void 0, false, {
                        fileName: "[project]/components/ReleasesFilterClient.tsx",
                        lineNumber: 117,
                        columnNumber: 17
                    }, this),
                    " ",
                    totalVisible === 1 ? "release" : "releases"
                ]
            }, void 0, true, {
                fileName: "[project]/components/ReleasesFilterClient.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$VersionTimeline$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VersionTimeline"], {
                releases: releases,
                filterProduct: product,
                filterChannel: channel,
                filterPlatform: platform
            }, void 0, false, {
                fileName: "[project]/components/ReleasesFilterClient.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ReleasesFilterClient.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function ReleasesFilterClient(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "releases-count",
            children: "Loading filters…"
        }, void 0, false, {
            fileName: "[project]/components/ReleasesFilterClient.tsx",
            lineNumber: 134,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReleasesFilterInner, {
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ReleasesFilterClient.tsx",
            lineNumber: 135,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ReleasesFilterClient.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9aa52dbc._.js.map