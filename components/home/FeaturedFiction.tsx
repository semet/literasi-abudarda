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
import {
	FaCalendarAlt,
	FaComment,
	FaFacebookF,
	FaPinterest,
	FaTwitter,
	FaUser,
	FaWhatsapp,
} from "react-icons/fa";

const FeaturedFiction = () => {
	return (
		<Box px={{ base: "4", lg: "20" }} mt={"10"}>
			<Flex
				justify={"start"}
				flexDirection={{
					base: "column",
					lg: "row",
				}}
				gap={"10"}
			>
				{/* Image */}
				<Box
					w={{ base: "full", lg: "40%" }}
					position={"relative"}
					_before={{
						content: "''",
						width: "100%",
						height: "100%",
						bg: "teal",
						position: "absolute",
						top: 0,
						right: -3,
						zIndex: "-1",
						transform: "rotate(5deg)",
						bgImage: "/images/blog/travel/02.jpg",
						filter: "blur(2px)",
						rounded: "lg",
					}}
					role={"group"}
				>
					<Image
						src={"/images/blog/travel/02.jpg"}
						alt={"Travel"}
						objectFit={"cover"}
						w={"full"}
						rounded={"base"}
						boxShadow={"dark-lg"}
						transform={"rotate(-4deg)"}
						transition={"all .35s ease-in-out"}
						_hover={{
							transform: "rotate(5deg)",
						}}
					/>
				</Box>
				<Box
					w={{ base: "full", lg: "60%" }}
					bg={"cyan.600"}
					rounded={"lg"}
					shadow={"lg"}
					px={"6"}
					py={"4"}
					color={"gray.50"}
				>
					{/* article content */}
					<Stack gap={6}>
						<Heading
							as={"h2"}
							fontSize={{
								base: "lg",
								sm: "xl",
								md: "3xl",
							}}
						>
							The International Day of Peace at the United Nations
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
						<Text textAlign={"justify"} noOfLines={9}>
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
						<Flex justify={"space-between"}>
							<Link
								href={"#"}
								_hover={{ textDecoration: "none", color: "pink.300" }}
								color={"pink.500"}
								fontWeight={"semibold"}
							>
								Read more ...
							</Link>
							<Stack
								direction={"row"}
								experimental_spaceX={{
									base: "-6px",
									sm: "4",
								}}
							>
								<IconButton
									aria-label="share Facebook"
									icon={<FaFacebookF />}
									colorScheme={"facebook"}
									rounded={"full"}
									shadow={"md"}
								/>
								<IconButton
									aria-label="share Twitter"
									icon={<FaTwitter />}
									colorScheme={"twitter"}
									rounded={"full"}
									shadow={"md"}
								/>
								<IconButton
									aria-label="share Pinterest"
									icon={<FaPinterest />}
									colorScheme={"red"}
									rounded={"full"}
									shadow={"md"}
								/>
								<IconButton
									aria-label="share Whatsapp"
									icon={<FaWhatsapp />}
									colorScheme={"whatsapp"}
									rounded={"full"}
									shadow={"md"}
								/>
							</Stack>
						</Flex>
					</Stack>
				</Box>
			</Flex>
		</Box>
	);
};

export default FeaturedFiction;
