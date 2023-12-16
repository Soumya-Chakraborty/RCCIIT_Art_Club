/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Remove the deprecated 'target' property
  // target: 'experimental-serverless-trace',

  // Correct the experimental options
  experimental: {
    // Remove the 'images' property if you are not using it
    // images: true,

    // Add other experimental options if needed
  },

  // Add other configurations as needed
}

module.exports = nextConfig
