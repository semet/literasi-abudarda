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
	Skeleton,
	Stack,
	Text,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
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
import FeaturedFiction from "./FeaturedFiction";
import FictionSlider from "./FictionSlider";
import FictionSliderSkeleton from "./FictionSliderSkeleton";
import { FictionArticleWithDetails } from "common";

const LatestFiction = () => {
	const { data, isLoading, isError } = useQuery<FictionArticleWithDetails[]>(
		["latestFictions"],
		async () => {
			const res = await fetch("/api/fiction/latest");
			const data = await res.json();
			return data;
		}
	);
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
				<SectionTitle color={"blue.700"}>artikel fiksi</SectionTitle>
				<Center maxW={"container.sm"} textAlign={"center"}>
					<SectionSubTitle color={"gray.100"}>
						Temukan cerita fiksi terbaru karya santri Abudada
					</SectionSubTitle>
				</Center>
			</Flex>
			{/* Featured Article */}
			<FeaturedFiction />
			{/* Article List */}
			<Box py={"14"}>
				{isLoading && <FictionSliderSkeleton />}
				{data !== undefined && <FictionSlider article={data} />}
			</Box>
		</Box>
	);
};

export default LatestFiction;
