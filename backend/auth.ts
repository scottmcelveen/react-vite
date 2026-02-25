import { betterAuth } from "better-auth";

export const auth = betterAuth({
  advanced: {
    crossSubDomainCookies: {
      enabled: true,
      domain: process.env.FRONTEND_DOMAIN || "",
    },
  },
  trustedOrigins: [
    process.env.FRONTEND_SCHEME + "://" + process.env.FRONTEND_HOST || "",
  ],
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      redirectURI:
        process.env.FRONTEND_SCHEME +
        "://" +
        process.env.FRONTEND_HOST +
        "/api/auth/callback/google",
    },
  },
});
