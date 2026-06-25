/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // 1. 🎯 สะพานเชื่อมระบบรูปภาพ (สลัดคำว่า localhost ทิ้ง สลับมาใช้ ngrok บน Netlify)
      {
        source: '/backend-images/:path*',
        destination: 'https://outline-provided-sequence.ngrok-free.dev/:path*',
      },
      // 2. สะพานเชื่อมระบบ API ปกติของคุณ
      {
        source: '/api/:path*',
        destination: 'https://outline-provided-sequence.ngrok-free.dev/:path*',
      },
    ];
  },

  images: {
    // remotePatterns สำหรับแท็ก <Image /> ของ Next.js (คอยดักเผื่อไว้)
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8888',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'outline-provided-sequence.ngrok-free.dev',
        pathname: '/**',
      },
    ],
  },

  allowedDevOrigins: [
    'https://outline-provided-sequence.ngrok-free.dev',
  ],
};

module.exports = nextConfig;