/* eslint-disable react/no-unescaped-entities */
import {
	Box,
	Center,
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
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ArticleShape from "../shape/ArticleShape";
import SectionSubTitle from "../shared/SectionSubTitle";
import SectionTitle from "../shared/SectionTitle";

const LatestArticle = () => {
	return (
		<Box
			px={"4"}
			pt={"20"}
			pb={"4"}
			position={"relative"}
			_before={{
				content: "''",
				position: "absolute",
				width: "100%",
				height: "100%",
				top: "0",
				left: "0",
				bgGradient: "linear(to-b, cyan.400, blue.50)",
				zIndex: "-1",
			}}
		>
			{/* Shape */}
			<ArticleShape />
			<Flex flexDirection={"column"} alignItems={"center"} gap={6}>
				<SectionTitle color={"blue.700"}>artikel</SectionTitle>
				<Center maxW={"container.sm"} textAlign={"center"}>
					<SectionSubTitle color={"gray.100"}>
						Temukan artikel terbaru karya santri Abudada
					</SectionSubTitle>
				</Center>
			</Flex>
			{/* Featured Article */}
			<FeaturedArticle />
			{/* Article List */}
			<Box py={"14"}>
				<ArticleSlider />
			</Box>
		</Box>
	);
};

export default LatestArticle;

const FeaturedArticle = () => {
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

const ArticleSlider = () => {
	return (
		<Swiper
			modules={[Navigation]}
			autoplay={{
				delay: 500,
			}}
			navigation={{
				enabled: true,
				prevEl: "#prevElement",
				nextEl: "#nextElement",
			}}
			spaceBetween={20}
			slidesPerView={4}
			breakpoints={{
				200: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				1280: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			}}
			style={{
				width: "100%",
			}}
		>
			{Array(8)
				.fill(0)
				.map((_, i) => (
					<SwiperSlide key={i}>
						<ArticleCard image={i + 1} />
					</SwiperSlide>
				))}
			<IconButton
				aria-label="prev arrow"
				icon={<FiArrowLeft />}
				colorScheme={"messenger"}
				rounded={"full"}
				position={"absolute"}
				zIndex={"6"}
				top={"45%"}
				left={0}
				id={"prevElement"}
			/>
			<IconButton
				aria-label="next arrow"
				icon={<FiArrowRight />}
				colorScheme={"messenger"}
				rounded={"full"}
				position={"absolute"}
				zIndex={"6"}
				top={"45%"}
				right={0}
				id={"nextElement"}
			/>
		</Swiper>
	);
};

const ArticleCard: React.FC<{ image: number }> = ({ image }) => {
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
