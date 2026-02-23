interface VerifyStepsProps {
  sha256: string;
  filename?: string;
}

export function VerifySteps({ sha256, filename = "<filename>" }: VerifyStepsProps) {
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
          <pre className="verify-code verify-code--hash">
            <code>{sha256}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
