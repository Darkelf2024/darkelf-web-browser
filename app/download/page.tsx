import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { DownloadPageClient } from "@/components/DownloadPageClient";

export const metadata: Metadata = {
  title: "Confirm Download — Darkelf Download Center",
  description:
    "Review file details and SHA-256 before downloading a Darkelf build.",
  robots: { index: false },
};

export default function DownloadPage() {
  return (
    <>
      <div className="orb one" aria-hidden="true" />
      <div className="orb two" aria-hidden="true" />
      <Nav activePath="/releases" />
      <main>
        <DownloadPageClient />
      </main>
      <footer>
        © 2025 Dr. Kevin Moore — MIT Licensed
        <div className="line">Built for those who refuse to be watched.</div>
      </footer>
    </>
  );
}
