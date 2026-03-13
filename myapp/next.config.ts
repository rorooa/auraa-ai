import type { NextConfig } from "next";

const BACKEND = process.env.NEXT_PUBLIC_BACKEND_URL || "http://127.0.0.1:8000";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: '/emotion', destination: `${BACKEND}/emotion` },
      { source: '/chat', destination: `${BACKEND}/chat` },
      { source: '/socket.io/:path*', destination: `${BACKEND}/socket.io/:path*` },
      { source: '/login', destination: `${BACKEND}/login` },
      { source: '/register', destination: `${BACKEND}/register` },
      { source: '/history', destination: `${BACKEND}/history` },
      { source: '/profile/:path*', destination: `${BACKEND}/profile/:path*` },
    ];
  },
};

export default nextConfig;
