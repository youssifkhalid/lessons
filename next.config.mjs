/** @type {import('next').NextConfig} */
const nextConfig = {
  // هذا السطر هو مفتاح تصدير HTML الثابت
  output: 'export', 

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
