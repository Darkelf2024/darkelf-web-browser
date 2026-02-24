export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/** Prefix a public asset path with the basePath for GitHub Pages compatibility */
export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
