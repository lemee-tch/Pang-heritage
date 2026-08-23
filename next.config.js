/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: the whole site is pre-rendered to plain HTML/CSS/JS
  // at build time, so it can be served from a CDN edge (Netlify, Vercel,
  // Cloudflare Pages, GitHub Pages) with no origin server — the core of
  // a JAMstack deployment and the fastest path for 3G/4G visitors.
  output: 'export',
  reactStrictMode: true,
  images: {
    // next/image's on-demand optimizer needs a running Node server, which
    // is unavailable in a static export. All imagery in this project is
    // hand-authored SVG (see components/atoms/Image.jsx), so this is not
    // a loss — SVG source files are already smaller than an optimized
    // raster photo and remain crisp at any pixel density.
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
