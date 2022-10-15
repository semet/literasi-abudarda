import { BackgroundProps, Box, Heading } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const SectionTitle: React.FC<{
	children: ReactNode;
	color?: string;
}> = ({ children, color = "blue.500" }) => {
	return (
		<Heading
			as={"h4"}
			fontSize={{ base: "md", lg: "lg" }}
			position={"relative"}
			textTransform={"uppercase"}
			color={color}
			display={"inline-block"}
			w={"fit-content"}
			_before={{
				content: "''",
				width: "100%",
				height: "40%",
				bg: "blackAlpha.300",
				position: "absolute",
				top: "3",
				left: "0",
				rounded: "sm",
			}}
		>
			{children}
		</Heading>
	);
};

export default SectionTitle;
