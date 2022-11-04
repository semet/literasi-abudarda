import {
	Box,
	Flex,
	Heading,
	Icon,
	IconButton,
	Image,
	Stack,
	StackDivider,
	Text,
} from "@chakra-ui/react";
import { FictionArticleWithDetails } from "common";
import React from "react";
import ChakraNextLink from "../shared/ChakraNextLink";
import {
	FaCommentAlt,
	FaFacebookF,
	FaPinterest,
	FaRegCalendarAlt,
	FaTwitter,
	FaUserAlt,
	FaWhatsapp,
} from "react-icons/fa";

const FictionMainCard: React.FC<{ article: FictionArticleWithDetails }> = ({
	article,
}) => {
	return (
		<Box w={"full"} role={"group"} mb={6}>
			<Flex
				shadow={"lg"}
				direction={{ base: "column", md: "row" }}
				rounded={"lg"}
				overflow={"hidden"}
			>
				<Box w={{ base: "full", md: "40%" }} overflow={"hidden"}>
					<Image
						src={article.image}
						alt={"Fictional Story"}
						w={"100%"}
						h={"100%"}
						objectFit={"cover"}
						_groupHover={{
							transform: "scale(1.1)",
						}}
						transition={"all .5s ease"}
					/>
				</Box>
				<Box flex={1} bg={"#F5F5F5"} p={"4"}>
					<Stack gap={4}>
						{/* Post Title */}
						<ChakraNextLink
							color={"#364F6B"}
							_hover={{
								textDecor: "none",
								color: "#FC5185",
							}}
							href={`/fiction/${article.id}`}
						>
							<Heading as={"h3"} fontSize={{ base: "2xl", sm: "3xl" }}>
								{article.title}
							</Heading>
						</ChakraNextLink>

						{/* Meta */}
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
								<Text fontSize={"xs"}>{article._count.comments} Comments</Text>
							</Flex>
						</Stack>
						{/* Summary */}
						<Text
							color={"#3C4048"}
							lineHeight={"tall"}
							textAlign={"justify"}
							noOfLines={7}
						>
							{article.body}
						</Text>
						{/* Read more and buttons */}
						<Flex justify={"space-between"}>
							<ChakraNextLink
								color={"#FC5185"}
								_hover={{
									textDecor: "none",
									color: "#364F6B",
								}}
								href={`/fiction/${article.id}`}
							>
								Read more ...
							</ChakraNextLink>
							<Stack direction={"row"}>
								<IconButton
									aria-label="share"
									icon={<FaFacebookF />}
									size={"sm"}
									rounded={"full"}
									colorScheme={"facebook"}
									shadow={"lg"}
								/>
								<IconButton
									aria-label="share"
									icon={<FaTwitter />}
									size={"sm"}
									rounded={"full"}
									colorScheme={"twitter"}
									shadow={"lg"}
								/>
								<IconButton
									aria-label="share"
									icon={<FaPinterest />}
									size={"sm"}
									rounded={"full"}
									colorScheme={"red"}
									shadow={"lg"}
								/>
								<IconButton
									aria-label="share"
									icon={<FaWhatsapp />}
									size={"sm"}
									rounded={"full"}
									colorScheme={"whatsapp"}
									shadow={"lg"}
								/>
							</Stack>
						</Flex>
					</Stack>
				</Box>
			</Flex>
		</Box>
	);
};

export default FictionMainCard;
