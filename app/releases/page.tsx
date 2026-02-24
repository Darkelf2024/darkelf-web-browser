import type { Metadata } from "next";
import Link from "next/link";
import { getAllReleases } from "@/lib/releases";
import { Nav } from "@/components/Nav";
import { ReleasesFilterClient } from "@/components/ReleasesFilterClient";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "All Releases — Darkelf Cocoa, Shadow, Mini Browser & OSINT AI",
  description:
    "Browse all Darkelf browser releases: Darkelf Cocoa (macOS), Darkelf Shadow (Linux/Windows), Darkelf Mini Browser (Tor-native, all platforms), and Darkelf OSINT AI. Filter by product, channel, and platform. SHA-256 verified.",
  keywords: [
    'Darkelf releases', 'Darkelf Cocoa releases', 'Darkelf Shadow releases',
    'Darkelf Mini Browser releases', 'Darkelf OSINT AI releases',
    'privacy browser releases', 'browser changelog', 'browser release notes',
    'macOS browser release', 'Linux browser release', 'Windows browser release',
    'nightly browser build', 'stable browser release', 'open source browser releases',
  ],
  alternates: { canonical: '/releases' },
  openGraph: {
    title: "All Darkelf Browser Releases",
    description: "Browse all releases for Darkelf Cocoa, Shadow, Mini Browser, and OSINT AI. Filter by platform, channel, and product. SHA-256 verified downloads.",
    url: "https://darkelfbrowser.com/releases",
    type: "website",
  },
};

export default function ReleasesPage() {
  const releases = getAllReleases();

  return (
    <>
      <div className="releases-bg-video-wrap" aria-hidden="true">
        <video
          className="releases-bg-video"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src={asset("/cyber_yellow.mp4")} type="video/mp4" />
        </video>
        <div className="releases-bg-overlay" />
      </div>

      <div className="orb one" aria-hidden="true" />
      <div className="orb two" aria-hidden="true" />

      <Nav activePath="/releases" />

      <main>
        <section className="section" aria-labelledby="releases-title">
          <div className="section-title">
            <div>
              <h1 id="releases-title">All Releases</h1>
              <p>
                Latest first. Filter by product, channel, or platform.
              </p>
            </div>
            <div className="section-title-actions">
              <Link href="/download-center" className="btn">
                <i className="bi bi-download" aria-hidden="true" />
                Download Center
              </Link>
            </div>
          </div>

          {releases.length === 0 ? (
            <div className="releases-empty" role="status">
              <i className="bi bi-inbox" aria-hidden="true" />
              <p>No releases yet. Check back soon.</p>
            </div>
          ) : (
            <ReleasesFilterClient
              releases={releases}
            />
          )}
        </section>
      </main>

      <footer>
        © 2025 Dr. Kevin Moore — MIT Licensed
        <div className="line">Built for those who refuse to be watched.</div>
      </footer>
    </>
  );
}
