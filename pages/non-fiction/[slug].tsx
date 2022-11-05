import { Box, Divider, Flex, Heading, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { NonFictionArticleWithDetails } from "common";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { FaCommentAlt, FaRegCalendarAlt, FaUserAlt } from "react-icons/fa";
import LayoutSecondary from "../../components/LayoutSecondary";
import NonFictionCommentSection from "../../components/non-fiction/NonFictionCommentSection";
import NonFictionSidebar from "../../components/non-fiction/NonFictionSidebar";
import SocialShareButtons from "../../components/shared/SocialShareButtons";
import { prisma } from "../../prisma/db";

const NonFictionDetail: NextPage<{ article: NonFictionArticleWithDetails }> = ({
	article,
}) => {
	return (
		<LayoutSecondary title={"Karya Fiksi"}>
			<Head>
				<title>{article.title}</title>
				<meta property="og:title" content={article.title} />
				<meta
					property="og:url"
					content={`${process.env.BASE_URL}/non-fiction/${article.slug}`}
				/>
				<meta property="og:image" content={article.image} />
			</Head>
			<Box p={"4"}>
				<Flex gap={12}>
					<Box w={{ base: "full" }}>
						{article !== undefined && (
							<Stack rounded={"md"} overflow={"hidden"} gap={6}>
								<Box maxH={"600px"} overflow={"hidden"} bg={"red"}>
									<Image
										src={article.image}
										alt={"Detail"}
										objectFit={"cover"}
										w={"full"}
									/>
								</Box>
								<Stack gap={4}>
									<Heading>{article.title}</Heading>
									<Flex justify={"space-between"} alignItems={"center"}>
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
									<NonFictionCommentSection articleId={article.id} />
								</Stack>
							</Stack>
						)}
					</Box>
					<Box display={{ base: "none", lg: "flex" }} w={"30%"}>
						{/* Sidebar */}
						<NonFictionSidebar />
					</Box>
				</Flex>
			</Box>
		</LayoutSecondary>
	);
};

export default NonFictionDetail;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const post = await prisma.nonFictionArticle.findUnique({
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
