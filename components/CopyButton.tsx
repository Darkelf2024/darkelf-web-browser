"use client";

import { useState } from "react";

interface CopyButtonProps {
  text: string;
  label?: string;
}

export function CopyButton({ text, label = "Copy" }: CopyButtonProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
      setTimeout(() => setStatus("idle"), 2000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2000);
    }
  }

  const labelText =
    status === "copied" ? "Copied!" : status === "error" ? "Failed" : label;

  return (
    <button
      className={`copy-btn copy-btn--${status}`}
      onClick={handleCopy}
      aria-label={`${label} to clipboard`}
      aria-live="polite"
      aria-atomic="true"
      type="button"
    >
      {status === "idle" && (
        <i className="bi bi-clipboard" aria-hidden="true" />
      )}
      {status === "copied" && (
        <i className="bi bi-clipboard-check" aria-hidden="true" />
      )}
      {status === "error" && (
        <i className="bi bi-exclamation-triangle" aria-hidden="true" />
      )}
      <span>{labelText}</span>
    </button>
  );
}
