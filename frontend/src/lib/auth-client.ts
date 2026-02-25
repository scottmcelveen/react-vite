import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient();
export const { signIn, signUp, signOut, useSession } = authClient;
export type AuthClient = typeof authClient;
export type Session = AuthClient["$Infer"]["Session"]["session"];
export type User = AuthClient["$Infer"]["Session"]["user"];
