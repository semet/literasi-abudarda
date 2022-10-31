declare module "common" {
	import Prisma, { Author, Cerpen } from "@prisma/client";
	type CerpenWithDetails = Cerpen & {
		author: Author;
	};

	type AuthorWithCerpen = Author & {
		cerpens: Cerpen[];
		_count: Prisma.AuthorCountOutputType;
	};
}
