/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",           // REQUIRED for GitHub Pages
    basePath: "/Portfolio",     // repo name
    assetPrefix: "/Portfolio/",

    serverExternalPackages: [
        "@react-email/render",
    ],

    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
