# Kill all node processes, clear the Next.js lock, then start dev

Set-Location -Path "F:\dev\darkelf-web-browser"

# Kill every node.exe — catches Next.js, Turbopack workers, everything
$nodeProcs = Get-Process -Name "node" -ErrorAction SilentlyContinue
if ($nodeProcs) {
    $nodeProcs | ForEach-Object {
        Write-Host "Killing node PID $($_.Id)..."
        Stop-Process -Id $_.Id -Force -ErrorAction SilentlyContinue
    }
    Start-Sleep -Milliseconds 800
} else {
    Write-Host "No node processes found."
}

# Remove lock file
$lock = "F:\dev\darkelf-web-browser\.next\dev\lock"
if (Test-Path $lock) {
    Remove-Item -Path $lock -Force
    Write-Host "Lock file removed."
}

Write-Host "Starting Next.js dev server..."
npm run dev
