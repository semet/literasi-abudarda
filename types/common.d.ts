declare module "common" {
	import Prisma, {
		Author,
		Category,
		Cerpen,
		FictionArticle,
		FictionComment,
		NonFictionArticle,
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

	type NonFictionArticleWithDetails = NonFictionArticle & {
		author: Author;
		category: Category;
		_count: Prisma.NonFictionArticleCountOutputType;
	};

	type FictionCommentWithUser = FictionComment & {
		user: User;
	};
	type NonFictionCommentWithUser = NonFictionComment & {
		user: User;
	};
}
