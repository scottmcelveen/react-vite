import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  baseURL: import.meta.env.VITE_APP_BACKEND_HOST,
});
export const { signIn, signUp, signOut, useSession } = authClient;
export type AuthClient = typeof authClient;
export type Session = AuthClient["$Infer"]["Session"]["session"];
export type User = AuthClient["$Infer"]["Session"]["user"];
