import React, { useRef } from "react";
import {
	AspectRatio,
	Box,
	Flex,
	Grid,
	GridItem,
	IconButton,
	Image,
} from "@chakra-ui/react";
import SectionTitle from "../shared/SectionTitle";
import SectionSubTitle from "../shared/SectionSubTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import { FiArrowLeft, FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const LatestVideo = () => {
	return (
		<Box
			px={"4"}
			py={"6"}
			bg={"brand"}
			// bgImage={"/images/shape/v748-toon-61.png"}
			// bgSize={"cover"}
			// bgRepeat={"no-repeat"}
			// bgPosition={"right"}
		>
			<Flex flexDirection={"column"} gap={6}>
				<SectionTitle color={"red.600"}>Video Terakhir</SectionTitle>
				<SectionSubTitle color={"gray.700"}>
					Ikuti channl YouTube Abudarda untuk video selengkapnya
				</SectionSubTitle>
			</Flex>
			<Box w={"full"} pt={"6"}>
				<Grid templateColumns="repeat(8, 1fr)" templateRows="repeat(2, 1fr)" gap={6}>
					<GridItem
						w="100%"
						p={2}
						bg="gray.50"
						rounded={"lg"}
						shadow={"md"}
						colSpan={{ base: 8, md: 5 }}
						rowSpan={2}
					>
						<AspectRatio ratio={{ base: 3 / 1.5, md: 4 / 2.6 }}>
							{/* <iframe
								src="https://www.youtube.com/embed/6HDc2mOSDbQ"
								title="PROFIL PONDOK PESANTREN ABUDAR DA' LOMBOK TENGAH (Kpi Ummat TV)"
								allowFullScreen
								style={{
									borderRadius: 5,
								}}
							/> */}
							<Image
								src={"/images/team/01.jpg"}
								alt={"Image"}
								objectFit={"cover"}
							/>
						</AspectRatio>
					</GridItem>
					<GridItem
						w="100%"
						p={2}
						bg="gray.50"
						rounded={"lg"}
						shadow={"md"}
						colSpan={{ base: 8, md: 3 }}
					>
						<AspectRatio ratio={{ base: 3 / 1.5, lg: 3 / 1.53, xl: 3 / 1.56 }}>
							{/* <iframe
								src="https://www.youtube.com/embed/19v0RKay4F8"
								title="Egy Maulana -Suara Merdu Membaca Qur'an"
								allowFullScreen
								style={{
									borderRadius: 5,
								}}
							/> */}
							<Image
								src={"/images/team/01.jpg"}
								alt={"Image"}
								objectFit={"cover"}
							/>
						</AspectRatio>
					</GridItem>
					<GridItem
						w="100%"
						p={2}
						bg="gray.50"
						rounded={"lg"}
						shadow={"md"}
						colSpan={{ base: 8, md: 3 }}
					>
						<AspectRatio ratio={{ base: 3 / 1.5, lg: 3 / 1.53, xl: 3 / 1.56 }}>
							{/* <iframe
								title="naruto"
								src="https://www.youtube.com/embed/QhBnZ6NPOY0"
								allowFullScreen
								style={{
									borderRadius: 5,
								}}
							/> */}
							<Image
								src={"/images/team/01.jpg"}
								alt={"Image"}
								objectFit={"cover"}
							/>
						</AspectRatio>
					</GridItem>
				</Grid>
				{/* Slider */}
				<VideoSlider />
			</Box>
		</Box>
	);
};

export default LatestVideo;

const VideoSlider = () => {
	return (
		<Swiper
			modules={[Navigation]}
			spaceBetween={30}
			slidesPerView={4}
			navigation={{
				enabled: true,
				prevEl: ".prevElement",
				nextEl: ".nextElement",
			}}
			breakpoints={{
				200: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			}}
			style={{
				width: "100%",
				position: "relative",
			}}
		>
			{Array(8)
				.fill(0)
				.map((_, i) => (
					<SwiperSlide key={i}>
						<Box
							mt={"4"}
							p={2}
							w={"100%"}
							bg={"gray.50"}
							rounded={"md"}
							shadow={"md"}
							minW={"100px"}
						>
							<AspectRatio ratio={2 / 1}>
								<Image
									src={"/images/team/01.jpg"}
									alt={"Image"}
									objectFit={"cover"}
									rounded={"md"}
								/>
							</AspectRatio>
						</Box>
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
				className={"prevElement"}
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
				className={"nextElement"}
			/>
		</Swiper>
	);
};

const SecondaryGrid = () => {
	return (
		<Grid templateColumns="repeat(8, 1fr)" templateRows="repeat(2, 1fr)" gap={6}>
			<GridItem
				w="100%"
				p={2}
				bg="gray.50"
				rounded={"lg"}
				shadow={"md"}
				colSpan={{ base: 8, md: 2 }}
			>
				<AspectRatio ratio={2 / 1}>
					<iframe
						title="naruto"
						src="https://www.youtube.com/embed/QhBnZ6NPOY0"
						allowFullScreen
						style={{
							borderRadius: 5,
						}}
					/>
				</AspectRatio>
			</GridItem>
			<GridItem
				w="100%"
				p={2}
				bg="gray.50"
				rounded={"lg"}
				shadow={"md"}
				colSpan={{ base: 8, md: 2 }}
			>
				<AspectRatio ratio={2 / 1}>
					<iframe
						title="naruto"
						src="https://www.youtube.com/embed/QhBnZ6NPOY0"
						allowFullScreen
						style={{
							borderRadius: 5,
						}}
					/>
				</AspectRatio>
			</GridItem>
			<GridItem
				w="100%"
				p={2}
				bg="gray.50"
				rounded={"lg"}
				shadow={"md"}
				colSpan={{ base: 8, md: 2 }}
			>
				<AspectRatio ratio={2 / 1}>
					<iframe
						title="naruto"
						src="https://www.youtube.com/embed/QhBnZ6NPOY0"
						allowFullScreen
						style={{
							borderRadius: 5,
						}}
					/>
				</AspectRatio>
			</GridItem>
			<GridItem
				w="100%"
				p={2}
				bg="gray.50"
				rounded={"lg"}
				shadow={"md"}
				colSpan={{ base: 8, md: 2 }}
			>
				<AspectRatio ratio={2 / 1}>
					<iframe
						title="naruto"
						src="https://www.youtube.com/embed/QhBnZ6NPOY0"
						allowFullScreen
						style={{
							borderRadius: 5,
						}}
					/>
				</AspectRatio>
			</GridItem>
		</Grid>
	);
};
