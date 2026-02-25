import { betterAuth } from "better-auth";

export const auth = betterAuth({
  trustedOrigins: ["http://localhost:5173"], // Replace with your frontend's origin
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
  },
});
