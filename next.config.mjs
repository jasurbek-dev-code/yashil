/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        domains: ['vaziyat.technocorp.uz'],
        unoptimized: true,
    },
};

export default nextConfig;

