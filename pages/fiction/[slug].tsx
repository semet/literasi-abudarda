import {
	Box,
	Button,
	Divider,
	Flex,
	Heading,
	Icon,
	IconButton,
	Image,
	Skeleton,
	SkeletonText,
	Stack,
	Text,
} from "@chakra-ui/react";
import { Category } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import Head from "next/head";
import {
	FaCommentAlt,
	FaRegCalendarAlt,
	FaThumbsDown,
	FaThumbsUp,
	FaUserAlt,
} from "react-icons/fa";
import FictionCommentSection from "../../components/fiction/FictionCommentSection";
import FictionMainCard from "../../components/fiction/FictionMainCard";
import FictionSidebar from "../../components/fiction/FictionSidebar";
import LayoutSecondary from "../../components/LayoutSecondary";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { FictionArticleWithDetails } from "common";
import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	WhatsappShareButton,
} from "next-share";
import SocialShareButtons from "../../components/shared/SocialShareButtons";

//todo: Change file name to [id].tsx
const FictionDetail: NextPage = () => {
	const { query } = useRouter();
	const {
		data: article,
		isLoading,
		isError,
	} = useQuery<FictionArticleWithDetails>(
		["fictionArticleDetails", query.slug],
		async () => {
			const res = await fetch(`/api/fiction/${query.slug}`);
			const data = await res.json();

			return data;
		},
		{
			enabled: query.slug !== undefined,
		}
	);

	return (
		<LayoutSecondary title={"Karya Fiksi"}>
			<Head>
				<title>{article !== undefined ? article.title : "Artikel Fiksi"}</title>
			</Head>
			<Box p={"4"}>
				<Flex gap={12}>
					<Box w={{ base: "full" }}>
						{isLoading && (
							<Stack>
								<Skeleton h={"400px"} rounded={"lg"} />
								<SkeletonText h={"6"} rounded={"lg"} />
								<Skeleton h={"200px"} w={"60%"} rounded={"lg"} />
							</Stack>
						)}
						{article !== undefined && (
							<Stack
								rounded={"md"}
								overflow={"hidden"}
								gap={6}
								bg={"white"}
								boxShadow={"md"}
							>
								<Box maxH={"600px"} overflow={"hidden"} bg={"red"}>
									<Image
										src={article.image}
										alt={"Detail"}
										objectFit={"cover"}
										w={"full"}
									/>
								</Box>
								<Stack gap={4} p={4}>
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
									<FictionCommentSection articleId={article.id} />
								</Stack>
							</Stack>
						)}
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
