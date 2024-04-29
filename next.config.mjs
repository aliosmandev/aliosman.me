/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                hostname: 'lh3.googleusercontent.com',
            },
            {
                hostname: "res.cloudinary.com",
            },
        ]
    }
};

export default nextConfig;
