// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

export function webpack(config) {
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  return config;
}
  