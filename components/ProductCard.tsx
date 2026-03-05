import type { Release, ProductId } from "@/lib/releases";
import { formatDate } from "@/lib/releases";
import { PRODUCT_META, REPO_CONFIG } from "@/lib/config";
import { StatusBadge } from "@/components/StatusBadge";
import { DownloadCTA } from "@/components/DownloadCTA";

interface ProductCardProps {
  release: Release | undefined;
  productId: ProductId;
  /** If true, highlights Windows CTA button (class-level variant only, both always shown) */
  highlightPlatform?: "windows" | "linux" | "macos" | null;
}

export function ProductCard({
  release,
  productId,
  highlightPlatform,
}: ProductCardProps) {
  const meta = PRODUCT_META[productId];
  const repo = REPO_CONFIG[productId];

  const supportedPlatforms = release?.artifacts.map((a) => a.platform) ?? [];
  const isFiltering = highlightPlatform != null;
  const isSupported = isFiltering && supportedPlatforms.includes(highlightPlatform!);
  const isUnsupported = isFiltering && !supportedPlatforms.includes(highlightPlatform!);

  return (
    <article
      className={`dc-product-card${
        isSupported ? " dc-product-card--supported" : ""
      }${
        isUnsupported ? " dc-product-card--unsupported" : ""
      }`}
      aria-label={`${meta.displayName} download card`}
      style={
        {
          "--card-accent": meta.color,
          "--card-accent-rgb": meta.colorRgb,
        } as React.CSSProperties
      }
    >
      {/* Header */}
      <div className="dc-product-card__header">
        <div className="dc-product-card__title-row">
          <h2 className="dc-product-card__name">{meta.displayName}</h2>
          {release && <StatusBadge channel={release.channel} />}
          {!release && (
            <span className="status-badge status-badge--nightly">
              <span className="status-badge__dot" aria-hidden="true" />
              No Releases
            </span>
          )}
        </div>
        <p className="dc-product-card__tagline">{meta.tagline}</p>
        <p className="dc-product-card__desc">{meta.shortDescription}</p>
      </div>

      {/* Highlights */}
      {release && (
        <ul className="dc-product-card__highlights" aria-label="Key features">
          {release.highlights.map((h) => (
            <li key={h}>
              <i className="bi bi-check2" aria-hidden="true" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Meta row */}
      {release && (
        <div className="dc-product-card__meta">
          <span>
            <i className="bi bi-tag" aria-hidden="true" /> v{release.version}
          </span>
          <span>
            <i className="bi bi-calendar3" aria-hidden="true" />{" "}
            {formatDate(release.dateISO)}
          </span>
        </div>
      )}

      {/* Download CTAs */}
      <div className="dc-product-card__ctas" role="group" aria-label="Download options">
        {release ? (
          (() => {
            const allPlaceholder = release.artifacts.every((a) => a.url.includes("TODO_"));
            if (allPlaceholder) {
              return (
                <a
                  className="btn primary dl-cta"
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${meta.displayName} on GitHub`}
                >
                  <i className="bi bi-github" aria-hidden="true" />
                  <span>View on GitHub</span>
                </a>
              );
            }
            return (
              <>
                {release.artifacts.map((artifact) => (
                  <DownloadCTA
                    key={artifact.platform}
                    release={release}
                    platform={artifact.platform}
                    fallbackUrl={repo.url}
                    className={
                      highlightPlatform === artifact.platform ? "dl-cta--highlighted" : ""
                    }
                  />
                ))}
              </>
            );
          })()
        ) : (
          <p className="dc-product-card__no-release">
            No release available yet. Check the repository for updates.
          </p>
        )}
      </div>

      {/* Footer links */}
      <div className="dc-product-card__footer">
        <a
          href={repo.url}
          className="dc-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${meta.displayName} repository on GitHub`}
        >
          <i className="bi bi-github" aria-hidden="true" />
          <span>Repository</span>
        </a>
        {release && (
          <a
            href={`/releases/${productId}/${encodeURIComponent(release.version)}`}
            className="dc-link"
            aria-label={`Release notes for ${meta.displayName} v${release.version}`}
          >
            <i className="bi bi-file-text" aria-hidden="true" />
            <span>Release Notes</span>
          </a>
        )}
        <a
          href={`/releases?product=${productId}`}
          className="dc-link"
          aria-label={`All ${meta.displayName} releases`}
        >
          <i className="bi bi-clock-history" aria-hidden="true" />
          <span>All Releases</span>
        </a>
      </div>
    </article>
  );
}
