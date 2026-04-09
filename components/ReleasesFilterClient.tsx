"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import type { Release, ProductId, Channel, Platform, Artifact } from "@/lib/releases";
import { VersionTimeline } from "@/components/VersionTimeline";
import { PlatformPills } from "@/components/PlatformPills";

interface ReleasesFilterClientProps {
  releases: Release[];
}

function ReleasesFilterInner({ releases }: ReleasesFilterClientProps) {
  const [releasesData, setReleasesData] = useState<Release[]>(releases);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    function load() {
      fetch("/api/releases")
        .then((r) => r.json())
        .then((data) => { if (!cancelled) setReleasesData(data); })
        .catch(() => { if (!cancelled) setFetchError(true); });
    }
    load();
    const interval = setInterval(load, 60_000);
    return () => { cancelled = true; clearInterval(interval); };
  }, []);

  const searchParams = useSearchParams();
  const rawProduct = searchParams?.get("product") || null;
  const parsedProduct: ProductId | null =
    rawProduct === "cocoa" || rawProduct === "shadow_lite" || rawProduct === "osint_ai"
      ? rawProduct
      : null;

  const [product, setProduct] = useState<ProductId | null>(parsedProduct);
  const [channel, setChannel] = useState<Channel | null>(null);
  const [platform, setPlatform] = useState<Platform | null>(null);

  const totalVisible = releasesData.filter((r: Release) => {
    if (product && r.product !== product) return false;
    if (channel && r.channel !== channel) return false;
    if (platform && !r.artifacts.some((a: Artifact) => a.platform === platform)) return false;
    return true;
  }).length;

  return (
    <div className="releases-filter-wrap">
      {fetchError && <div>Error loading releases. Please try again later.</div>}

      {/* Filter bar */}
      <div className="releases-filters" role="group" aria-label="Filter releases">
        {/* Product filter */}
        <div className="filter-group">
          <span className="filter-label">Product</span>
          <div className="platform-pills">
            <button
              className={`platform-pill ${product === null ? "platform-pill--active" : ""}`}
              onClick={() => setProduct(null)}
              aria-pressed={product === null}
              type="button"
            >
              All
            </button>
            <button
              className={`platform-pill ${product === "cocoa" ? "platform-pill--active" : ""}`}
              onClick={() => setProduct("cocoa")}
              aria-pressed={product === "cocoa"}
              type="button"
            >
              Cocoa
            </button>
            <button
              className={`platform-pill ${product === "shadow_lite" ? "platform-pill--active" : ""}`}
              onClick={() => setProduct("shadow_lite")}
              aria-pressed={product === "shadow_lite"}
              type="button"
            >
              Shadow Lite
            </button>
            <button
              className={`platform-pill ${product === "osint_ai" ? "platform-pill--active" : ""}`}
              onClick={() => setProduct("osint_ai")}
              aria-pressed={product === "osint_ai"}
              type="button"
            >
              OSINT AI
            </button>
          </div>
        </div>

        {/* Channel filter */}
        <div className="filter-group">
          <span className="filter-label">Channel</span>
          <div className="platform-pills">
            <button
              className={`platform-pill ${channel === null ? "platform-pill--active" : ""}`}
              onClick={() => setChannel(null)}
              aria-pressed={channel === null}
              type="button"
            >
              All
            </button>
            <button
              className={`platform-pill ${channel === "stable" ? "platform-pill--active" : ""}`}
              onClick={() => setChannel("stable")}
              aria-pressed={channel === "stable"}
              type="button"
            >
              <span className="status-badge__dot" style={{ background: "var(--accent)" }} aria-hidden="true" />
              Stable
            </button>
            <button
              className={`platform-pill ${channel === "nightly" ? "platform-pill--active" : ""}`}
              onClick={() => setChannel("nightly")}
              aria-pressed={channel === "nightly"}
              type="button"
            >
              <span className="status-badge__dot" style={{ background: "#ffd36b" }} aria-hidden="true" />
              Nightly
            </button>
          </div>
        </div>

        {/* Platform filter */}
        <div className="filter-group">
          <span className="filter-label">Platform</span>
          <PlatformPills value={platform} onChange={setPlatform} />
        </div>
      </div>

      {/* Result count */}
      <p className="releases-count" aria-live="polite" aria-atomic="true">
        Showing <strong>{totalVisible}</strong>{" "}
        {totalVisible === 1 ? "release" : "releases"}
      </p>

      {/* Timeline */}
      <VersionTimeline
        releases={releasesData}
        filterProduct={product}
        filterChannel={channel}
        filterPlatform={platform}
      />
    </div>
  );
}

export function ReleasesFilterClient(props: ReleasesFilterClientProps) {
  return (
    <Suspense fallback={<div className="releases-count">Loading filters…</div>}>
      <ReleasesFilterInner {...props} />
    </Suspense>
  );
}
