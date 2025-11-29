/**
 * Generates a URL with the correct base path for the current environment.
 *
 * @param path - The path to append to the base URL (e.g., "/blog" or "blog")
 * @returns The full path with base URL prepended
 *
 * @example
 * // Production (BASE_URL = "/")
 * getUrl("/blog") // Returns: "/blog"
 *
 * @example
 * // PR Preview (BASE_URL = "/preview/pr-123")
 * getUrl("/blog") // Returns: "/preview/pr-123/blog"
 */
export function getUrl(path: string): string {
    const base = import.meta.env.BASE_URL || '/';

    // Remove leading slash from path to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    // Combine base and path, ensuring no double slashes
    const combined = base.endsWith('/')
        ? `${base}${cleanPath}`
        : `${base}/${cleanPath}`;

    // Clean up any double slashes that might remain
    return combined.replace(/\/+/g, '/');
}
