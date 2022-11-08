import {
	Box,
	Divider,
	Flex,
	Heading,
	Icon,
	Image,
	Skeleton,
	Stack,
	Text,
} from "@chakra-ui/react";
import { FictionArticleWithDetails } from "common";
import { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { FaCommentAlt, FaRegCalendarAlt, FaUserAlt } from "react-icons/fa";
import FictionCommentSection from "../../components/fiction/FictionCommentSection";
import FictionSidebar from "../../components/fiction/FictionSidebar";
import LayoutSecondary from "../../components/LayoutSecondary";
import SocialShareButtons from "../../components/shared/SocialShareButtons";
import { prisma } from "../../prisma/db";

//todo: Change file name to [id].tsx
const FictionDetail: NextPage<{ article: FictionArticleWithDetails }> = ({ article }) => {
	return (
		<LayoutSecondary title={"Karya Fiksi"}>
			<Head>
				<title>{article.title}</title>
				<meta property="og:title" content={article.title} />
				<meta
					property="og:url"
					content={`${process.env.BASE_URL}/fiction/${article.slug}`}
				/>
				<meta property="og:image" content={article.image} />
			</Head>
			<Box p={"4"}>
				<Flex gap={12}>
					<Box w={{ base: "full" }}>
						<Stack
							rounded={"md"}
							overflow={"hidden"}
							gap={6}
							bg={"white"}
							boxShadow={"md"}
						>
							<Box maxH={"600px"} overflow={"hidden"}>
								<Image
									src={article.image}
									fallback={<Skeleton w={"full"} h={"400px"} />}
									alt={"Detail"}
									objectFit={"cover"}
									w={"full"}
								/>
							</Box>
							<Stack gap={4} p={4}>
								<Heading>{article.title}</Heading>
								<Flex
									justify={"space-between"}
									alignItems={"center"}
									flexDir={{ base: "column", sm: "row" }}
								>
									<Stack direction={"row"} align={"center"} gap={2}>
										<Flex align={"center"} gap={2} color={"gray.500"}>
											<Icon as={FaRegCalendarAlt} fontSize={"xs"} />
											<Text fontSize={"xs"}>
												{new Date(article.createdAt).toDateString()}
											</Text>
										</Flex>
										<Flex align={"center"} gap={2} color={"gray.500"}>
											<Icon as={FaUserAlt} fontSize={"xs"} />
											<Text fontSize={"xs"}>{article.author.name}</Text>
										</Flex>
										<Flex align={"center"} gap={2} color={"gray.500"}>
											<Icon as={FaCommentAlt} fontSize={"xs"} />
											<Text fontSize={"xs"}>
												{article._count.comments} Comments
											</Text>
										</Flex>
									</Stack>
									<SocialShareButtons url={""} title={article.title} />
								</Flex>

								<Text textAlign={"justify"}>{article.body}</Text>
								<Divider variant={"solid"} />
								{/* CommentSection */}
								<FictionCommentSection articleId={article.id} />
							</Stack>
						</Stack>
					</Box>
					<Box display={{ base: "none", lg: "flex" }} w={"30%"}>
						{/* Sidebar */}
						<FictionSidebar />
					</Box>
				</Flex>
			</Box>
		</LayoutSecondary>
	);
};

export default FictionDetail;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const post = await prisma.fictionArticle.findUnique({
		where: { slug: params!.slug as string },
		include: {
			_count: {
				select: {
					comments: true,
				},
			},
			author: true,
			comments: true,
		},
	});

	return {
		props: {
			article: JSON.parse(JSON.stringify(post)),
		},
	};
};
