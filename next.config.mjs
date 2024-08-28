/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: '/sandbox/:path*',
                has: [
                    {
                        type: 'header',
                        key: 'x-invoke-path',
                        value: '(?!.*\\.ts$).*'
                    }
                ]
            },
        ];
    },
};

export default nextConfig;