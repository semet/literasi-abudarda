import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	try {
		const books = await prisma.book.findMany({
			orderBy: {
				downloads: "asc",
			},
			select: {
				id: true,
				title: true,
				downloads: true,
			},
			take: 4,
			where: {
				id: {
					not: req.query.skippedId as string,
				},
			},
		});
		res.status(200).json(books);
	} catch (e) {
		res.status(500).json({
			message: "Unable to load Favorite e-book",
		});
	}
}
