/* eslint-disable react/no-unescaped-entities */
import {
	Box,
	Flex,
	Heading,
	Icon,
	IconButton,
	Image,
	Link,
	Stack,
	Text,
} from "@chakra-ui/react";
import React from "react";
import {
	FaCalendarAlt,
	FaComment,
	FaFacebookF,
	FaPinterest,
	FaTwitter,
	FaUser,
	FaWhatsapp,
} from "react-icons/fa";

const FeaturedNonFiction = () => {
	return (
		<Box mt={{ base: "5", lg: "-10" }}>
			<Flex
				direction={{ base: "column-reverse", md: "row" }}
				rounded={"md"}
				shadow={"lg"}
				bg={"#76c0e9"}
				position={"relative"}
				role={"group"}
				overflow={"hidden"}
				_before={{
					content: "''",
					width: "100%",
					height: "100%",
					bg: "gray.400",
					position: "absolute",
					top: -4,
					left: -4,
					zIndex: "-1",
					rounded: "lg",
					filter: "blur(2px)",
				}}
			>
				<Box w={{ base: "full", md: "60%" }} p={"4"}>
					<Stack gap={4}>
						<Heading as={"h3"} fontSize={"3xl"} color={"pink.400"}>
							Lorem ipsum dolor, sit amet.
						</Heading>
						<Stack
							direction={"row"}
							align={"center"}
							gap={{ base: 2, sm: 4 }}
							fontSize={{
								base: "xx-small",
								sm: "sm",
							}}
						>
							<Flex align={"center"} gap={2} color={"teal.700"}>
								<Icon as={FaCalendarAlt} />
								{new Date().toDateString()}
							</Flex>
							<Flex align={"center"} gap={2} color={"gray.600"}>
								<Icon as={FaUser} />
								<Text>Rifki</Text>
							</Flex>
							<Flex align={"center"} gap={2} color={"gray.600"}>
								<Icon as={FaComment} />
								<Text>10 Comments</Text>
							</Flex>
						</Stack>
						<Text
							textAlign={"justify"}
							noOfLines={9}
							color={"gray.50"}
							fontSize={"md"}
						>
							On International Peace Day, the United Nations asks for a 24-hour
							ceasefire of all hostilities around the world. It also asks people to
							observe one minute of silence at noon to honour victims of war and
							violence. The day begins with the Peace Bell Ceremony at the United
							Nations headquarters. The Peace Bell was donated by the United
							Nations Association of Japan in June 1954 and is made of metal that
							includes coins contributed by people from 65 member countries. The
							bell is a symbol of hope for peace and is rung several times a year,
							including on International Peace Day. After the bell has been rung,
							the UN Secretary-General delivers a message. The International Day of
							Peace is for 'commemorating and strengthening the ideals of peace
							within and among all nations and peoples'. Put simply, it aims to
							build a more peaceful world for everyone who lives in it. Peace
							affects almost every aspect of our lives. Each year, the United
							Nations chooses a different theme for this special day, for example
							'End racism: build peace' or 'Climate action for peace'. This helps
							us to see that true peace can only be achieved when all people are
							treated equally, or that we must combat the climate emergency, which
							threatens all of our lives.
						</Text>
						<Link
							href={"#"}
							_hover={{ textDecoration: "none", color: "pink.300" }}
							color={"pink.500"}
							fontWeight={"semibold"}
						>
							Read more ...
						</Link>
					</Stack>
				</Box>
				<Box
					w={{ base: "full", md: "40%" }}
					overflow={"hidden"}
					position={"relative"}
				>
					<Image
						src={"/images/blog/travel/02.jpg"}
						alt={"Travel"}
						h={{ base: "auto", md: "100%" }}
						w={{ base: "100%", md: "auto" }}
						objectFit={"cover"}
						roundedRight={{ base: "0", md: "lg" }}
						_groupHover={{
							transform: "scale(1.1)",
						}}
						transition={"all .25s ease"}
					/>
					<Stack
						position={"absolute"}
						left={"-20"}
						top={"50%"}
						transform={"translateY(-50%)"}
						bg={"blackAlpha.700"}
						p={"2"}
						rounded={"md"}
						_groupHover={{
							left: "1",
						}}
						transition={"all .5s ease"}
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
					</Stack>
				</Box>
			</Flex>
		</Box>
	);
};

export default FeaturedNonFiction;
