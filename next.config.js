/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // https://velog.io/@dogfoot/react-spring-bottom-sheet-reading-getValue-%EC%97%90%EB%9F%AC-%EA%B8%B0%EB%A1%9D 
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
