import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	try {
		const archive = await prisma.nonFictionArticle.groupBy({
			by: ["createdAt"],
			_count: {
				_all: true,
			},
		});
		res.status(200).json(archive);
	} catch (e) {
		res.status(500).json({
			message: "Unable to load Non-fiction archive",
		});
	}
}
