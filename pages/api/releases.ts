import { getAllReleases } from "@/lib/releases";
import { REPO_CONFIG } from "@/lib/config";
import type { NextApiRequest, NextApiResponse } from "next";
import type { ProductId, Release, Artifact, Platform, FileType } from "@/data/releases";

interface GitHubAsset {
  name: string;
  browser_download_url: string;
  size: number;
  content_type: string;
}

interface GitHubRelease {
  tag_name: string;
  name: string;
  body: string | null;
  html_url: string;
  assets: GitHubAsset[];
  published_at: string;
}

function detectPlatform(name: string): Platform {
  const n = name.toLowerCase();
  if (n.includes("windows") || n.endsWith(".exe") || n.endsWith(".msi")) return "windows";
  if (n.includes("linux") || n.endsWith(".appimage") || n.endsWith(".deb")) return "linux";
  return "macos";
}

function detectFileType(name: string): FileType {
  const n = name.toLowerCase();
  if (n.endsWith(".exe") || n.endsWith(".msi")) return "exe";
  if (n.endsWith(".appimage") || n.endsWith(".deb")) return "appimage";
  return "dmg";
}

async function fetchLatestGitHubRelease(
  org: string,
  repo: string
): Promise<GitHubRelease | null> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${org}/${repo}/releases/latest`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const localReleases = getAllReleases();
  const productIds = Object.keys(REPO_CONFIG) as ProductId[];

  // Fetch GitHub latest releases in parallel
  const ghResults = await Promise.all(
    productIds.map(async (pid) => {
      const cfg = REPO_CONFIG[pid];
      const gh = await fetchLatestGitHubRelease(cfg.org, cfg.repo);
      return { pid, cfg, gh };
    })
  );

  // Build a map of enriched data per product
  const ghByProduct = Object.fromEntries(
    ghResults.map(({ pid, cfg, gh }) => {
      if (!gh) return [pid, null];
      const tag = gh.tag_name;
      const version = tag.replace(/^v/, "");
      const zipballUrl = `https://github.com/${cfg.org}/${cfg.repo}/archive/refs/tags/${tag}.zip`;

      const ghArtifacts: Artifact[] = gh.assets.map((asset) => ({
        platform: detectPlatform(asset.name),
        arch: "x64" as const,
        fileType: detectFileType(asset.name),
        url: asset.browser_download_url,
        sizeBytes: asset.size,
        sha256: "see github release",
        notesUrl: gh.html_url,
      }));

      // If no release assets, surface the source zip as a single artifact
      if (ghArtifacts.length === 0) {
        ghArtifacts.push({
          platform: "macos",
          arch: "x64",
          fileType: "dmg",
          url: zipballUrl,
          sizeBytes: 0,
          sha256: "source archive",
          notesUrl: gh.html_url,
        });
      }

      return [
        pid,
        {
          version,
          dateISO: gh.published_at?.split("T")[0] ?? null,
          notesMarkdown: gh.body ?? null,
          releasePageUrl: gh.html_url,
          zipballUrl,
          artifacts: ghArtifacts,
        },
      ];
    })
  );

  const enriched: Release[] = localReleases.map((release) => {
    const gh = ghByProduct[release.product];
    if (!gh) return release;
    return {
      ...release,
      version: gh.version ?? release.version,
      dateISO: gh.dateISO ?? release.dateISO,
      notesMarkdown: gh.notesMarkdown ?? release.notesMarkdown,
      releasePageUrl: gh.releasePageUrl ?? release.releasePageUrl,
      zipballUrl: gh.zipballUrl ?? release.zipballUrl,
      artifacts: gh.artifacts.length > 0 ? gh.artifacts : release.artifacts,
    };
  });

  res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=60");
  res.status(200).json(enriched);
}
