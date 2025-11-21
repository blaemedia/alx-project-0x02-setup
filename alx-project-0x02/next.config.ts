import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  "compilerOptions": {
    "jsx": "react-jsx",
    "types": ["react", "react-dom"],
    "allowJs": true,
    "esModuleInterop": true,
    "moduleResolution": "node"
  }
};



export default nextConfig;
