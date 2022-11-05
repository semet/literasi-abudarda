import {
	Box,
	Flex,
	GridItem,
	Heading,
	Icon,
	IconButton,
	Image,
	Link,
	Stack,
	Text,
} from "@chakra-ui/react";
import { NonFictionArticleWithDetails } from "common";
import React from "react";
import {
	FaCommentAlt,
	FaFacebookF,
	FaPinterest,
	FaRegCalendarAlt,
	FaTwitter,
	FaUserAlt,
	FaWhatsapp,
} from "react-icons/fa";
import ChakraNextLink from "../shared/ChakraNextLink";
import SocialShareButtons from "../shared/SocialShareButtons";

const MainCard: React.FC<{ article: NonFictionArticleWithDetails }> = ({ article }) => {
	return (
		<GridItem w={"full"}>
			<Stack bg={"gray.100"} rounded={"lg"} overflow={"hidden"}>
				<Box maxH={"350px"} overflow={"hidden"}>
					<Image
						src={"/images/blog/travel/04.jpg"}
						alt={"non-fiction Story"}
						w={"100%"}
						objectFit={"cover"}
					/>
				</Box>
				<Box maxH={"400px"} p={4}>
					<Stack gap={4}>
						{/* Post Title */}
						<ChakraNextLink
							href={`/non-fiction/${article.slug}`}
							color={"#364F6B"}
							_hover={{
								textDecor: "none",
								color: "#FC5185",
							}}
						>
							<Heading as={"h3"} fontSize={{ base: "2xl", sm: "3xl" }}>
								{article.title}
							</Heading>
						</ChakraNextLink>
						{/* Meta */}
						<Stack direction={"row"} align={"center"} gap={4}>
							<Flex align={"center"} gap={2} color={"gray.500"}>
								<Icon as={FaRegCalendarAlt} fontSize={"sm"} />
								<Text fontSize={"sm"}>
									{new Date(article.createdAt).toDateString()}
								</Text>
							</Flex>
							<Flex align={"center"} gap={2} color={"gray.500"}>
								<Icon as={FaUserAlt} fontSize={"sm"} />
								<Text fontSize={"sm"}>{article.author.name}</Text>
							</Flex>
							<Flex align={"center"} gap={2} color={"gray.500"}>
								<Icon as={FaCommentAlt} fontSize={"sm"} />
								<Text fontSize={"sm"}>{article._count.comments} Comments</Text>
							</Flex>
						</Stack>
						{/* Summary */}
						<Text
							color={"#3C4048"}
							lineHeight={"tall"}
							textAlign={"justify"}
							noOfLines={6}
						>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius non
							dicta perferendis fugiat nisi. Voluptatum corporis aliquid facere
							officia repellat, amet odio reprehenderit enim vero culpa odit
							temporibus ex magnam. Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Saepe ipsum pariatur aliquam exercitationem
							veritatis dolore cumque sit quidem dignissimos dolorum assumenda
							similique nemo quasi aut, optio magnam odio ab animi. Lorem ipsum
							dolor sit amet consectetur adipisicing elit. Est recusandae quod odio
							voluptate praesentium! Molestias dignissimos nesciunt delectus
							dolore, quam recusandae totam, perspiciatis molestiae quos nam iure
							animi consectetur aliquam. Lorem ipsum dolor sit amet consectetur,
							adipisicing elit. Iure possimus officiis illum dicta rerum harum
							magnam facere adipisci magni ea quis provident, soluta, ipsam
							architecto ut tenetur exercitationem fugiat doloribus!
						</Text>
						{/* Read more and buttons */}
						<Flex justify={"space-between"}>
							<ChakraNextLink
								href={`/non-fiction/${article.slug}`}
								color={"#FC5185"}
								_hover={{
									textDecor: "none",
									color: "#364F6B",
								}}
							>
								Read more ...
							</ChakraNextLink>
							<SocialShareButtons url={""} title={article.title} />
						</Flex>
					</Stack>
				</Box>
			</Stack>
		</GridItem>
	);
};

export default MainCard;
