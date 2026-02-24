(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/EntryCutscene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EntryCutscene",
    ()=>EntryCutscene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const frames = [
    {
        label: "WHO",
        title: "We are Darkelf.",
        body: "Engineers building privacy-first systems for high-stakes security workflows."
    },
    {
        label: "WHAT",
        title: "Hardened, forensic-resistant tooling.",
        body: "Non-persistent sessions, anti-fingerprinting controls, and strict operational discipline."
    },
    {
        label: "WHY",
        title: "Because exposure is a liability.",
        body: "We reduce traceability, strengthen confidentiality, and defend investigative integrity."
    },
    {
        label: "WHERE",
        title: "From research labs to live investigations.",
        body: "Built for lawful cybersecurity analysis across macOS, Linux, and Windows."
    }
];
function EntryCutscene() {
    _s();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [fading, setFading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [frameIndex, setFrameIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EntryCutscene.useEffect": ()=>{
            const cycleTimer = setInterval({
                "EntryCutscene.useEffect.cycleTimer": ()=>{
                    setFrameIndex({
                        "EntryCutscene.useEffect.cycleTimer": (prev)=>prev + 1 < frames.length ? prev + 1 : prev
                    }["EntryCutscene.useEffect.cycleTimer"]);
                }
            }["EntryCutscene.useEffect.cycleTimer"], 3200);
            const fadeTimer = setTimeout({
                "EntryCutscene.useEffect.fadeTimer": ()=>setFading(true)
            }["EntryCutscene.useEffect.fadeTimer"], 14300);
            const hideTimer = setTimeout({
                "EntryCutscene.useEffect.hideTimer": ()=>setVisible(false)
            }["EntryCutscene.useEffect.hideTimer"], 15000);
            return ({
                "EntryCutscene.useEffect": ()=>{
                    clearInterval(cycleTimer);
                    clearTimeout(fadeTimer);
                    clearTimeout(hideTimer);
                }
            })["EntryCutscene.useEffect"];
        }
    }["EntryCutscene.useEffect"], []);
    if (!visible) return null;
    const frame = frames[frameIndex];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `entry-cutscene${fading ? " entry-cutscene--fade" : ""}`,
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                className: "entry-cutscene__video",
                autoPlay: true,
                muted: true,
                loop: true,
                playsInline: true,
                preload: "metadata",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                    src: "/cyber_orange.mp4",
                    type: "video/mp4"
                }, void 0, false, {
                    fileName: "[project]/components/EntryCutscene.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/EntryCutscene.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "entry-cutscene__overlay"
            }, void 0, false, {
                fileName: "[project]/components/EntryCutscene.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "entry-cutscene__content",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "entry-cutscene__frame",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "entry-cutscene__label",
                            children: frame.label
                        }, void 0, false, {
                            fileName: "[project]/components/EntryCutscene.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: frame.title
                        }, void 0, false, {
                            fileName: "[project]/components/EntryCutscene.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: frame.body
                        }, void 0, false, {
                            fileName: "[project]/components/EntryCutscene.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    ]
                }, frameIndex, true, {
                    fileName: "[project]/components/EntryCutscene.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/EntryCutscene.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/EntryCutscene.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(EntryCutscene, "AciEQLuRXyx1EVkV0C909bbUJJA=");
_c = EntryCutscene;
var _c;
__turbopack_context__.k.register(_c, "EntryCutscene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_EntryCutscene_tsx_871be191._.js.map