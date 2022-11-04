import { prisma } from "./db";
import { faker } from "@faker-js/faker";
import { Prisma } from "@prisma/client";
import { hashSync } from "bcrypt";

const teamSeed = async () => {
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
			password: hashSync("danis3m3t", 10),
			phone: faker.phone.number(),
		};
		users.push(data);
	}
	await prisma.user.createMany({ data: users });
};

const categorySeeder = async () => {
	const categories: Prisma.CategoryCreateManyInput[] = [];
	for (let i = 0; i < 10; i++) {
		const data: Prisma.CategoryCreateManyInput = {
			name: faker.lorem.word(),
			slug: faker.lorem.slug(),
		};
		categories.push(data);
	}

	await prisma.category.createMany({ data: categories });
};

const fiksiSeeder = async () => {
	// const categories = await prisma.category.findMany();
	const authors = await prisma.author.findMany();

	const posts: Prisma.FictionArticleCreateManyInput[] = [];
	for (let i = 0; i < 30; i++) {
		const data: Prisma.FictionArticleCreateManyInput = {
			authorId: authors[Math.floor(Math.random() * authors.length)].id,
			body: faker.lorem.paragraphs(6),
			image: faker.image.nature(),
			title: faker.lorem.sentence(),
		};
		posts.push(data);
	}
	await prisma.fictionArticle.createMany({ data: posts });
};

const nonFictionSeder = async () => {
	const categories = await prisma.category.findMany();
	const authors = await prisma.author.findMany();

	const posts: Prisma.NonFictionArticleCreateManyInput[] = [];
	for (let i = 0; i < 30; i++) {
		const data: Prisma.NonFictionArticleCreateManyInput = {
			authorId: authors[Math.floor(Math.random() * authors.length)].id,
			categoryId: categories[Math.floor(Math.random() * categories.length)].id,
			body: faker.lorem.paragraphs(6),
			image: faker.image.nature(),
			title: faker.lorem.sentence(),
		};
		posts.push(data);
	}
	await prisma.nonFictionArticle.createMany({ data: posts });
};

const bookSeeder = async () => {
	const categories = await prisma.category.findMany();
	const books: Prisma.BookCreateManyInput[] = [];
	for (let i = 0; i < 30; i++) {
		const data: Prisma.BookCreateManyInput = {
			categoryId: categories[Math.floor(Math.random() * categories.length)].id,
			image: faker.image.unsplash.objects(),
			isbn: faker.random.alphaNumeric().toUpperCase(),
			sinopsis: faker.lorem.paragraphs(5),
			title: faker.lorem.sentence(),
		};

		books.push(data);
	}
	await prisma.book.createMany({ data: books });
};
bookSeeder()
	// .then(async () => await videoSeed())
	// .then(async () => await authorSeed())
	// .then(async () => await userSeed())
	// .then(async () => await categorySeeder())
	// .then(async () => await fiksiSeeder())
	// .then(async () => await nonFictionSeder())
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
