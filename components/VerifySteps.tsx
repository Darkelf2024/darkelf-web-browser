interface VerifyStepsProps {
  sha256: string;
  filename?: string;
  /** GitHub release page where the authoritative checksum is published. */
  notesUrl?: string;
}

/** A value is a real digest only if it's exactly 64 hex characters. */
function isRealSha256(value: string): boolean {
  return /^[a-f0-9]{64}$/i.test(value.trim());
}

export function VerifySteps({ sha256, filename = "<filename>", notesUrl }: VerifyStepsProps) {
  const hasRealHash = isRealSha256(sha256);

  return (
    <section className="verify-steps" aria-labelledby="verify-title">
      <h3 id="verify-title" className="verify-steps__title">
        <i className="bi bi-shield-check" aria-hidden="true" />
        Verify Your Download
      </h3>
      <p className="verify-steps__intro">
        Always verify your download before running. Compare the file hash against
        the published SHA-256.
      </p>

      <div className="verify-step">
        <span className="verify-step__num">1</span>
        <div>
          <strong>Windows (PowerShell)</strong>
          <pre className="verify-code">
            <code>{`Get-FileHash .\\${filename} -Algorithm SHA256`}</code>
          </pre>
        </div>
      </div>

      <div className="verify-step">
        <span className="verify-step__num">2</span>
        <div>
          <strong>Linux / macOS (Terminal)</strong>
          <pre className="verify-code">
            <code>{`sha256sum ${filename}`}</code>
          </pre>
        </div>
      </div>

      <div className="verify-step">
        <span className="verify-step__num">3</span>
        <div>
          <strong>Compare</strong>
          <p className="verify-step__text">
            The output must match the SHA-256 below exactly (case-insensitive).
            If it does not match, delete the file immediately &mdash; do not run it.
          </p>
          {hasRealHash ? (
            <pre className="verify-code verify-code--hash">
              <code>{sha256}</code>
            </pre>
          ) : (
            <p className="verify-step__text verify-step__text--pending">
              <i className="bi bi-info-circle" aria-hidden="true" />{" "}
              The authoritative SHA-256 for this build is published on its{" "}
              {notesUrl ? (
                <a href={notesUrl} target="_blank" rel="noopener noreferrer">
                  GitHub release page
                </a>
              ) : (
                "GitHub release page"
              )}
              . Compare your computed hash against the value listed there.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
