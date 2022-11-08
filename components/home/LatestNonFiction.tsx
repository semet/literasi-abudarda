import { Box, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import SectionSubTitle from "../shared/SectionSubTitle";
import SectionTitle from "../shared/SectionTitle";
import FeaturedNonFiction from "./FeaturedNonFiction";
import NonFictionCard from "./NonFictionCard";
import NonFictionSlider from "./NonFictionSlider";
import { NonFictionArticleWithDetails } from "common";
import NonFictionSliderSkeleton from "./NonFictionSliderSkeleton";

const LatestNonFiction = () => {
	const {
		data: latestNonfictions,
		isLoading,
		isError,
	} = useQuery<NonFictionArticleWithDetails[]>(["latestNonfictions"], async () => {
		const res = await fetch("/api/nonfiction/latest");
		const data = await res.json();
		return data;
	});
	return (
		<Box
			px={"4"}
			py={"6"}
			bgImage={"/images/shape/5570862.png"}
			bgSize={"cover"}
			bgRepeat={"no-repeat"}
			bgPosition={"right"}
		>
			<Flex direction={{ base: "column", lg: "row" }}>
				<Flex flexDirection={"column"} gap={6} w={{ base: "full", lg: "30%" }}>
					<SectionTitle color={"brand"}>Karya non-fiksi</SectionTitle>
					<Heading
						as={"h5"}
						fontSize={{ base: "lg", sm: "3xl", md: "4xl", lg: "3xl" }}
						fontWeight={"semibold"}
						position={"relative"}
						display={"inline-block"}
						w={"fit-content"}
						color={"pink.400"}
					>
						Karya non-fiksi dan karya ilmiah terbaru
					</Heading>
				</Flex>
				<Box w={{ base: "full", lg: "70%" }}>
					<FeaturedNonFiction />
				</Box>
			</Flex>
			<Box w={"full"} pt={"6"}>
				{isLoading && <NonFictionSliderSkeleton />}
				{latestNonfictions !== undefined && (
					<NonFictionSlider articles={latestNonfictions} />
				)}
			</Box>
		</Box>
	);
};

export default LatestNonFiction;
