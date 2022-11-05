import { Box, Divider, Flex, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { Book } from "@prisma/client";
import React from "react";
import { FaDownload } from "react-icons/fa";
import ChakraNextLink from "../../shared/ChakraNextLink";

const PopularEbookCard: React.FC<{ book: Book }> = ({ book }) => {
	return (
		<ChakraNextLink
			href={`/e-book/${book.id}`}
			_hover={{
				textDecor: "none",
			}}
			role={"group"}
		>
			<Flex gap={2}>
				<Box maxW={"60px"}>
					<Image src={"/images/book/4.jpg"} alt={"Book"} />
				</Box>
				<Box flex={1}>
					<Stack>
						<Text
							fontSize={"lg"}
							fontWeight={"semibold"}
							color={"gray.600"}
							_groupHover={{
								color: "yellow.700",
							}}
						>
							{book.title}
						</Text>
						<Flex color={"gray.600"} gap={2} alignItems={"center"}>
							<Icon as={FaDownload} />
							<Text>20</Text>
						</Flex>
					</Stack>
				</Box>
			</Flex>
		</ChakraNextLink>
	);
};

export default PopularEbookCard;
