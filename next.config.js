/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: [
    // `.page.tsx` for page components
    "page.tsx",
    // `.api.ts` for API routes
    "api.ts",
  ],
  async redirects() {
    return [
      {
        source: "/",
        destination: "/siren/",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
