/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/Portfolio',
    serverExternalPackages: [
        '@react-email/render',
    ],
    images: {
        unoptimized: true,
    },
    experimental: {
        // images:{
        //     remotePatterns:[
        //         {
        //             protocol: 'https',
        //             hostname: 'cdn.jsdelivr.net',
        //         }
        //     ]
        // }
    }
}

module.exports = nextConfig
