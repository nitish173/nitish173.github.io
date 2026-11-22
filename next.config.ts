import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

// Static site for GitHub Pages. For a project page
// (https://<user>.github.io/<repo>/) set NEXT_PUBLIC_BASE_PATH="/<repo>".
// Leave it empty for https://<user>.github.io or a custom domain.
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  images: { unoptimized: true },
  turbopack: { root: projectRoot },
};

export default nextConfig;
