/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // basePath: "/test", // prefix 사용 시
};

// proxy 설정
// async rewrites() {
//   return [
//     {
//       source: "/v2/:path*",
//       destination: `${process.env.API_URL}/v2/:path*`,
//     },
//   ];
// },

module.exports = nextConfig;
