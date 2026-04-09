import type { Release, Artifact, Platform } from "@/lib/releases";
import {
  formatBytes,
  platformLabel,
  fileTypeLabel,
  isAllowedDownloadUrl,
} from "@/lib/releases";
interface ArtifactRowProps {
  artifact: Artifact;
  release: Release;
}

function ArtifactRow({ artifact, release }: ArtifactRowProps) {
  const isPlaceholderUrl = artifact.url.includes("TODO_");
  const isValidUrl = isAllowedDownloadUrl(artifact.url) && !isPlaceholderUrl;

  return (
    <tr className="artifact-row">
      {/* Platform */}
      <td className="artifact-cell artifact-cell--platform">
        <i
          className={`bi ${
            artifact.platform === "windows"
              ? "bi-windows"
              : artifact.platform === "macos"
              ? "bi-apple"
              : "bi-ubuntu"
          }`}
          aria-hidden="true"
        />
        <span>{platformLabel(artifact.platform)}</span>
        <span className="artifact-filetype">
          {fileTypeLabel(artifact.fileType)}
        </span>
      </td>

      {/* Arch */}
      <td className="artifact-cell artifact-cell--arch">
        <span className="mono">{artifact.arch}</span>
      </td>

      {/* Size */}
      <td className="artifact-cell artifact-cell--size">
        <span className="mono">{formatBytes(artifact.sizeBytes)}</span>
      </td>

      {/* SHA-256 column removed */}

      {/* Actions */}
      <td className="artifact-cell artifact-cell--actions">
        {artifact.notesUrl && (
          <a
            className="artifact-notes-link"
            href={artifact.notesUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Release notes for ${platformLabel(artifact.platform)} build`}
          >
            Notes
          </a>
        )}
        {isValidUrl ? (
          <a
            className="btn primary artifact-dl-btn"
            href={artifact.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Download ${platformLabel(artifact.platform)} build (${fileTypeLabel(artifact.fileType)})`}
          >
            <i className="bi bi-download" aria-hidden="true" />
            <span>Download</span>
          </a>
        ) : release.zipballUrl ? (
          <a
            className="btn primary artifact-dl-btn"
            href={release.zipballUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download source archive"
          >
            <i className="bi bi-download" aria-hidden="true" />
            <span>Download</span>
          </a>
        ) : (
          <span className="artifact-unavailable" aria-label="Download not yet available">
            Coming Soon
          </span>
        )}
      </td>
    </tr>
  );
}

interface ArtifactTableProps {
  release: Release;
  platforms?: Platform[];
}

export function ArtifactTable({
  release,
  platforms,
}: ArtifactTableProps) {
  const artifacts = platforms
    ? release.artifacts.filter((a) => platforms.includes(a.platform))
    : release.artifacts;

  if (artifacts.length === 0) {
    return (
      <div className="artifact-empty">
        No artifacts available for this release yet.
      </div>
    );
  }

  return (
    <div className="artifact-table-wrap" role="region" aria-label="Download artifacts">
      <table className="artifact-table">
        <thead>
          <tr>
            <th scope="col">Platform</th>
            <th scope="col">Arch</th>
            <th scope="col">Size</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {artifacts.map((artifact) => (
            <ArtifactRow
              key={`${artifact.platform}-${artifact.arch}`}
              artifact={artifact}
              release={release}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
