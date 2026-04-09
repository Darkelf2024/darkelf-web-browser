"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { resolveDownload } from "@/lib/releases";
import { PRODUCT_META } from "@/lib/config";
import Link from "next/link";
import { DownloadConfirmClient } from "@/components/DownloadConfirmClient";

function DownloadPageInner() {
  const searchParams = useSearchParams();

  const result = resolveDownload(
    searchParams?.get("product") ?? null,
    searchParams?.get("platform") ?? null,
    searchParams?.get("version") ?? null
  );

  if (!result.ok) {
    const messages: Record<typeof result.reason, string> = {
      missing_params:
        "Required parameters (product, platform, version) are missing.",
      not_found:
        "The requested release or artifact could not be found.",
      bad_url:
        "The artifact URL failed domain validation and cannot be used.",
      unknown_platform: "The specified platform is not supported.",
    };

    return (
      <div className="section dl-error-page">
        <div className="dl-error">
          <i
            className="bi bi-exclamation-octagon dl-error__icon"
            aria-hidden="true"
          />
          <h1 className="dl-error__title">Download Not Available</h1>
          <p className="dl-error__msg">{messages[result.reason]}</p>
          <div className="dl-error__actions">
            <Link href="/releases" className="btn primary">
              <i className="bi bi-clock-history" aria-hidden="true" />
              Browse Releases
            </Link>
            <Link href="/download-center" className="btn">
              <i className="bi bi-download" aria-hidden="true" />
              Download Center
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const { release, artifact } = result;

  return (
    <div className="section">
      <DownloadConfirmClient release={release} artifact={artifact} />
    </div>
  );
}

export function DownloadPageClient() {
  return (
    <Suspense
      fallback={
        <div className="section dl-error-page">
          <div className="dl-error">
            <i className="bi bi-hourglass-split dl-error__icon" aria-hidden="true" />
            <p>Loading download details…</p>
          </div>
        </div>
      }
    >
      <DownloadPageInner />
    </Suspense>
  );
}
