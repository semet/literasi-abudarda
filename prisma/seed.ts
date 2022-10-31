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

const videoSeed = async () => {
	const video: Prisma.VideoCreateManyInput[] = [];
	for (let i = 0; i < 10; i++) {
		const data: Prisma.VideoCreateManyInput = {
			caption: faker.lorem.sentence(),
			url: faker.internet.avatar(),
			published: faker.datatype.boolean(),
		};
		video.push(data);
	}
	await prisma.video.createMany({ data: video });
};

const authorSeed = async () => {
	const authors: Prisma.AuthorCreateManyInput[] = [];
	for (let i = 0; i < 10; i++) {
		const data: Prisma.AuthorCreateManyInput = {
			image: faker.image.avatar(),
			name: faker.name.fullName(),
			bio: faker.lorem.paragraph(),
		};
		authors.push(data);
	}
	await prisma.author.createMany({ data: authors });
};

const userSeed = async () => {
	const users: Prisma.UserCreateManyInput[] = [];
	for (let i = 0; i < 10; i++) {
		const data: Prisma.UserCreateManyInput = {
			image: faker.image.avatar(),
			name: faker.name.fullName(),
			email: faker.internet.email(),
			password: "password",
			phone: faker.phone.number(),
		};
		users.push(data);
	}
	await prisma.user.createMany({ data: users });
};

teamSed()
	.then(async () => await videoSeed())
	.then(async () => await authorSeed())
	.then(async () => await userSeed())
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
