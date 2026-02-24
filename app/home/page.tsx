import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Darkelf Browser — Mission, Security Mindset, and Privacy-First Vision",
  description:
    "Darkelf Browser is a privacy-first security ecosystem built for lawful cybersecurity research, digital forensics, red-team simulation, and post-quantum readiness. Explore the mission, mindset, and operational philosophy, then continue to the Download Center.",
  keywords: [
    "Darkelf mission",
    "privacy-first browser ecosystem",
    "security mindset browser",
    "anti-forensics browser",
    "forensic-resistant browser",
    "post-quantum browser",
    "lawful cybersecurity research tools",
    "red-team simulation browser",
    "digital forensics privacy tools",
    "hardened browsing architecture",
  ],
  alternates: { canonical: '/home' },
  openGraph: {
    title: "Darkelf Browser — Mission and Security-First Philosophy",
    description:
      "Built by security researchers for advanced users: privacy-first browsing, anti-forensics design, and post-quantum-ready security. Start at the mission page, then continue to the Download Center.",
    url: "https://darkelfbrowser.com/home",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <div className="entry-bg-video-wrap" aria-hidden="true">
        <video className="entry-bg-video" autoPlay loop muted playsInline preload="metadata">
          <source src={asset("/cyber_orange.mp4")} type="video/mp4" />
        </video>
        <div className="entry-bg-overlay" />
      </div>

      <div className="orb one" aria-hidden="true" />
      <div className="orb two" aria-hidden="true" />
      <div className="orb three" aria-hidden="true" />

      <Nav activePath="/home" />

      <main>
        <section className="entry-hero section" aria-labelledby="entry-title">
          <div className="eyebrow">
            <span className="dot" aria-hidden="true" />
            <span>PRIVACY-FIRST • FORENSIC-RESISTANT • SECURITY-DRIVEN</span>
          </div>
          <h1 id="entry-title" className="entry-hero__title">
            Darkelf Browser
          </h1>
          <p className="entry-hero__sub">
            A mission-driven security ecosystem engineered for lawful cybersecurity research,
            digital forensics, red-team simulations, and post-quantum readiness.
          </p>
          <div className="entry-hero__actions">
            <Link href="/download-center" className="btn primary">
              <i className="bi bi-download" aria-hidden="true" />
              Go to Download Center
            </Link>
            <Link href="/security" className="btn">
              <i className="bi bi-shield-check" aria-hidden="true" />
              Security & Verification
            </Link>
          </div>
        </section>

        <section className="section" aria-labelledby="mission-title">
          <div className="section-title">
            <h2 id="mission-title">Mission & Drive</h2>
            <p>
              Darkelf exists to push privacy and security forward for professionals who need
              hardened workflows under pressure.
            </p>
          </div>
          <div className="grid entry-grid">
            <div className="card">
              <h3>Purpose-Built for Serious Work</h3>
              <p>
                Designed for investigators, analysts, and defenders operating in threat-aware
                environments where ordinary browsing assumptions are not enough.
              </p>
            </div>
            <div className="card">
              <h3>Research-First Philosophy</h3>
              <p>
                Built for lawful cybersecurity testing, digital forensics, and controlled red-team
                simulations with operational discipline at the center.
              </p>
            </div>
            <div className="card">
              <h3>Zero-Trace Mindset</h3>
              <p>
                Session lifecycle, memory handling, and anti-fingerprinting controls are built to
                minimize residual exposure and reduce investigative footprint.
              </p>
            </div>
          </div>
        </section>

        <section className="section dc-philosophy" aria-labelledby="mindset-title">
          <div className="section-title">
            <h2 id="mindset-title">Security-Focused Mindset</h2>
            <p>Operational security is a design principle, not an optional setting.</p>
          </div>
          <div className="grid">
            {[
              {
                icon: "bi-shield-lock",
                title: "Anti-Fingerprinting Controls",
                body: "Canvas, WebGL, WebRTC, and identifying browser signals are aggressively constrained to reduce tracking surface.",
              },
              {
                icon: "bi-diagram-3",
                title: "Isolation by Design",
                body: "Hardened tab and process boundaries help contain activity and limit cross-context contamination.",
              },
              {
                icon: "bi-key",
                title: "Post-Quantum Readiness",
                body: "Darkelf's cryptographic direction emphasizes modern, resilient approaches for long-horizon security planning.",
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

        <section className="section entry-legal" aria-labelledby="lawful-title">
          <div className="section-title">
            <h2 id="lawful-title">Lawful Use & Responsibility</h2>
            <p>
              Darkelf Browser is intended for lawful cybersecurity research, education, and
              professional analysis. Users remain responsible for local legal and policy
              compliance in their jurisdiction.
            </p>
          </div>
          <div className="entry-hero__actions">
            <Link href="/download-center" className="btn primary">
              <i className="bi bi-arrow-right-circle" aria-hidden="true" />
              Enter Download Center
            </Link>
          </div>
        </section>
      </main>

      <footer>
        © 2025 Dr. Kevin Moore — MIT Licensed
        <div className="line">Built for those who refuse to be watched.</div>
      </footer>
    </>
  );
}
