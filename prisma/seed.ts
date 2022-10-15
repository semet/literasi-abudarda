import { prisma } from "./db";
import { faker } from "@faker-js/faker";
import { Prisma } from "@prisma/client";

const teamSed = async () => {
	const team: Prisma.TeamCreateManyInput[] = [];
	for (let i = 0; i < 10; i++) {
		const data: Prisma.TeamCreateManyInput = {
			email: faker.internet.email(),
			name: faker.name.fullName(),
			phone: faker.phone.number(),
			position: faker.company.name(),
			image: faker.image.unsplash.people(),
		};
		team.push(data);
	}
	await prisma.team.createMany({ data: team });
};

teamSed()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
