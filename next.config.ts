// next.config.ts
import type { NextConfig } from 'next';
// Không cần import 'webpack' nữa
// import type { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  // output: 'export',
  // Xóa hoặc comment phần này
  // webpack(config: Configuration) {
  //   config.module?.rules?.push({
  //     test: /\.svg$/,
  //     issuer: /\.[jt]sx?$/,
  //     use: ['@svgr/webpack'],
  //   });
  //   return config;
  // },
};

export default nextConfig;