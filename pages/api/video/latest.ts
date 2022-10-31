import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	try {
		const videos = await prisma.video.findMany({
			orderBy: {
				createdAt: "desc",
			},
		});

		res.status(200).json(videos);
	} catch (e) {
		res.status(500).json({
			message: "Unable to load video ...",
		});
		throw e;
	}
}
