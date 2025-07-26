/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Configurações específicas para SSG
  experimental: {
    optimizeCss: true,
  },
  // Garantir que todas as páginas sejam estáticas
  generateBuildId: async () => {
    return "vianahub-static-build"
  },
}

module.exports = nextConfig
