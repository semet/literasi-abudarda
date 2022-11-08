import { Box, Center, Flex, IconButton, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionSubTitle from "../shared/SectionSubTitle";
import SectionTitle from "../shared/SectionTitle";
import { Fragment } from "react";
import { Team } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import TeamSlider from "./TeamSlider";
import TeamSliderSkeleton from "./TeamSliderSkeleton";

const TeamSection = () => {
	const {
		data: allTeams,
		isLoading,
		isError,
	} = useQuery<Team[]>(["allTeams"], async () => {
		const res = await fetch("/api/team/all");
		const data = await res.json();

		return data;
	});
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
				{isLoading && <TeamSliderSkeleton />}
				{allTeams !== undefined && <TeamSlider teams={allTeams} />}
			</Box>
		</Box>
	);
};

export default TeamSection;
