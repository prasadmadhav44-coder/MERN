/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // {
      //   source: '/blogs',
      //   destination: "/blogs",
      //   permanent: true
      // }
    ]
  }
};

export default nextConfig;
