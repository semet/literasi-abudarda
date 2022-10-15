import { Box } from "@chakra-ui/react";
import React from "react";
import HeroShape from "../shape/HeroShape";
import HeroSlider from "../slider/HeroSlider";
import HeaderTop from "./HeaderTop";

const HeaderContainer = () => {
	return (
		<Box bgGradient={"linear(to-b, brand, brand)"} w={"full"} position={"relative"}>
			{/* Header Top */}
			<HeaderTop />
			{/* Hero Slider */}
			<HeroSlider />
			<HeroShape />
		</Box>
	);
};

export default HeaderContainer;
