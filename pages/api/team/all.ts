import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	try {
		const teams = await prisma.team.findMany({
			orderBy: {
				name: "asc",
			},
		});
		res.status(200).json(teams);
	} catch (e) {
		res.status(500).json({
			message: "Unable to load teams ...",
		});
	}
}
