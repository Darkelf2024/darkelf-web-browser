"use client";

import { useEffect } from "react";

/**
 * Drives the "liquid glass" hover effect: as the pointer moves over an
 * interactive surface it sets CSS custom properties the stylesheet reads to
 * (a) move a specular sheen to the cursor and (b) tilt the surface in 3D
 * toward the cursor. Renders nothing; purely a behaviour attachment.
 *
 * Everything has a CSS fallback (resting state), so SSR / no-JS / reduced
 * motion all look correct without this running.
 */
const SELECTOR =
  ".btn,.platform-pill,.dl-cta,.copy-btn,.artifact-dl-btn,.card,.dc-product-card";

const MAX_TILT = 6; // degrees

export function LiquidGlass() {
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let frame = 0;
    let lastEvent: PointerEvent | null = null;
    let current: HTMLElement | null = null;

    const reset = (el: HTMLElement) => {
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
      el.style.setProperty("--mx", "50%");
      el.style.setProperty("--my", "50%");
    };

    const apply = () => {
      frame = 0;
      const e = lastEvent;
      if (!e) return;

      const target = e.target instanceof Element ? e.target : null;
      const el = target?.closest<HTMLElement>(SELECTOR) ?? null;

      if (current && current !== el) {
        reset(current);
        current = null;
      }
      if (!el) return;

      current = el;
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) return;

      const px = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
      const py = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));

      el.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`);
      el.style.setProperty("--my", `${(py * 100).toFixed(1)}%`);
      // Tilt toward the cursor (top → look up, right → look right).
      el.style.setProperty("--rx", `${((px - 0.5) * 2 * MAX_TILT).toFixed(2)}deg`);
      el.style.setProperty("--ry", `${((0.5 - py) * 2 * MAX_TILT).toFixed(2)}deg`);
    };

    const onMove = (e: PointerEvent) => {
      lastEvent = e;
      if (!frame) frame = requestAnimationFrame(apply);
    };

    const onLeaveWindow = () => {
      if (current) {
        reset(current);
        current = null;
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeaveWindow);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeaveWindow);
      if (frame) cancelAnimationFrame(frame);
      if (current) reset(current);
    };
  }, []);

  return null;
}
