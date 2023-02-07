import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: '账密',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "用户名", type: "text", placeholder: "grass" },
        password: { label: "密码", type: "password", placeholder: 'grass' }
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        const { username, password } = credentials;
        if (username === 'grass' && password === 'grass') {
          return {
            id: 1,
            name: 'grass',
            email: '467195537@qq.com',
            image: "",
          }
        } else {
          return Promise.resolve(null);
        }
      }
    }),
    // ...add more providers here
  ],
  callbacks: {
    async session({ session, token, user }) {
      return session
    }
  }
}

export default NextAuth(authOptions)