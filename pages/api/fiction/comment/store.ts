import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "../../../../prisma/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	const session = await getSession({ req });

	if (session) {
		if (req.method !== "POST") {
			res.status(405).json({
				message: "Method not allowed!",
			});
			res.end();
		}
		try {
			const user = await prisma.user.findUnique({
				where: {
					email: req.body.userEmail,
				},
				select: {
					id: true,
				},
			});
			const comment = await prisma.fictionComment.create({
				data: {
					article: {
						connect: {
							id: req.body.articleId,
						},
					},
					user: {
						connect: {
							id: user?.id!,
						},
					},
					body: req.body.commentBody,
				},
			});

			res.status(201).json({
				message: "Comment submitted",
			});
		} catch (e) {
			res.status(500).json({
				message: "Unable to store comment",
			});

			throw e;
		}
	} else {
		res.status(401).json({
			message: "Forbidden access",
		});
	}
	res.end();
}
