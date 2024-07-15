import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDocInterface = nextUrl.pathname.startsWith('/medecin');
      if (isOnDocInterface) {
        if (isLoggedIn) return true;
        return false; 
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/medecin', nextUrl));
      }
      return true;
    },
  },
  providers: [], 
} satisfies NextAuthConfig;