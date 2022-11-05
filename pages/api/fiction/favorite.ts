import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	const skipped = (req.query.skippedArticle as string) ?? "";
	try {
		const favorites = await prisma.fictionArticle.findMany({
			orderBy: {
				comments: {
					_count: "desc",
				},
			},
			take: 4,
			select: {
				id: true,
				slug: true,
				title: true,
				image: true,
				author: {
					select: {
						name: true,
					},
				},
				_count: {
					select: {
						comments: true,
					},
				},
			},
			where: {
				slug: {
					not: skipped,
				},
			},
		});

		res.status(200).json(favorites);
	} catch (e) {
		res.status(500).json({
			message: "Unable to load favorite fiction article",
		});
		throw e;
	}
}
