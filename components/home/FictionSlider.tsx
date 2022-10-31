/* eslint-disable react/no-unescaped-entities */
import { IconButton } from "@chakra-ui/react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import FictionCard from "./FictionCard";
const FictionSlider = () => {
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
						<FictionCard image={i + 1} />
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

export default FictionSlider;
