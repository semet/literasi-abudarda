import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	const limit = 6;
	const cursor = req.query.cursor ?? "";
	const cursorObj = cursor === "" ? undefined : { id: cursor.toString() };
	try {
		const books = await prisma.book.findMany({
			orderBy: {
				createdAt: "desc",
			},
			include: {
				category: {
					select: {
						id: true,
						name: true,
					},
				},
			},
			skip: cursor !== "" ? 1 : 0,
			cursor: cursorObj,
			take: limit,
		});
		res.status(200).json({
			books,
			nextId: books.length === limit ? books[limit - 1].id : undefined,
		});
	} catch (e) {
		res.status(500).json({
			message: "Unable to load books ...",
		});
	}
}
