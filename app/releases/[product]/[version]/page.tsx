import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getRelease,
  getAllReleases,
  formatDate,
  markdownToSafeLines,
} from "@/lib/releases";
import { PRODUCT_META } from "@/lib/config";
import { Nav } from "@/components/Nav";
import { StatusBadge } from "@/components/StatusBadge";
import { ArtifactTable } from "@/components/ArtifactTable";
import { VerifySteps } from "@/components/VerifySteps";
import type { ProductId } from "@/data/releases";

interface ReleaseDetailParams {
  params: { product: string; version: string };
}

export async function generateStaticParams() {
  return getAllReleases().map((r) => ({
    product: r.product,
    version: encodeURIComponent(r.version),
  }));
}

export async function generateMetadata({
  params,
}: ReleaseDetailParams): Promise<Metadata> {
  const release = getRelease(
    params.product as ProductId,
    decodeURIComponent(params.version)
  );
  if (!release) return { title: "Release Not Found — Darkelf" };
  const meta = PRODUCT_META[release.product];
  return {
    title: `${meta.displayName} v${release.version} — Darkelf Download Center`,
    description: `${release.highlights[0]} — Download for Windows and Linux.`,
    openGraph: {
      title: `${meta.displayName} v${release.version}`,
      description: release.highlights[0],
      type: "website",
    },
  };
}

export default function ReleaseDetailPage({ params }: ReleaseDetailParams) {
  const validProducts: ProductId[] = ["cocoa", "shadow_lite", "osint_ai", "mini_browser"];
  if (!validProducts.includes(params.product as ProductId)) {
    notFound();
  }

  const release = getRelease(
    params.product as ProductId,
    decodeURIComponent(params.version)
  );
  if (!release) notFound();

  const meta = PRODUCT_META[release.product];

  // Safe: render markdown as structured lines — no raw HTML
  const noteLines = release.notesMarkdown
    ? markdownToSafeLines(release.notesMarkdown)
    : [];

  // Find any artifact SHA for the verify block
  const firstArtifact = release.artifacts[0];

  return (
    <>
      <div className="orb one" aria-hidden="true" />
      <div className="orb two" aria-hidden="true" />

      <Nav activePath="/releases" />

      <main>
        <article className="section release-detail" aria-labelledby="rd-title">
          {/* Breadcrumb */}
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li>
                <a href="/download-center">Download Center</a>
              </li>
              <li>
                <a href="/releases">Releases</a>
              </li>
              <li>
                <a href={`/releases?product=${release.product}`}>
                  {meta.displayName}
                </a>
              </li>
              <li aria-current="page">v{release.version}</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="rd-header">
            <div className="rd-title-row">
              <h1 id="rd-title">
                {meta.displayName}{" "}
                <span className="rd-version">v{release.version}</span>
              </h1>
              <StatusBadge channel={release.channel} />
            </div>
            <div className="rd-meta">
              <time dateTime={release.dateISO}>{formatDate(release.dateISO)}</time>
              <span aria-hidden="true">·</span>
              <span className="rd-product-tag">{meta.tagline}</span>
            </div>
          </div>

          {/* Highlights */}
          <section className="rd-highlights" aria-labelledby="rd-highlights-title">
            <h2 id="rd-highlights-title">Highlights</h2>
            <ul>
              {release.highlights.map((h) => (
                <li key={h}>
                  <i className="bi bi-check2" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>
          </section>

          {/* Artifact table */}
          <section className="rd-artifacts" aria-labelledby="rd-artifacts-title">
            <h2 id="rd-artifacts-title">Downloads</h2>
            <ArtifactTable release={release} />
          </section>

          {/* Verification */}
          {firstArtifact && (
            <section id="verify" aria-labelledby="rd-verify-title">
              <VerifySteps
                sha256={firstArtifact.sha256}
                filename={`DarkelfCocoa-${release.version}-windows-x64.exe`}
              />
            </section>
          )}

          {/* Release Notes (markdown-safe: rendered as preformatted lines) */}
          {noteLines.length > 0 && (
            <section className="rd-notes" aria-labelledby="rd-notes-title">
              <h2 id="rd-notes-title">Release Notes</h2>
              <div className="rd-notes__body">
                {noteLines.map((line, i) => {
                  // Render headings as bold, bullets as list items, rest as paragraphs
                  if (line.startsWith("## ")) {
                    return (
                      <h3 key={i} className="rd-notes__h2">
                        {line.replace(/^##\s+/, "")}
                      </h3>
                    );
                  }
                  if (line.startsWith("### ")) {
                    return (
                      <h4 key={i} className="rd-notes__h3">
                        {line.replace(/^###\s+/, "")}
                      </h4>
                    );
                  }
                  if (line.startsWith("- ")) {
                    return (
                      <p key={i} className="rd-notes__bullet">
                        <i className="bi bi-dot" aria-hidden="true" />
                        {line.replace(/^-\s+/, "")}
                      </p>
                    );
                  }
                  return (
                    <p key={i} className="rd-notes__p">
                      {line}
                    </p>
                  );
                })}
              </div>
            </section>
          )}

          {/* Navigation */}
          <div className="rd-nav-links">
            <a href="/releases" className="btn">
              <i className="bi bi-arrow-left" aria-hidden="true" />
              All Releases
            </a>
            <a href="/download-center" className="btn">
              <i className="bi bi-download" aria-hidden="true" />
              Download Center
            </a>
          </div>
        </article>
      </main>

      <footer>
        © 2025 Dr. Kevin Moore — MIT Licensed
        <div className="line">Built for those who refuse to be watched.</div>
      </footer>
    </>
  );
}
