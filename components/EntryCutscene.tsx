"use client";

import { useEffect, useState } from "react";

const frames = [
  {
    label: "WHO",
    title: "We are Darkelf.",
    body: "Engineers building privacy-first systems for high-stakes security workflows.",
  },
  {
    label: "WHAT",
    title: "Hardened, forensic-resistant tooling.",
    body: "Non-persistent sessions, anti-fingerprinting controls, and strict operational discipline.",
  },
  {
    label: "WHY",
    title: "Because exposure is a liability.",
    body: "We reduce traceability, strengthen confidentiality, and defend investigative integrity.",
  },
  {
    label: "WHERE",
    title: "From research labs to live investigations.",
    body: "Built for lawful cybersecurity analysis across macOS, Linux, and Windows.",
  },
] as const;

const SESSION_KEY = "darkelf_cutscene_seen";

export function EntryCutscene() {
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    // Only show once per browser session
    if (sessionStorage.getItem(SESSION_KEY)) return;

    // Mark as seen immediately so re-renders/navigation won't replay it
    sessionStorage.setItem(SESSION_KEY, "1");
    setVisible(true);

    const cycleTimer = setInterval(() => {
      setFrameIndex((prev) => (prev + 1 < frames.length ? prev + 1 : prev));
    }, 3200);
    const fadeTimer = setTimeout(() => setFading(true), 14300);
    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 15000);

    return () => {
      clearInterval(cycleTimer);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  const frame = frames[frameIndex];

  return (
    <div
      className={`entry-cutscene${fading ? " entry-cutscene--fade" : ""}`}
      aria-hidden="true"
    >
      <video
        className="entry-cutscene__video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/cyber_orange.mp4" type="video/mp4" />
      </video>
      <div className="entry-cutscene__overlay" />
      <div className="entry-cutscene__content">
        <div className="entry-cutscene__frame" key={frameIndex}>
          <span className="entry-cutscene__label">{frame.label}</span>
          <h2>{frame.title}</h2>
          <p>{frame.body}</p>
        </div>
      </div>
    </div>
  );
}
