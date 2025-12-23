import type { NextConfig } from "next";
// import { URL } from "url";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      // new URL('https://applescoop.org/'),
      // new URL('https://images.pexels.com/'),
      // new URL('https://www.itl.cat/'),
      {
        protocol: 'https',
        hostname: 'applescoop.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.itl.cat',
        port: '',
        pathname: '/**',
      }
    ]
  },
};

export default nextConfig;
