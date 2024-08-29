/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
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