/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // experimental: {
    //   reactRoot: true,
    // },
    // After (New method)
images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
      },
      {
        protocol: 'https',
        hostname: 'anotherdomain.com',
      },
    ],
  },
  
  };
  
  export default nextConfig;
  