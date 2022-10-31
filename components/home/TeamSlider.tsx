import { IconButton } from "@chakra-ui/react";
import { Team } from "@prisma/client";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import TeamCard from "./TeamCard";

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
			{teams.map((team) => (
				<SwiperSlide key={team.id}>{<TeamCard team={team} />}</SwiperSlide>
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

export default TeamSlider;
