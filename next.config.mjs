import { defineConfig } from 'next';

export default defineConfig({
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Replace with your image domain(s)
    formats: ['image/avif', 'image/webp']
},
  experimental: {
    optimizeImages: true,
    images: {
      unoptimized: false
}
},
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
});
    return config;
  },
  env: {
    BRAND_NAME: 'AI',
    PRIMARY_COLOR: '#FF5733', // Red
    SECONDARY_COLOR: '#FFC300', // Orange
    BACKGROUND_COLOR: '#FFFFFF', // White
    SITE_TITLE: 'VidNexus - AI Video Creation',
    SITE_DESCRIPTION: 'Transform your ideas into stunning AI-generated videos with VidNexus.'
}
});