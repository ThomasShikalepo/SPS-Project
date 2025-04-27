/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
            protocol: "https",
            hostname: "images.pexels.com",
            port: "",
            //allows all the path from hostname
            pathname: "/**",
            },
        ],
    },
};
module.exports = nextConfig;