param(
  [Parameter(Mandatory = $true)][string]$FtpHost,
  [Parameter(Mandatory = $true)][string]$FtpUser,
  [Parameter(Mandatory = $true)][string]$FtpPassword,
  [string]$RemoteDir = "/public_html",
  [string]$LocalDir = ""
)

$ErrorActionPreference = "Stop"

if (-not $LocalDir) {
  $LocalDir = Join-Path (Split-Path $PSScriptRoot -Parent) "out"
}

if (-not (Test-Path (Join-Path $LocalDir "index.html"))) {
  throw "Static files not found in $LocalDir. Run npm run build first."
}

$base = "ftp://$FtpHost$RemoteDir"
$files = Get-ChildItem $LocalDir -Recurse -File

Write-Host "Uploading $($files.Count) files to $base"

foreach ($file in $files) {
  $relative = $file.FullName.Substring($LocalDir.Length).Replace("\", "/")
  if (-not $relative.StartsWith("/")) { $relative = "/$relative" }
  $remote = "$base$relative"
  $dirUrl = ($remote -replace "/[^/]+$", "") + "/"

  curl.exe -sS --ftp-create-dirs -u "${FtpUser}:${FtpPassword}" -Q "TYPE I" --ftp-method nocwd -T $file.FullName $remote | Out-Null
  Write-Host "OK $relative"
}

Write-Host "Done. Open https://akracollectionlayan.com/"
