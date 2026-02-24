import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  baseURL: "http://localhost:5173",
  plugins: [],
});

await authClient.signIn.email({
  email: "test@user.com",
  password: "password1234",
});
