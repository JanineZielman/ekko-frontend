/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: "default",
    domains: ["localhost", "https://lucid-khayyam.85-214-72-113.plesk.page"],
    ocaleDetection: false,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: ['nb', 'en'],
    defaultLocale: 'nb',
  },
}

module.exports = nextConfig
