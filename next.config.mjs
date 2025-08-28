/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        domains: ['vaziyat.technocorp.uz', 'https://yashilloyiha.uz'],
        unoptimized: true,
    },
};

export default nextConfig;

