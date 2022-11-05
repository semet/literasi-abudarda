import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	try {
		const favorites = await prisma.nonFictionArticle.findMany({
			orderBy: {
				comments: {
					_count: "desc",
				},
			},
			take: 4,
			select: {
				id: true,
				title: true,
				image: true,
				slug: true,
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
				id: {
					not: req.query.skippedId as string,
				},
			},
		});

		res.status(200).json(favorites);
	} catch (e) {
		res.status(500).json({
			message: "Unable to load favorite nonfiction article",
		});
	}
}
