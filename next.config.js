/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en-US', 'fr', 'pt-BR'],
    defaultLocale: 'pt-BR',
    localeDetection: false,
  },
};

module.exports = nextConfig;
