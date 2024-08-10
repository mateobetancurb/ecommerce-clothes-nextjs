/** @type {import('next').NextConfig} */
const nextConfig = {
	// eslint: {
	// 	ignoreDuringBuilds: true,
	// },
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "fakestoreapi.com",
			},
		],
	},
};

export default nextConfig;
