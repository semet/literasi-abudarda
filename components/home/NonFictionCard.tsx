import {
	Box,
	Flex,
	Icon,
	IconButton,
	Image,
	Skeleton,
	Stack,
	Text,
} from "@chakra-ui/react";
import React from "react";
import { NonFictionArticleWithDetails } from "common";
import {
	FaCalendarAlt,
	FaComment,
	FaFacebookF,
	FaPinterest,
	FaTwitter,
	FaUser,
	FaWhatsapp,
} from "react-icons/fa";

const NonFictionCard: React.FC<{ article: NonFictionArticleWithDetails }> = ({
	article,
}) => {
	return (
		<Box
			display={"flex"}
			flexDir={"column"}
			my={"4"}
			w={"100%"}
			bg={"white"}
			rounded={"lg"}
			shadow={"md"}
			minW={"100px"}
			role={"group"}
			overflow={"hidden"}
		>
			<Box h={"400px"} overflow={"hidden"} position={"relative"}>
				<Image
					src={article.image}
					fallback={<Skeleton w={"full"} h={"400px"} />}
					alt={"non fiction"}
					w={"100%"}
					objectFit={"cover"}
				/>
				<Flex
					bottom={-10}
					left={"50%"}
					transform={"translateX(-50%)"}
					position={"absolute"}
					justifyContent={"center"}
					gap={"4"}
					w={"fit-content"}
					_groupHover={{
						bottom: "1",
					}}
					transition={"all .5s ease-in-out"}
					bg={"blackAlpha.700"}
					rounded={"md"}
					p={"1"}
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
			<Box p={"4"}>
				<Stack gap={4}>
					<Text
						fontSize={{
							base: "lg",
							md: "2xl",
						}}
						fontWeight={"bold"}
						color={"gray.600"}
						letterSpacing={"wide"}
						lineHeight={"tall"}
					>
						{article.title}
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
						<Flex align={"center"} gap={2} color={"gray.600"}>
							<Icon as={FaComment} fontSize={"xs"} />
							<Text fontSize={"xs"}>{article._count.comments} Comments</Text>
						</Flex>
					</Stack>
				</Stack>
			</Box>
		</Box>
	);
};

export default NonFictionCard;
