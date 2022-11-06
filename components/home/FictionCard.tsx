/* eslint-disable react/no-unescaped-entities */
import { Box, Flex, Icon, IconButton, Image, Stack, Text } from "@chakra-ui/react";
import { FictionArticleWithDetails } from "common";
import {
	FaCalendarAlt,
	FaComment,
	FaFacebookF,
	FaPinterest,
	FaTwitter,
	FaUser,
	FaWhatsapp,
} from "react-icons/fa";
import ChakraNextLink from "../shared/ChakraNextLink";

const FictionCard: React.FC<{ article: FictionArticleWithDetails }> = ({ article }) => {
	return (
		<Stack
			my={"4"}
			w={"100%"}
			bg={"white"}
			rounded={"lg"}
			shadow={"md"}
			maxH={"450px"}
			role={"group"}
			overflow={"hidden"}
		>
			<Box overflow={"hidden"} position={"relative"} bg={"red"}>
				<Image
					src={article.image}
					alt={"Article 2"}
					roundedTop={"md"}
					objectFit={"contain"}
					w={"100%"}
					_groupHover={{
						transform: "scale(1.1)",
					}}
					transition={"all .25s ease"}
				/>
				<Flex
					bottom={-10}
					left={0}
					position={"absolute"}
					justifyContent={"center"}
					gap={"4"}
					w={"full"}
					_groupHover={{
						bottom: "2",
					}}
					transition={"all .5s ease-in-out"}
				>
					<IconButton
						aria-label="share"
						icon={<FaFacebookF />}
						size={"sm"}
						rounded={"full"}
						colorScheme={"facebook"}
					/>
					<IconButton
						aria-label="share"
						icon={<FaTwitter />}
						size={"sm"}
						rounded={"full"}
						colorScheme={"twitter"}
					/>
					<IconButton
						aria-label="share"
						icon={<FaPinterest />}
						size={"sm"}
						rounded={"full"}
						colorScheme={"red"}
					/>
					<IconButton
						aria-label="share"
						icon={<FaWhatsapp />}
						size={"sm"}
						rounded={"full"}
						colorScheme={"whatsapp"}
					/>
				</Flex>
			</Box>
			<Box p={"4"} flex={1}>
				<Stack gap={4}>
					<Text
						fontSize={{
							base: "lg",
							md: "xl",
						}}
						fontWeight={"bold"}
						color={"gray.600"}
						letterSpacing={"wide"}
						lineHeight={"tall"}
					>
						<ChakraNextLink
							href={`/fiction/${article.slug}`}
							_hover={{
								textDecor: "none",
								color: "#FC5185",
							}}
						>
							{article.title}
						</ChakraNextLink>
					</Text>
					<Stack direction={"row"} align={"center"} gap={2}>
						<Flex align={"center"} gap={2} color={"teal.700"}>
							<Icon as={FaCalendarAlt} fontSize={"xs"} />
							<Text fontSize={"xs"}>
								{new Date(article.createdAt).toDateString()}
							</Text>
						</Flex>
						<Flex align={"center"} gap={2} color={"gray.600"}>
							<Icon as={FaUser} fontSize={"xs"} />
							<Text fontSize={"xs"}>{article.author.name}</Text>
						</Flex>
						<Flex
							align={"center"}
							gap={2}
							color={"gray.600"}
							display={{ base: "flex", lg: "none" }}
						>
							<Icon as={FaComment} fontSize={"xs"} />
							<Text fontSize={"xs"}>{article._count.comments} Comments</Text>
						</Flex>
					</Stack>
				</Stack>
			</Box>
		</Stack>
	);
};

export default FictionCard;
