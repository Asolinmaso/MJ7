/**
 * Client-side API base URL. When NEXT_PUBLIC_API_URL is unset, uses same-origin paths (e.g. /api/contact).
 */
export function getApiUrl(path: string): string {
  const trimmed = path.startsWith("/") ? path : `/${path}`;
  const base = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ?? "";
  return base ? `${base}${trimmed}` : trimmed;
}
