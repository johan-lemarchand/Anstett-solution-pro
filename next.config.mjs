/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: '/sandbox/:path*',
            },
        ];
    },
};

export default nextConfig;