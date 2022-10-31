import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import HeaderShape from "../shape/HeaderShape";
import HeaderTop from "./HeaderTop";

const SecondaryHeaderContainer = () => {
	return (
		<Box bgGradient={"linear(to-b, brand, brand)"} w={"full"} position={"relative"}>
			{/* Header Top */}
			<HeaderTop />
			{/* PageTitle */}
			<Box
				h={"350px"}
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
				pt={"10"}
			>
				<Stack align={"center"}>
					<Heading color={"gray.50"}>Page Title</Heading>
					<Text>Subtitle</Text>
				</Stack>
			</Box>

			<HeaderShape />
		</Box>
	);
};

export default SecondaryHeaderContainer;
