/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@mui/material', '@mui/icons-material', '@mui/lab'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.pexels.com' },
    ],
  },
  outputFileTracingIncludes: {
    '/**/opengraph-image': [
      './public/fonts/Pretendard-Regular.otf',
      './public/fonts/Pretendard-Medium.otf',
      './public/images/og/**',
      './public/images/product/**',
    ],
  },
};

export default nextConfig;
