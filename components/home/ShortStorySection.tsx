import {
	Avatar,
	Box,
	Center,
	Flex,
	Grid,
	GridItem,
	Heading,
	Icon,
	IconButton,
	Stack,
	Text,
	WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { FaQuoteLeft, FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import FeaturedStoryShape from "../shape/FeaturedStoryShape";
import SectionSubTitle from "../shared/SectionSubTitle";
import SectionTitle from "../shared/SectionTitle";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "swiper/css/pagination";

const ShortStorySection = () => {
	return (
		<Box
			px={"4"}
			pt={"20"}
			position={"relative"}
			bgImage={"/images/shape/shape02.png"}
			bgSize={"cover"}
			bgRepeat={"no-repeat"}
		>
			{/* Shape */}
			<Flex flexDirection={"column"} alignItems={"center"} gap={6}>
				<SectionTitle color={"brand"}>cerpen</SectionTitle>
				<Center maxW={"container.sm"} textAlign={"center"}>
					<SectionSubTitle color={"cyan.700"}>
						Cerita pendek inspiratif dan bisa juga mengocok perut anda.
					</SectionSubTitle>
				</Center>
			</Flex>
			{/* Featured Story */}
			<FeaturedStory />
			{/* Item Grid */}
			<Box py={"14"}>
				<StorySlider />
			</Box>
		</Box>
	);
};

export default ShortStorySection;

const FeaturedStory = () => {
	return (
		<Box px={{ base: "4", lg: "20" }} mt={"10"}>
			<Flex
				gap={2}
				direction={{ base: "column", md: "row" }}
				alignItems={{ base: "center", md: "start" }}
			>
				<WrapItem>
					<Avatar
						name="Siswa"
						src="/images/team/04.jpg"
						size={"xl"}
						boxShadow={"lg"}
					/>
				</WrapItem>
				<Box
					rounded={"xl"}
					p={6}
					bg={"antiquewhite"}
					maxW={"700px"}
					shadow={"md"}
					position={"relative"}
					_before={{
						content: "''",
						position: "absolute",
						w: "100%",
						h: "100%",
						top: "-4",
						right: "-4",
						bg: "gray.100",
						zIndex: "-1",
						rounded: "xl",
						filter: "blur(2px)",
					}}
				>
					<Icon
						as={FaQuoteLeft}
						position={"absolute"}
						top={"-5"}
						left={-2}
						fontSize={"4xl"}
						color={"gray.200"}
					/>
					<Stack gap={4}>
						<Heading
							as={"h5"}
							fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
							letterSpacing={"wider"}
							color={"gray.600"}
							fontFamily={"sans-serif"}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing.
						</Heading>
						<Text
							textAlign={"justify"}
							fontFamily={"cursive"}
							color={"gray.600"}
							fontSize={{
								base: "sm",
								sm: "md",
							}}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
							sit facilis doloribus et quia aliquam sed vero id earum ipsum.
							Consequuntur, perferendis! Eum consectetur id veniam est dicta,
							pariatur quasi? Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Odio libero amet earum numquam incidunt voluptatum minus alias
							eligendi pariatur eos. Ullam dolor recusandae rerum, alias quidem
							dicta! Quod, in est! Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Ipsa officia ea animi nulla quis eveniet libero
							corrupti, esse saepe odit? Id reiciendis nam, eaque qui nihil magni
							mollitia earum modi!
						</Text>
						<Stack direction={"row"} justify={"end"} gap={2}>
							<Flex gap={1} align={"center"}>
								<Text color={"gray.600"} fontSize={"sm"}>
									20
								</Text>
								<IconButton
									aria-label="like button"
									icon={<FaThumbsUp />}
									colorScheme={"green"}
									size={"sm"}
									rounded={"full"}
									shadow={"md"}
								/>
							</Flex>
							<Flex gap={1} align={"center"}>
								<Text color={"gray.600"} fontSize={"sm"}>
									0
								</Text>
								<IconButton
									aria-label="dislike button"
									icon={<FaThumbsDown />}
									colorScheme={"red"}
									size={"sm"}
									rounded={"full"}
									shadow={"md"}
								/>
							</Flex>
						</Stack>
					</Stack>
				</Box>
			</Flex>
		</Box>
	);
};

const StorySlider = () => {
	return (
		<Swiper
			modules={[Navigation, Pagination]}
			autoplay={{
				delay: 500,
			}}
			navigation={{
				enabled: true,
				prevEl: "#storyPrevElement",
				nextEl: "#storyNextElement",
			}}
			pagination={{
				enabled: true,
				type: "bullets",
				dynamicBullets: true,
			}}
			spaceBetween={20}
			slidesPerView={2}
			breakpoints={{
				200: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
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
						<StoryCard />
					</SwiperSlide>
				))}
			<IconButton
				aria-label="prev arrow"
				icon={<FiArrowLeft />}
				colorScheme={"yellow"}
				rounded={"full"}
				position={"absolute"}
				zIndex={"6"}
				top={"45%"}
				left={0}
				id={"storyPrevElement"}
			/>
			<IconButton
				aria-label="next arrow"
				icon={<FiArrowRight />}
				colorScheme={"yellow"}
				rounded={"full"}
				position={"absolute"}
				zIndex={"6"}
				top={"45%"}
				right={0}
				id={"storyNextElement"}
			/>
		</Swiper>
	);
};

const StoryCard = () => {
	return (
		<Flex
			gap={2}
			mt={4}
			mb={6}
			direction={{
				base: "column",
				lg: "row",
			}}
			alignItems={{ base: "center", lg: "start" }}
		>
			<WrapItem>
				<Avatar name="Siswa" src="/images/team/04.jpg" size={"xl"} boxShadow={"lg"} />
			</WrapItem>
			<Box
				rounded={"xl"}
				p={6}
				bg={"antiquewhite"}
				maxW={"700px"}
				shadow={"md"}
				position={"relative"}
			>
				<Icon
					as={FaQuoteLeft}
					position={"absolute"}
					top={"-5"}
					left={-2}
					fontSize={"4xl"}
					color={"gray.200"}
				/>
				<Stack>
					<Heading
						as={"h5"}
						fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
						letterSpacing={"wider"}
						color={"gray.600"}
						fontFamily={"sans-serif"}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing.
					</Heading>
					<Text
						textAlign={"justify"}
						fontFamily={"cursive"}
						color={"gray.600"}
						fontSize={{
							base: "sm",
							sm: "md",
						}}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
						sit facilis doloribus et quia aliquam sed vero id earum ipsum.
						Consequuntur, perferendis! Eum consectetur id veniam est dicta, pariatur
						quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
						libero amet earum numquam incidunt voluptatum minus alias eligendi
						pariatur eos. Ullam dolor recusandae rerum, alias quidem dicta! Quod, in
						est! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
						officia ea animi nulla quis eveniet libero corrupti, esse saepe odit? Id
						reiciendis nam, eaque qui nihil magni mollitia earum modi!
					</Text>
					<Stack direction={"row"} justify={"end"} gap={2}>
						<Flex gap={1} align={"center"}>
							<Text color={"gray.600"} fontSize={"sm"}>
								20
							</Text>
							<IconButton
								aria-label="like button"
								icon={<FaThumbsUp />}
								colorScheme={"green"}
								size={"sm"}
								rounded={"full"}
								shadow={"md"}
							/>
						</Flex>
						<Flex gap={1} align={"center"}>
							<Text color={"gray.600"} fontSize={"sm"}>
								0
							</Text>
							<IconButton
								aria-label="dislike button"
								icon={<FaThumbsDown />}
								colorScheme={"red"}
								size={"sm"}
								rounded={"full"}
								shadow={"md"}
							/>
						</Flex>
					</Stack>
				</Stack>
			</Box>
		</Flex>
	);
};
