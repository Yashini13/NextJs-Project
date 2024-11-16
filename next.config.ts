import type { NextConfig } from 'next';

// Define the Next.js configuration
const nextConfig: NextConfig = {
  // Any other Next.js configuration can be added here
  env: {
    // Environment variables for API base URL and token
    API_URL: 'https://api.socialverseapp.com',
    API_TOKEN: 'flic_1e01009f9c1a54706f385bcc1993a08fd9647ba8f499572d280654d1c03c47bf',
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.socialverseapp.com/:path*',
      },
    ];
  },
};

export default nextConfig;
