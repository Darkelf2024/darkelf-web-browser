/** Allowlisted base paths — only these values are ever used as a prefix */
const ALLOWED_BASE_PATHS = new Set(['', '/darkelf-web-browser']);

const raw = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/** Validated build-time base path — guaranteed to be a known safe value */
export const BASE_PATH: string = ALLOWED_BASE_PATHS.has(raw) ? raw : '';

/** Prefix a public asset path with the basePath for GitHub Pages compatibility */
export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
