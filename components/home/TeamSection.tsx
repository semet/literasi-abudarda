import { Box, Center, Flex, IconButton, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionSubTitle from "../shared/SectionSubTitle";
import SectionTitle from "../shared/SectionTitle";
import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { Team } from "@prisma/client";

const teamsQuery = gql`
	query Teams {
		teams {
			id
			name
			email
			phone
			position
			image
		}
	}
`;

const TeamSection = () => {
	const { data, loading, error } = useQuery(teamsQuery);

	if (error) return <p>Oh no... {error.message}</p>;
	return (
		<Box px={"4"} pt={"20"} position={"relative"}>
			{/* Shape */}
			<Flex flexDirection={"column"} alignItems={"center"} gap={6}>
				<SectionTitle color={"brand"}>Team</SectionTitle>
				<Center maxW={"container.sm"} textAlign={"center"}>
					<SectionSubTitle color={"cyan.700"}>
						Siapa lagi kalo bukan orang-orang Awesome ini yang memulai
					</SectionSubTitle>
				</Center>
			</Flex>
			{/* Slider */}
			<Box my={4}>
				{!loading ? <TeamSlider teams={data.teams} /> : <Text>Loading</Text>}
			</Box>
		</Box>
	);
};

export default TeamSection;

const TeamSlider: React.FC<{ teams: Team[] }> = ({ teams }) => {
	return (
		<Swiper
			modules={[Navigation, Pagination, Autoplay]}
			autoplay={{
				delay: 2000,
				pauseOnMouseEnter: true,
			}}
			navigation={{
				enabled: true,
				prevEl: "#teamPrevElement",
				nextEl: "#teamNextElement",
			}}
			pagination={{
				enabled: true,
				type: "bullets",
				dynamicBullets: true,
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
					spaceBetween: 20,
				},
				1280: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
			}}
			style={{
				width: "100%",
			}}
		>
			{teams.map((team, i) => (
				<SwiperSlide key={i}>
					<TeamCard team={team} />
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
				id={"teamPrevElement"}
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
				id={"teamNextElement"}
			/>
		</Swiper>
	);
};

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
