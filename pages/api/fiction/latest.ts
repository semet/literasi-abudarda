import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	try {
		const fictions = await prisma.fictionArticle.findMany({
			orderBy: {
				createdAt: "asc",
			},
			include: {
				author: true,
				_count: {
					select: {
						comments: true,
					},
				},
			},
			take: 10,
			skip: 1,
		});

		res.status(200).json(fictions);
	} catch (e) {
		res.status(500).json({
			message: "Unable to load latest fictional article ...",
		});
	}
}
