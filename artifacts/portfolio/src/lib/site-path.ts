export function sitePath(path: string = "/") {
  const basePath = import.meta.env.BASE_URL ?? "/";
  const normalizedBase = basePath === "/" ? "" : basePath.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return encodeURI(`${normalizedBase}${normalizedPath}` || "/");
}