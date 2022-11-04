import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	const limit = 5;
	const cursor = req.query.cursor ?? "";
	const cursorObj = cursor === "" ? undefined : { id: cursor.toString() };

	console.log("cursor", cursor);

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
			skip: cursor !== "" ? 1 : 0,
			cursor: cursorObj,
			take: limit,
		});
		res.status(200).json({
			posts,
			nextId: posts.length === limit ? posts[limit - 1].id : undefined,
		});
	} catch (e) {
		res.status(500).json({
			message: "Unable to load Fiction Article..",
		});
	}
}
