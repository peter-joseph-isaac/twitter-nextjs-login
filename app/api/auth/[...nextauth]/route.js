import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";

export const authOptions = {
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",  
  },
  callbacks: {
    async session({ session, token }) {
      if (token?.user) {
        session.user.id = token.user.id;
        session.user.name = token.user.name;
        session.user.username = token.user.screen_name;
        session.user.image = token.user.image;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = {
          id: user.id,
          name: user.name,
          username: user.username,
          image: user.image,
        };
      }
      return token;
    },
  },
  cookies: {
    sessionToken: {
      name: 'next-auth.session-token', 
      options: {
        httpOnly: true,  
        sameSite: 'lax',  
        path: '/',  
        secure: process.env.NODE_ENV === 'production',  
      },
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };