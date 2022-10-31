/* eslint-disable react/no-unescaped-entities */
import { Box, Flex, Icon, IconButton, Image, Stack, Text } from "@chakra-ui/react";
import {
	FaCalendarAlt,
	FaComment,
	FaFacebookF,
	FaPinterest,
	FaTwitter,
	FaUser,
	FaWhatsapp,
} from "react-icons/fa";

const FictionCard: React.FC<{ image: number }> = ({ image }) => {
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
			<Box h={"300px"} overflow={"hidden"} position={"relative"}>
				<Image
					src={`/images/blog/travel/0${image}.jpg`}
					alt={"Article 2"}
					roundedTop={"md"}
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
			<Box p={"4"}>
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
						Lorem ipsum dolor sit amet ctetur adipisicing elit.
					</Text>
					<Stack direction={"row"} align={"center"} gap={2}>
						<Flex align={"center"} gap={2} color={"teal.700"}>
							<Icon as={FaCalendarAlt} fontSize={"xs"} />
							<Text fontSize={"xs"}>{new Date().toDateString()}</Text>
						</Flex>
						<Flex align={"center"} gap={2} color={"gray.600"}>
							<Icon as={FaUser} fontSize={"xs"} />
							<Text fontSize={"xs"}>Rifki</Text>
						</Flex>
						<Flex align={"center"} gap={2} color={"gray.600"}>
							<Icon as={FaComment} fontSize={"xs"} />
							<Text fontSize={"xs"}>10 Comments</Text>
						</Flex>
					</Stack>
				</Stack>
			</Box>
		</Box>
	);
};

export default FictionCard;
