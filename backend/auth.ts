import { betterAuth } from "better-auth";

export const auth = betterAuth({
  trustedOrigins: [process.env.FRONTEND_HOST || ""],
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
  },
});
