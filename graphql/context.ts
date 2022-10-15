import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { prisma } from "../prisma/db";

export type Context = {
	prisma: PrismaClient;
};
export async function createContext({
	req,
	res,
}: {
	req: NextApiRequest;
	res: NextApiResponse<any>;
}): Promise<Context> {
	return {
		prisma,
	};
}
