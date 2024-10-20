import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "geosense",
  webDir: "out",
  bundledWebRuntime: false,
  server: {
    url: "http://192.168.1.42:3000",
    cleartext: true,
  },
};

export default config;
