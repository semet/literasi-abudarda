import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	try {
		const best = await prisma.nonFictionArticle.findMany({
			orderBy: {
				comments: {
					_count: "desc",
				},
			},
			include: {
				author: true,
				category: true,
				_count: {
					select: {
						comments: true,
					},
				},
			},
			take: 1,
		});
		res.status(200).json(best);
	} catch (e) {
		res.status(500).json({
			message: "Unable to load Featured fiction ...",
		});
	}
}
