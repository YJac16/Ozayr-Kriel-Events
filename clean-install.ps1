# Clean install script for Events project
Write-Host "Cleaning node_modules and package-lock.json..." -ForegroundColor Yellow

# Remove node_modules if it exists
if (Test-Path "node_modules") {
    Remove-Item -Recurse -Force "node_modules"
    Write-Host "[OK] Removed node_modules" -ForegroundColor Green
}

# Remove package-lock.json if it exists
if (Test-Path "package-lock.json") {
    Remove-Item -Force "package-lock.json"
    Write-Host "[OK] Removed package-lock.json" -ForegroundColor Green
}

Write-Host ""
Write-Host "Installing dependencies..." -ForegroundColor Yellow
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "[OK] Installation complete! You can now run 'npm run dev'" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "[ERROR] Installation failed. Please check the errors above." -ForegroundColor Red
}
