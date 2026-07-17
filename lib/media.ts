/** Public folder filenames with spaces — safe URL path */
export function publicPath(filename: string) {
  return `/${encodeURIComponent(filename)}`
}
