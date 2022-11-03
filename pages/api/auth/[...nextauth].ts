import { compareSync } from "bcrypt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../../prisma/db";

export default NextAuth({
	providers: [
		CredentialsProvider({
			name: "Credential",
			credentials: {
				email: { type: "email" },
				password: { type: "password" },
			},
			authorize: async (credentials, req) => {
				const user = await prisma.user.findUnique({
					where: {
						email: credentials?.email as string,
					},
				});

				if (user) {
					const password = compareSync(credentials!.password, user.password);
					if (password) {
						return user;
					}
				}

				return null;
			},
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,

	jwt: {
		maxAge: 30 * 24 * 60 * 60,
	},

	callbacks: {
		jwt: async ({ token, user, account, profile, isNewUser }) => {
			user && (token.user = user);
			return Promise.resolve(token);
		},
		session: async ({ session, user, token }) => {
			return Promise.resolve(session);
		},
	},
	pages: {
		signIn: "/login",
	},
});
