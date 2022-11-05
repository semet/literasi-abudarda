import { Box, Flex, Heading, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { NonFictionArticleWithDetails } from "common";
import React from "react";
import { FaCommentAlt, FaUserAlt } from "react-icons/fa";
import ChakraNextLink from "../../shared/ChakraNextLink";

const FavoriteCard: React.FC<{ article: NonFictionArticleWithDetails }> = ({
	article,
}) => {
	return (
		<ChakraNextLink
			href={`/non-fiction/${article.slug}`}
			_hover={{
				textDecor: "none",
			}}
			role={"group"}
		>
			<Flex>
				<Box w={"20%"} overflow={"hidden"} roundedLeft={"base"}>
					<Image
						src={article.image}
						alt={"Fictional Story"}
						w={"100%"}
						h={"100%"}
						objectFit={"cover"}
					/>
				</Box>
				<Box flex={1} bg={"white"} p={2} rounded={"base"}>
					<Stack>
						<Heading
							as={"h5"}
							fontSize={{ lg: "sm", xl: "lg" }}
							color={"#364F6B"}
							fontWeight={"semibold"}
							_groupHover={{
								color: "#FC5185",
							}}
						>
							{article.title}
						</Heading>
						<Stack direction={"row"} align={"start"} gap={4}>
							<Flex align={"center"} gap={2} color={"gray.500"}>
								<Icon as={FaCommentAlt} fontSize={"xs"} />
								<Text fontSize={"xs"}>{article._count.comments}</Text>
							</Flex>
							<Flex align={"center"} gap={2} color={"gray.500"}>
								<Icon as={FaUserAlt} fontSize={"xs"} />
								<Text fontSize={"xs"}>Rifki</Text>
							</Flex>
						</Stack>
					</Stack>
				</Box>
			</Flex>
		</ChakraNextLink>
	);
};

export default FavoriteCard;
