/**
 * this option to setup how will be authorization over the application
 */

/**
 * Auth Providers
 */
import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";
import {
  comparePasswords,
  getAppUser,
  getUserByEmail,
  validateLoginSchema,
} from "./utils";

export const options: AuthOptions = {
  providers: [
    GoogleProvider({
      profile(profile, token) {
        getAppUser(token);
        return {
          ...profile,
          id: profile.sub,
        };
      },
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    CredentialProvider({
      credentials: {},
      async authorize(credentials) {
        try {
          const parsedCredentials = validateLoginSchema(credentials);
          const foundUser = await getUserByEmail(parsedCredentials.email);

          await comparePasswords(
            parsedCredentials.password,
            foundUser.password!
          );

          return {
            id: foundUser.id,
            email: foundUser.email,
            name: foundUser.name,
          };
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      return token;
    },
    async session({ session }) {
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};
