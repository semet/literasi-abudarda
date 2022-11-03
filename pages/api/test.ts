import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../prisma/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	try {
		const categories = await prisma.category.findMany();
		res.status(200).json(categories);
	} catch (e) {
		res.status(500).json({
			message: "No ..",
		});
	}
}
