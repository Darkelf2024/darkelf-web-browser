import type { Channel } from "@/lib/releases";

interface StatusBadgeProps {
  channel: Channel;
  className?: string;
}

export function StatusBadge({ channel, className = "" }: StatusBadgeProps) {
  const isStable = channel === "stable";
  return (
    <span
      className={`status-badge status-badge--${channel} ${className}`}
      aria-label={`Release channel: ${isStable ? "Stable" : "Nightly"}`}
    >
      <span className="status-badge__dot" aria-hidden="true" />
      {isStable ? "Stable" : "Nightly"}
    </span>
  );
}
