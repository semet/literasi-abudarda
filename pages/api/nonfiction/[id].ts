import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	try {
		const posts = await prisma.nonFictionArticle.findUnique({
			where: { id: req.query.id as string },
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
			message: "Unable to load Non-Fiction Article..",
		});
		throw e;
	}
}
