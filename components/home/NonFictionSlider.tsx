/* eslint-disable react/no-unescaped-entities */
import { IconButton } from "@chakra-ui/react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import NonFictionCard from "./NonFictionCard";
import { NonFictionArticleWithDetails } from "common";

const NonFictionSlider: React.FC<{ articles: NonFictionArticleWithDetails[] }> = ({
	articles,
}) => {
	return (
		<Swiper
			modules={[Navigation]}
			autoplay={{
				delay: 500,
			}}
			navigation={{
				enabled: true,
				prevEl: "#nonFictionPrevElement",
				nextEl: "#nonFictionNextElement",
			}}
			spaceBetween={20}
			slidesPerView={3}
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
					slidesPerView: 3,
					spaceBetween: 30,
				},
			}}
			style={{
				width: "100%",
			}}
		>
			{articles.map((article) => (
				<SwiperSlide key={article.id}>
					<NonFictionCard article={article} />
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
				id={"nonFictionPrevElement"}
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
				id={"nonFictionNextElement"}
			/>
		</Swiper>
	);
};

export default NonFictionSlider;
