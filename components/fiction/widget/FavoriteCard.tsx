import { Box, Flex, Heading, Icon, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaCommentAlt, FaRegCalendarAlt, FaUserAlt } from "react-icons/fa";

const FavoriteCard = () => {
	return (
		<Box>
			<Flex>
				<Box w={"20%"} overflow={"hidden"} roundedLeft={"base"}>
					<Image
						src={"/images/blog/travel/01.jpg"}
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
						>
							In exercitationem reprehenderit autem?
						</Heading>
						<Stack direction={"row"} align={"start"} gap={4}>
							<Flex align={"center"} gap={2} color={"gray.500"}>
								<Icon as={FaCommentAlt} fontSize={"xs"} />
								<Text fontSize={"xs"}>10</Text>
							</Flex>
							<Flex align={"center"} gap={2} color={"gray.500"}>
								<Icon as={FaUserAlt} fontSize={"xs"} />
								<Text fontSize={"xs"}>Rifki</Text>
							</Flex>
						</Stack>
					</Stack>
				</Box>
			</Flex>
		</Box>
	);
};

export default FavoriteCard;
