$ErrorActionPreference = 'Stop'
$projectRoot = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$releaseRoot = Join-Path $projectRoot 'release'
$distRoot = Join-Path $projectRoot 'dist'
$version = (Get-Content -LiteralPath (Join-Path $projectRoot 'package.json') -Raw -Encoding utf8 | ConvertFrom-Json).version
if ($version -notmatch '^\d+\.\d+\.\d+$') { throw '发行版本格式无效' }
if (-not (Test-Path -LiteralPath (Join-Path $distRoot 'manifest.json'))) { throw '请先运行 npm run build' }
New-Item -ItemType Directory -Path $releaseRoot -Force | Out-Null
Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

function Write-ProjectZip {
    param([string]$Target, [string]$BasePath, [string[]]$Entries)
    $absoluteTarget = [IO.Path]::GetFullPath($Target)
    if ([IO.Path]::GetDirectoryName($absoluteTarget) -ne $releaseRoot) { throw 'ZIP 路径不在发行目录内' }
    $stream = [IO.File]::Open($absoluteTarget, [IO.FileMode]::Create)
    $zip = [IO.Compression.ZipArchive]::new($stream, [IO.Compression.ZipArchiveMode]::Create, $false, [Text.Encoding]::UTF8)
    try {
        foreach ($entry in $Entries) {
            $entryPath = Join-Path $BasePath $entry
            if (-not (Test-Path -LiteralPath $entryPath)) { throw "缺少发行文件：$entry" }
            if (Test-Path -LiteralPath $entryPath -PathType Container) {
                $files = Get-ChildItem -LiteralPath $entryPath -Recurse -File | Sort-Object FullName
            } else { $files = @(Get-Item -LiteralPath $entryPath) }
            foreach ($file in $files) {
                $relative = $file.FullName.Substring($BasePath.Length + 1).Replace('\', '/')
                [IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, $file.FullName, $relative, [IO.Compression.CompressionLevel]::Optimal) | Out-Null
            }
        }
    } finally { $zip.Dispose(); $stream.Dispose() }
}

$extensionZip = Join-Path $releaseRoot "NewTab-$version.zip"
$sourceZip = Join-Path $releaseRoot "NewTab-source-$version.zip"
Write-ProjectZip -Target $extensionZip -BasePath $distRoot -Entries @('manifest.json', 'index.html', 'src', 'assets', 'original')
Write-ProjectZip -Target $sourceZip -BasePath $projectRoot -Entries @('README.md', '.gitignore', '.prettierignore', 'package.json', 'package-lock.json', 'manifest.json', 'index.html', 'extension-public-key.txt', 'src', 'assets', 'original', 'docs', 'scripts', 'tests')
$hashes = @($extensionZip, $sourceZip) | ForEach-Object {
    $hash = Get-FileHash -LiteralPath $_ -Algorithm SHA256
    '{0}  {1}' -f $hash.Hash.ToLowerInvariant(), [IO.Path]::GetFileName($_)
}
[IO.File]::WriteAllLines((Join-Path $releaseRoot 'SHA256.txt'), $hashes, [Text.UTF8Encoding]::new($false))
Get-Item -LiteralPath $extensionZip, $sourceZip | Select-Object Name, Length
