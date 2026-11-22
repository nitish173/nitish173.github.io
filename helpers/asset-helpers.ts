// next/image, next/link and the router automatically respect `basePath`.
// Plain <img src="..."> tags and asset URLs passed to libraries (e.g. the GLB
// model) do not, so they go through this helper instead.
export const BASE_PATH = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(
  /\/$/,
  ""
);

export const asset = (path: string) => {
  if (/^(https?:)?\/\//.test(path) || path.startsWith("data:")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
};
