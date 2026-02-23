"use client";

import { useState } from "react";
import type { Release, Artifact } from "@/lib/releases";
import { formatBytes, platformLabel, fileTypeLabel, formatDate } from "@/lib/releases";
import { PRODUCT_META } from "@/lib/config";
import { CopyButton } from "@/components/CopyButton";

interface DownloadConfirmClientProps {
  release: Release;
  artifact: Artifact;
}

export function DownloadConfirmClient({
  release,
  artifact,
}: DownloadConfirmClientProps) {
  const [confirmed, setConfirmed] = useState(false);
  const meta = PRODUCT_META[release.product];

  function handleContinue() {
    setConfirmed(true);
    // Small delay so the status update is announced before navigation
    setTimeout(() => {
      window.location.href = artifact.url;
    }, 300);
  }

  return (
    <div className="dl-confirm">
      <div className="dl-confirm__card">
        <div className="dl-confirm__header">
          <i className="bi bi-shield-check dl-confirm__icon" aria-hidden="true" />
          <h1 className="dl-confirm__title">Confirm Download</h1>
          <p className="dl-confirm__subtitle">
            Review the details below before downloading.
          </p>
        </div>

        {/* Details table */}
        <dl className="dl-confirm__details">
          <div className="dl-confirm__row">
            <dt>Product</dt>
            <dd>{meta.displayName}</dd>
          </div>
          <div className="dl-confirm__row">
            <dt>Version</dt>
            <dd>
              <span className="mono">v{release.version}</span>
              <span className={`status-badge status-badge--${release.channel}`} style={{ marginLeft: 8 }}>
                <span className="status-badge__dot" aria-hidden="true" />
                {release.channel === "stable" ? "Stable" : "Nightly"}
              </span>
            </dd>
          </div>
          <div className="dl-confirm__row">
            <dt>Platform</dt>
            <dd>
              <i
                className={`bi ${artifact.platform === "windows" ? "bi-windows" : artifact.platform === "macos" ? "bi-apple" : "bi-ubuntu"}`}
                aria-hidden="true"
                style={{ marginRight: 6 }}
              />
              {platformLabel(artifact.platform)} {fileTypeLabel(artifact.fileType)}
            </dd>
          </div>
          <div className="dl-confirm__row">
            <dt>Release Date</dt>
            <dd>
              <time dateTime={release.dateISO}>{formatDate(release.dateISO)}</time>
            </dd>
          </div>
          <div className="dl-confirm__row">
            <dt>File Size</dt>
            <dd className="mono">{formatBytes(artifact.sizeBytes)}</dd>
          </div>
          <div className="dl-confirm__row dl-confirm__row--sha">
            <dt>SHA-256</dt>
            <dd>
              <code className="sha-value sha-value--full">{artifact.sha256}</code>
              <CopyButton text={artifact.sha256} label="Copy SHA256" />
            </dd>
          </div>
        </dl>

        {/* Warning */}
        {release.channel === "nightly" && (
          <div className="dl-confirm__warn" role="alert">
            <i className="bi bi-exclamation-triangle" aria-hidden="true" />
            <span>
              <strong>Nightly build</strong> — not production-ready. Use only for
              testing.
            </span>
          </div>
        )}

        {/* Note about placeholder SHA */}
        {artifact.sha256.startsWith("TODO_") && (
          <div className="dl-confirm__warn dl-confirm__warn--error" role="alert">
            <i className="bi bi-exclamation-octagon" aria-hidden="true" />
            <span>
              <strong>SHA-256 not yet published</strong> — this is a placeholder.
              Do not download until a real hash is provided.
            </span>
          </div>
        )}

        {/* Actions */}
        <div className="dl-confirm__actions">
          <a href="/releases" className="btn dl-confirm__back-btn">
            <i className="bi bi-arrow-left" aria-hidden="true" />
            Back to Releases
          </a>
          <button
            type="button"
            className="btn primary dl-confirm__go-btn"
            onClick={handleContinue}
            disabled={confirmed || artifact.sha256.startsWith("TODO_")}
            aria-label={`Continue and download ${meta.displayName} for ${platformLabel(artifact.platform)}`}
            aria-disabled={confirmed || artifact.sha256.startsWith("TODO_")}
          >
            {confirmed ? (
              <>
                <i className="bi bi-hourglass-split" aria-hidden="true" />
                Starting download…
              </>
            ) : (
              <>
                <i className="bi bi-download" aria-hidden="true" />
                Continue Download
              </>
            )}
          </button>
        </div>

        {/* Verify link */}
        <p className="dl-confirm__verify-note">
          <i className="bi bi-info-circle" aria-hidden="true" />
          Not sure how to verify?{" "}
          <a href="/security#verify" className="dc-link">
            Read the verification guide
          </a>
        </p>
      </div>
    </div>
  );
}
