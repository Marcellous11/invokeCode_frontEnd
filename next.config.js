/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		LOCAL_OPEN_API_URL: process.env.LOCAL_OPEN_API_URL,
		LOCAL_IP_ADDRESS: process.env.LOCAL_IP_ADDRESS,
	},
};

module.exports = nextConfig;
