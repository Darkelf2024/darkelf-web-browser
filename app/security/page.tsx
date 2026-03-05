import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { VerifySteps } from "@/components/VerifySteps";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Security & Verification — SHA-256 Checksums & Non-Persistent Design",
  description:
    "How to verify Darkelf browser downloads using SHA-256 checksums on Windows, Linux, and macOS. Learn about non-persistent browser design, supply chain attack prevention, and Darkelf's ephemeral privacy philosophy.",
  keywords: [
    'SHA-256 browser verification', 'verify browser download', 'browser checksum',
    'supply chain attack prevention', 'non-persistent browser design', 'ephemeral browser privacy',
    'browser security verification', 'secure download verification', 'browser SHA256',
    'PowerShell Get-FileHash', 'sha256sum Linux', 'browser no persistence',
    'privacy browser philosophy', 'no cookies browser', 'no history browser',
    'WebRTC disabled browser', 'Darkelf security', 'browser fingerprint protection',
  ],
  alternates: { canonical: '/security' },
  openGraph: {
    title: "Darkelf Security & Verification — SHA-256, Non-Persistent Design",
    description:
      "Verify every Darkelf download with SHA-256. Learn how non-persistent browser design protects your privacy. Never run a binary you haven't checked.",
    url: "https://darkelfbrowser.com/security",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Darkelf Security & Verification",
    description: "SHA-256 verification guide and non-persistent browser design philosophy.",
  },
};

const EXAMPLE_SHA =
  "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";

export default function SecurityPage() {
  return (
    <>
      <div className="security-bg-video-wrap" aria-hidden="true">
        <video
          className="security-bg-video"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src={asset("/cyber_red.mp4")} type="video/mp4" />
        </video>
        <div className="security-bg-overlay" />
      </div>

      <div className="orb one" aria-hidden="true" />
      <div className="orb two" aria-hidden="true" />

      <Nav activePath="/security" />

      <main>
        <article className="section security-page" aria-labelledby="sec-title">
          {/* Hero */}
          <div className="sec-hero">
            <div className="eyebrow">
              <span className="dot" aria-hidden="true" />
              <span>TRUST NO BINARY BLINDLY</span>
            </div>
            <h1 id="sec-title">Security &amp; Verification</h1>
          </div>

          {/* Verify section */}
          <section id="verify" aria-labelledby="verify-section-title" className="sec-section">
            <h2 id="verify-section-title">
              <i className="bi bi-shield-check" aria-hidden="true" /> How to
              Verify SHA-256
            </h2>
            <VerifySteps
              sha256={EXAMPLE_SHA}
              filename="DarkelfCocoa-4.0.0-windows-x64.exe"
            />
          </section>

          {/* Why it matters */}
          <section className="sec-section" aria-labelledby="why-title">
            <h2 id="why-title">
              <i className="bi bi-question-circle" aria-hidden="true" /> Why
              This Matters
            </h2>
            <div className="sec-cards">
              {[
                {
                  icon: "bi-shield-exclamation",
                  title: "Supply Chain Attacks",
                  body: "A tampered binary can look identical to the real one. SHA-256 makes it mathematically impossible to modify a file without changing its hash.",
                },
                {
                  icon: "bi-wifi-off",
                  title: "Corrupted Downloads",
                  body: "Network errors and storage failures can corrupt files silently. The checksum catches corruption before it causes crashes or data exposure.",
                },
                {
                  icon: "bi-person-x",
                  title: "Impersonation",
                  body: "Fake download sites mirroring Darkelf binaries cannot produce matching SHA-256 values without access to the original build artifacts.",
                },
              ].map((item) => (
                <div className="card" key={item.title}>
                  <i className={`bi ${item.icon}`} aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Non-persistent design */}
          <section className="sec-section" aria-labelledby="nonpersist-title">
            <h2 id="nonpersist-title">
              <i className="bi bi-eraser" aria-hidden="true" /> Non-Persistent
              Design Philosophy
            </h2>
            <div className="sec-philosophy">
              <p>
                Darkelf browsers are engineered around a core axiom:{" "}
                <strong>
                  no session data should outlive the session that created it.
                </strong>
              </p>
              <ul className="sec-list">
                <li>
                  <i className="bi bi-check2-circle" aria-hidden="true" />
                  <span>
                    <strong>Cookies</strong> — stored in memory only; never
                    written to disk.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check2-circle" aria-hidden="true" />
                  <span>
                    <strong>Cache</strong> — process-scoped; destroyed on
                    shutdown or tab close.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check2-circle" aria-hidden="true" />
                  <span>
                    <strong>History</strong> — not recorded. No timeline. No
                    footprint.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check2-circle" aria-hidden="true" />
                  <span>
                    <strong>Downloads (Shadow Lite)</strong> — disabled by
                    design. Any disk write is forced into a strict folder and
                    wiped on shutdown.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check2-circle" aria-hidden="true" />
                  <span>
                    <strong>No WebRTC (Shadow Lite)</strong> — real IP cannot
                    leak through WebRTC peer connections.
                  </span>
                </li>
              </ul>
              <p className="sec-note">
                <i className="bi bi-info-circle" aria-hidden="true" />
                This means Darkelf is a tool for a specific workflow: secure,
                ephemeral sessions. It is not a general-purpose browser. If you
                need persistent bookmarks or download management, use a
                different tool.
              </p>
            </div>
          </section>

          {/* Signature placeholder */}
          <section className="sec-section" aria-labelledby="sig-title">
            <h2 id="sig-title">
              <i className="bi bi-pen" aria-hidden="true" /> Code Signatures
              (Planned)
            </h2>
            <p className="sub">
              GPG / Minisign detached signatures are planned for a future
              release. When available, the artifact table on each release detail
              page will include a signature download link. Verify instructions
              will be published here.
            </p>
          </section>

          {/* Nav footer */}
          <div className="rd-nav-links">
            <Link href="/download-center" className="btn">
              <i className="bi bi-download" aria-hidden="true" />
              Download Center
            </Link>
            <Link href="/releases" className="btn">
              <i className="bi bi-clock-history" aria-hidden="true" />
              All Releases
            </Link>
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
