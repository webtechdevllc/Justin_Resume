const path = require('path')

const projectRoot = path.resolve(__dirname)
const tailwindcss = path.join(projectRoot, 'node_modules/tailwindcss')

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    // Pin the app root so Next.js doesn't pick up ~/package-lock.json.
    root: projectRoot,
    resolveAlias: {
      tailwindcss,
    },
  },
  outputFileTracingRoot: projectRoot,
  webpack: (config) => {
    config.context = projectRoot
    config.resolve.alias = {
      ...config.resolve.alias,
      tailwindcss,
    }
    config.resolve.modules = [
      path.join(projectRoot, 'node_modules'),
      ...(config.resolve.modules || ['node_modules']),
    ]
    return config
  },
}

module.exports = nextConfig
