import type { NextAuthConfig } from "next-auth";
import { compare } from "bcryptjs";

import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";

// import { getUserByEmail } from "~/utils/user";
import { loginSchema } from "~/schema";

export default {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Github({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Credentials({
      authorize: async (credentials) => {
        const validatedFields = loginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;
          // const user = await getUserByEmail(email);
          // if (!user || !user.password) return null;
          // const doPasswordsMatch = await compare(password, user.password);
          // if (doPasswordsMatch) return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
