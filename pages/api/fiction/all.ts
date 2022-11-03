import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	try {
		const posts = await prisma.fictionArticle.findMany({
			orderBy: { createdAt: "desc" },
			include: {
				_count: {
					select: {
						comments: true,
					},
				},
				author: true,
				comments: true,
			},
		});
		res.status(200).json(posts);
	} catch (e) {
		res.status(500).json({
			message: "Unable to load Fiction Article..",
		});
	}
}
