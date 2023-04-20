/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ko'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['cdn.dribbble.com'],
  },
}

module.exports = nextConfig
