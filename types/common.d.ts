declare module "common" {
	import Prisma, {
		Author,
		Cerpen,
		FictionArticle,
		FictionComment,
		NonFictionComment,
		User,
	} from "@prisma/client";
	type CerpenWithDetails = Cerpen & {
		author: Author;
	};

	type AuthorWithCerpen = Author & {
		cerpens: Cerpen[];
		_count: Prisma.AuthorCountOutputType;
	};

	type FictionArticleWithDetails = FictionArticle & {
		author: Author;
		_count: Prisma.FictionArticleCountOutputType;
	};

	type FictionCommentWithUser = FictionComment & {
		user: User;
	};
	type NonFictionCommentWithUser = NonFictionComment & {
		user: User;
	};
}
