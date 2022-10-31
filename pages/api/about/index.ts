import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	try {
		const about = await prisma.about.findFirst();
		res.status(200).json(about);
	} catch (e) {
		res.status(500).json({
			message: "Unable to load about ...",
		});
	}
}
