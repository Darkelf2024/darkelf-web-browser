# Kill all node processes
Set-Location -Path $PSScriptRoot
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
$lock = Join-Path $PSScriptRoot ".next\dev\lock"
if (Test-Path $lock) {
    Remove-Item -Path $lock -Force
    Write-Host "Lock file removed."
}

Write-Host "Starting Next.js dev server..."
npm run dev
