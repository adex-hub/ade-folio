/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    SERVICE_ID: process.env.SERVICE_ID,
    TEMPLATE_ID: process.env.TEMPLATE_ID,
    PUBLIC_KEY: process.env.PUBLIC_KEY,
  },
};

export default nextConfig;
