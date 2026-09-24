/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // No external image hosts are wired up yet — see README for where to
    // add real project covers / avatar art.
    remotePatterns: [],
    // The bundled placeholder covers are SVG; Next blocks SVG optimization
    // by default for safety, so it's explicitly allowed here.
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  }
};

export default nextConfig;
