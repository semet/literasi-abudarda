import React, { useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import AppLogo from "./AppLogo";
import DesktopMenu from "./DesktopMenu";
import RightMenu from "./RightMenu";
import useScroll from "../../hooks/useScroll";
const HeaderTop = () => {
	const { isScrolled } = useScroll();
	return (
		<Flex
			justify={"space-between"}
			alignItems={"center"}
			px={{ base: "4", lg: "20" }}
			py={"6"}
			bg={isScrolled ? "white" : "transparent"}
			shadow={isScrolled ? "md" : "none"}
			position={"fixed"}
			w={"full"}
			h={isScrolled ? "100px" : "120px"}
			transition={"all .35s ease"}
			top={"0"}
			zIndex={"5"}
		>
			{/* logo */}
			<AppLogo />
			{/* menu */}
			<DesktopMenu />
			{/* Right Menu */}
			<RightMenu />
		</Flex>
	);
};

export default HeaderTop;
