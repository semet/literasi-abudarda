import { prisma } from "./db";
import { faker } from "@faker-js/faker";
import { Prisma } from "@prisma/client";
import { hashSync } from "bcrypt";

const aboutSeed = async () => {
	await prisma.about.create({
		data: {
			body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida urna eu ex commodo, ac pretium neque interdum. Nullam ac blandit neque. Aenean vulputate vulputate metus, consequat aliquam eros bibendum ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis et mauris eget nibh tempus semper. Morbi a lectus condimentum, iaculis ante id, pharetra mauris. Nulla ornare at enim egestas lobortis. Praesent vitae ipsum venenatis, congue leo sed, sodales mi. Mauris mattis luctus sagittis. Morbi ut ullamcorper ipsum. Cras sed nunc imperdiet, facilisis diam id, placerat sem.

         Ut ut blandit sapien. Pellentesque finibus tortor vitae nulla facilisis consectetur. Pellentesque maximus velit nec lacus pulvinar sagittis. Cras in augue dolor. Sed nibh tortor, pretium id tellus et, lobortis fermentum ligula. Praesent malesuada magna massa, vitae efficitur nisi iaculis vulputate. Vivamus in tortor metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In rhoncus feugiat sapien, eget lobortis ex finibus quis. Suspendisse at eleifend risus.
         
         Integer fermentum ac velit vel eleifend. Nunc eu gravida neque. Morbi aliquet eu dolor vitae tempor. In sodales odio ut vehicula euismod. Aenean congue bibendum massa ac consequat. Donec lacinia vehicula urna, sit amet porta massa cursus et. Integer auctor commodo ex. Sed pulvinar risus metus, vel pulvinar eros eleifend quis. In vestibulum tristique posuere. Pellentesque tincidunt et enim ac venenatis. Aliquam posuere urna at tincidunt mattis. Nulla tellus lorem, tempor eu turpis sed, mattis placerat turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus in tincidunt nisi. Nulla nec dui at arcu viverra pretium maximus tincidunt urna. Nam risus sem, lobortis eget mauris eget, facilisis venenatis ligula.
         
         Phasellus faucibus dui mi, sed tempus erat finibus at. Duis laoreet est quis leo ullamcorper, at aliquet nibh pulvinar. Curabitur sed nibh vulputate, rutrum augue sed, posuere elit. Nullam auctor nunc arcu, sed tempus nisi facilisis non. Integer sed enim ultricies, fermentum nibh ut, sodales diam. Maecenas lobortis convallis nibh. Nulla laoreet varius neque id sagittis. Sed sed felis ornare, auctor lorem quis, porta eros. Cras aliquet neque eu eros iaculis ultricies. Aenean eget semper ligula. Donec interdum ipsum et quam mollis posuere. Fusce nec ligula a est faucibus vestibulum. Etiam at ultricies tellus, at tempus massa. Donec euismod faucibus arcu, eget feugiat lacus ullamcorper interdum.
         
         Morbi tempus dui tellus, a lobortis ante maximus vel. Praesent placerat viverra dui volutpat sodales. Phasellus semper lacinia justo, eu facilisis felis tincidunt ut. In vehicula rhoncus varius. Donec mollis leo et eros porta rutrum. Donec eu gravida lectus. Aliquam eu mauris pharetra, semper eros tristique, facilisis urna. Etiam malesuada urna nibh, aliquet facilisis risus aliquet eget. Sed ullamcorper mauris sed magna vulputate vestibulum. Integer ultrices sed felis et lobortis. Praesent id venenatis quam. Praesent lobortis rhoncus dolor, sed pellentesque odio pulvinar vitae. Nullam ultrices hendrerit diam, sit amet fermentum tellus. Cras placerat, nibh ac suscipit laoreet, nisi mi tincidunt dui, et tristique libero libero in lacus. Proin pharetra consequat urna, quis volutpat est.
         
         Integer dictum felis et orci scelerisque venenatis. Integer pulvinar, tortor ac euismod malesuada, elit tellus efficitur lorem, quis sagittis nulla arcu vel ante. Proin sit amet suscipit metus. Duis congue consectetur sapien, vitae efficitur augue ultricies at. Aliquam lobortis suscipit turpis, quis aliquam tortor euismod at. Duis aliquet erat eget fermentum pharetra. Mauris commodo vulputate metus a auctor. Suspendisse vulputate facilisis dictum. Nullam sit amet lorem tortor. In non sagittis ipsum, vitae sagittis metus.
         
         Suspendisse sit amet quam nec nunc varius pharetra. Sed ac augue leo. Phasellus vitae sapien lobortis, malesuada orci vitae, semper enim. Morbi in fermentum nisl. Nunc eget lorem vel nibh tincidunt ornare et eu tortor. Integer molestie libero id consectetur posuere. Suspendisse gravida semper nisl quis viverra. Pellentesque gravida magna nisl, sed pulvinar nunc venenatis ac. Aenean condimentum et lectus at accumsan. Curabitur aliquet dolor nulla. Curabitur gravida est ante, in tempor massa feugiat vitae. Aliquam vel ultricies metus, quis blandit magna. Integer aliquet interdum urna, vitae auctor massa lacinia non. Suspendisse at mi in eros bibendum accumsan. In nec tortor et magna faucibus fermentum id sed lorem.
         
         `,
		},
	});
};

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
			slug: faker.lorem.slug(4),
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
			slug: faker.lorem.slug(4),
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
			isbn: faker.random.word().toUpperCase(),
			title: faker.lorem.words(5),
			url: "https://drive.google.com/file/d/1PPuyFb82e9j5QMlQbpOOThd5mEunmVJt/view",
		};

		books.push(data);
	}
	await prisma.book.createMany({ data: books });
};
aboutSeed()
	// .then(async () => await videoSeed())
	// .then(async () => await authorSeed())
	// .then(async () => await userSeed())
	// .then(async () => await categorySeeder())
	// .then(async () => await fiksiSeeder())
	// .then(async () => await nonFictionSeder())
	// .then(async () => await bookSeeder())
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
