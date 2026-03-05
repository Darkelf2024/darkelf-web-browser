"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/asset";

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
const FRAME_DURATION_MS = 16000; // 16s per frame for readability
const FADE_LEAD_MS = 1500; // start fading shortly before the final hide
const MUSIC_DELAY_MS = 30000; // start music at 30s mark
const MUSIC_FADE_MS = 2000; // fade in over 2s once unmuted
const MUSIC_FADE_OUT_MS = 1500; // fade out before exiting

interface EntryCutsceneProps {
  onComplete?: () => void;
}

export function EntryCutscene({ onComplete }: EntryCutsceneProps) {
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);
  const [frameIndex, setFrameIndex] = useState(0);
  const [needsUserAudio, setNeedsUserAudio] = useState(false);
  const timers = useRef<{
    cycle?: ReturnType<typeof setInterval>;
    fade?: ReturnType<typeof setTimeout>;
    hide?: ReturnType<typeof setTimeout>;
    music?: ReturnType<typeof setTimeout>;
    fadeIn?: ReturnType<typeof setInterval>;
    fadeOut?: ReturnType<typeof setInterval>;
  }>({});
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const startTs = useRef<number | null>(null);

  const startAudioWithFade = () => {
    const audio = audioRef.current;
    if (!audio) return Promise.reject();

    // Clear any existing fade timer before starting a new one
    if (timers.current.fadeIn) {
      clearInterval(timers.current.fadeIn);
      timers.current.fadeIn = undefined;
    }

    audio.muted = false;
    audio.volume = 0;

    const target = 1;
    const steps = Math.max(1, Math.floor(MUSIC_FADE_MS / 150));
    const delta = target / steps;
    let vol = audio.volume;

    const runFade = () => {
      timers.current.fadeIn = setInterval(() => {
        vol = Math.min(target, vol + delta);
        audio.volume = vol;
        if (vol >= target && timers.current.fadeIn) {
          clearInterval(timers.current.fadeIn);
          timers.current.fadeIn = undefined;
        }
      }, 150);
    };

    return audio
      .play()
      .then(() => {
        setNeedsUserAudio(false);
        runFade();
      })
      .catch((err) => {
        setNeedsUserAudio(true);
        throw err;
      });
  };

  const fadeOutAndStop = (): Promise<void> => {
    const audio = audioRef.current;
    if (!audio) return Promise.resolve();

    // Clear any in-progress fade-in
    if (timers.current.fadeIn) {
      clearInterval(timers.current.fadeIn);
      timers.current.fadeIn = undefined;
    }

    const steps = Math.max(1, Math.floor(MUSIC_FADE_OUT_MS / 150));
    const delta = audio.volume / steps;
    let vol = audio.volume;

    if (timers.current.fadeOut) {
      clearInterval(timers.current.fadeOut);
      timers.current.fadeOut = undefined;
    }

    return new Promise((resolve) => {
      timers.current.fadeOut = setInterval(() => {
        vol = Math.max(0, vol - delta);
        audio.volume = vol;
        if (vol <= 0 && timers.current.fadeOut) {
          clearInterval(timers.current.fadeOut);
          timers.current.fadeOut = undefined;
          audio.pause();
          audio.currentTime = 0;
          resolve();
        }
      }, 150);
    });
  };

  useEffect(() => {
    const currentTimers = timers.current;

    // Only show once per browser session
    if (sessionStorage.getItem(SESSION_KEY)) {
      onComplete?.();
      return;
    }

    // Mark as seen immediately so re-renders/navigation won't replay it
    sessionStorage.setItem(SESSION_KEY, "1");
    setVisible(true);

    audioRef.current = new Audio(asset("/intro-music.mp3"));
    audioRef.current.loop = true;
    audioRef.current.preload = "auto";
    audioRef.current.muted = true;
    audioRef.current.volume = 0;
    startTs.current = Date.now();

    // Try to prime playback muted to satisfy autoplay policies (mobile/desktop)
    audioRef.current
      .play()
      .then(() => setNeedsUserAudio(false))
      .catch(() => setNeedsUserAudio(true));

    const totalDuration = FRAME_DURATION_MS * frames.length;

    currentTimers.cycle = setInterval(() => {
      setFrameIndex((prev) => (prev + 1 < frames.length ? prev + 1 : prev));
    }, FRAME_DURATION_MS);

    currentTimers.fade = setTimeout(() => setFading(true), totalDuration - FADE_LEAD_MS);

    const scheduleMusic = (delay: number) => {
      currentTimers.music = setTimeout(() => {
        startAudioWithFade().catch(() => {
          // Playback blocked: prompt user
          setNeedsUserAudio(true);
        });
      }, delay);
    };

    scheduleMusic(MUSIC_DELAY_MS);

    currentTimers.hide = setTimeout(() => {
      fadeOutAndStop().finally(() => {
        setVisible(false);
        onComplete?.();
      });
    }, totalDuration);

    return () => {
      if (currentTimers.cycle) clearInterval(currentTimers.cycle);
      if (currentTimers.fade) clearTimeout(currentTimers.fade);
      if (currentTimers.hide) clearTimeout(currentTimers.hide);
      if (currentTimers.music) clearTimeout(currentTimers.music);
      if (currentTimers.fadeIn) clearInterval(currentTimers.fadeIn);
      if (currentTimers.fadeOut) clearInterval(currentTimers.fadeOut);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [onComplete]);

  const skip = () => {
    if (!visible) return;
    if (timers.current.cycle) clearInterval(timers.current.cycle);
    if (timers.current.fade) clearTimeout(timers.current.fade);
    if (timers.current.hide) clearTimeout(timers.current.hide);
    if (timers.current.music) clearTimeout(timers.current.music);
    if (timers.current.fadeIn) clearInterval(timers.current.fadeIn);
    if (timers.current.fadeOut) clearInterval(timers.current.fadeOut);
    if (audioRef.current) {
      fadeOutAndStop().finally(() => {
        setVisible(false);
        onComplete?.();
      });
      return;
    }
    setVisible(false);
    onComplete?.();
  };

  const enableAudioNow = () => {
    if (!audioRef.current) return;

    // Cancel any pending timers and start immediately (user gesture present).
    if (timers.current.music) clearTimeout(timers.current.music);
    if (timers.current.fadeIn) {
      clearInterval(timers.current.fadeIn);
      timers.current.fadeIn = undefined;
    }

    startAudioWithFade().catch(() => setNeedsUserAudio(true));
  };

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
        <source src={asset("/cyber_orange.mp4")} type="video/mp4" />
      </video>
      <div className="entry-cutscene__overlay" />
      <div className="entry-cutscene__content">
        <div className="entry-cutscene__frame" key={frameIndex}>
          <span className="entry-cutscene__label">{frame.label}</span>
          <h2>{frame.title}</h2>
          <p>{frame.body}</p>
        </div>
      </div>
      <button type="button" className="entry-cutscene__skip" onClick={skip}>
        Skip intro →
      </button>
      {needsUserAudio && (
        <button
          type="button"
          className="entry-cutscene__audio"
          onClick={enableAudioNow}
          aria-label="Enable intro audio"
        >
          Enable sound
        </button>
      )}
    </div>
  );
}
