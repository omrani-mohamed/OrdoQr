import NextAuth from "next-auth"
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [Credentials({})],
})