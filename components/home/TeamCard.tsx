import { Box, Flex, IconButton, Image, Skeleton, Stack, Text } from "@chakra-ui/react";
import { Team } from "@prisma/client";
import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const TeamCard: React.FC<{ team: Team }> = ({ team }) => {
	const { email, id, image, name, phone, position } = team;
	return (
		<Box
			display={"flex"}
			flexDir={"column"}
			my={"4"}
			w={"100%"}
			bg={"white"}
			rounded={"lg"}
			shadow={"md"}
			role={"group"}
			overflow={"hidden"}
		>
			<Box h={"300px"} overflow={"hidden"} position={"relative"}>
				<Image
					src={image!}
					alt={"Article 2"}
					roundedTop={"md"}
					objectFit={"cover"}
					w={"100%"}
					fallback={<Skeleton w={"full"} h={"400px"} />}
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
						icon={<FaYoutube />}
						size={"sm"}
						rounded={"full"}
						colorScheme={"red"}
					/>
				</Flex>
			</Box>
			<Stack gap={2} p={4} align={"center"}>
				<Text
					fontSize={{
						base: "2xl",
						sm: "3xl",
						lg: "2xl",
					}}
					fontWeight={"bold"}
					color={"gray.600"}
					letterSpacing={"wide"}
					lineHeight={"tall"}
				>
					{name}
				</Text>
				<Text
					fontSize={{
						base: "sm",
						sm: "md",
					}}
					color={"gray.500"}
				>
					{position}
				</Text>
			</Stack>
		</Box>
	);
};

export default TeamCard;
