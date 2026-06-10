// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  // output: 'export' hata diya — Sanity Studio aur dynamic routes ke saath kaam nahi karta
  images: {
    remotePatterns: [
      {
        // Sanity ki images ke liye
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

export default nextConfig;
