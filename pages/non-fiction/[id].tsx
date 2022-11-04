import {
	Box,
	Divider,
	Flex,
	Heading,
	Icon,
	IconButton,
	Image,
	Skeleton,
	Stack,
	Text,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { NonFictionArticleWithDetails } from "common";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";
import {
	FaCommentAlt,
	FaRegCalendarAlt,
	FaThumbsDown,
	FaThumbsUp,
	FaUserAlt,
} from "react-icons/fa";
import LayoutSecondary from "../../components/LayoutSecondary";
import NonFictionCommentSection from "../../components/non-fiction/NonFictionCommentSection";
import NonFictionSidebar from "../../components/non-fiction/NonFictionSidebar";

const NonFictionDetail: NextPage = () => {
	const { query } = useRouter();
	//
	const {
		data: article,
		isLoading,
		isError,
	} = useQuery<NonFictionArticleWithDetails>(
		["nonFictionArticleDetails"],
		async () => {
			const res = await fetch(`/api/nonfiction/${query.id}`);
			const data = await res.json();

			return data;
		},
		{
			enabled: query.id !== undefined,
		}
	);
	return (
		<LayoutSecondary title={"Karya Fiksi"}>
			<Head>
				<title>Karya Fiksi</title>
			</Head>
			<Box p={"4"}>
				<Flex gap={12}>
					<Box w={{ base: "full" }}>
						{isLoading && (
							<Stack>
								<Skeleton h={"400px"} rounded={"lg"} />
								{Array(3)
									.fill(0)
									.map((_, i) => (
										<Skeleton h={"6"} rounded={"lg"} key={i} />
									))}

								<Skeleton h={"200px"} w={"60%"} rounded={"lg"} />
							</Stack>
						)}
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
