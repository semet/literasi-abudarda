import {
	AspectRatio,
	Box,
	Flex,
	Grid,
	GridItem,
	IconButton,
	Image,
	Text,
} from "@chakra-ui/react";
import { Fragment } from "react";
import SectionSubTitle from "../shared/SectionSubTitle";
import SectionTitle from "../shared/SectionTitle";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Video } from "@prisma/client";

import { useQuery } from "@tanstack/react-query";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const LatestVideo = () => {
	const {
		data: latestVideos,
		isLoading,
		isError,
	} = useQuery<Video[]>(["latestVideos"], async () => {
		const res = await fetch("/api/video/latest");
		const data = await res.json();

		return data;
	});
	return (
		<Box
			px={"4"}
			py={"6"}
			bgGradient={"linear(to-b, brand, white)"}
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
				{!isLoading ? (
					<Fragment>
						{latestVideos && (
							<Fragment>
								<Grid
									templateColumns="repeat(8, 1fr)"
									templateRows="repeat(2, 1fr)"
									gap={6}
								>
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
											<iframe
												src={latestVideos[0].url}
												title="PROFIL PONDOK PESANTREN ABUDAR DA' LOMBOK TENGAH (Kpi Ummat TV)"
												allowFullScreen
												style={{
													borderRadius: 5,
												}}
											/>
											{/* <Image
												src={latestVideos[0].url}
												alt={"Image"}
												objectFit={"cover"}
											/> */}
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
										<AspectRatio
											ratio={{ base: 3 / 1.5, lg: 3 / 1.53, xl: 3 / 1.56 }}
										>
											<iframe
												src={latestVideos[1].url}
												title="Egy Maulana -Suara Merdu Membaca Qur'an"
												allowFullScreen
												style={{
													borderRadius: 5,
												}}
											/>
											{/* <Image
												src={latestVideos[1].url}
												alt={"Image"}
												objectFit={"cover"}
											/> */}
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
										<AspectRatio
											ratio={{ base: 3 / 1.5, lg: 3 / 1.53, xl: 3 / 1.56 }}
										>
											<iframe
												title="naruto"
												src={latestVideos[2].url}
												allowFullScreen
												style={{
													borderRadius: 5,
												}}
											/>
											{/* <Image
												src={latestVideos[2].url}
												alt={"Image"}
												objectFit={"cover"}
											/> */}
										</AspectRatio>
									</GridItem>
								</Grid>
								{/* Slider */}
								<VideoSlider videos={latestVideos} />
							</Fragment>
						)}
					</Fragment>
				) : (
					<Text> Loading ...</Text>
				)}
			</Box>
		</Box>
	);
};

export default LatestVideo;

const VideoSlider: React.FC<{ videos: Video[] }> = ({ videos }) => {
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
			{videos.slice(3).map((video, i) => (
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
							<iframe
								title="naruto"
								src={video.url}
								allowFullScreen
								style={{
									borderRadius: 5,
								}}
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
