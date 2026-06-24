//@ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'http',
      hostname: 'localhost',
      port: '8888',
      pathname: 'assets/uploads/**'
    },
    new URL('http://localhost:8888/show-image/**')]
  },
  allowedDevOrigins: [
    'https://outline-provided-sequence.ngrok-free.dev',
  ],
  // Next.js options go here
  // See: https://nextjs.org/docs/app/api-reference/config/next-config-js
};

module.exports = nextConfig;

