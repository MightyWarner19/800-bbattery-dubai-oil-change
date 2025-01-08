module.exports = {
  // Enabling React Strict Mode
  reactStrictMode: true,

  // Configure Next.js to use a custom base path
  basePath: '/best-onsite-mobile-car-services-dubai',

  // Path for static assets
  assetPrefix: '/best-onsite-mobile-car-services-dubai/',

  // For serving images correctly
  images: {
    loader: 'custom', // Using a custom loader since you're using a CDN
    domains: ['imagedelivery.net'], // Add your CDN domain here
    unoptimized: true, // Disable Next.js's built-in image optimization since CDN handles it
  },

  // Webpack configuration to ensure images and static assets are correctly processed
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false, // Ensure `fs` module is disabled on the client side
      };
    }
    return config;
  },
};