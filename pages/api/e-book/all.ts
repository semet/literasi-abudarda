import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	try {
		const books = await prisma.book.findMany({
			orderBy: {
				createdAt: "desc",
			},
		});
		res.status(200).json(books);
	} catch (e) {
		res.status(500).json({
			message: "Unable to load books ...",
		});
	}
}
