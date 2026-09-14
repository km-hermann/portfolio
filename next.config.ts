import type { NextConfig } from "next";
import os from "os";

// Helper function to resolve your active Wi-Fi / LAN IP dynamically
const getLocalIp = () => {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name] || []) {
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }
  return "localhost";
};

const localIp = getLocalIp();

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    localIp,
    `${localIp}:3000`,
    "localhost:3000",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ferf1mheo22r9ira.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;