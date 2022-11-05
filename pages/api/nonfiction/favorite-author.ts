import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	try {
		const authors = await prisma.author.findMany({
			orderBy: {
				nonFictions: {
					_count: "desc",
				},
			},
			select: {
				id: true,
				name: true,
				image: true,
				_count: {
					select: {
						nonFictions: true,
					},
				},
			},
			take: 4,
		});
		res.status(200).json(authors);
	} catch (e) {
		res.status(500).json({
			message: "Unable to load favorite author for non-fiction article ...",
		});
	}
}
