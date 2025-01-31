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
       async jwt({ token, account, profile }) {
        if (account && profile) {
            token.id = profile.id_str;
            token.name = profile.name;
            token.username = profile.screen_name;
            token.image = profile.profile_image_url_https;
        }
        return token;
       },
       async session ({ session, token }) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.username = token.username;
        session.user.image = token.image;
        return session;
      }
    }  
};

export const { GET, POST } = NextAuth(authOptions);