import { Heading } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const SectionSubTitle: React.FC<{
	children: ReactNode;
	color?: string;
}> = ({ children, color = "gray.50" }) => {
	return (
		<Heading
			as={"h5"}
			fontSize={{ base: "lg", sm: "xl", md: "3xl", lg: "4xl" }}
			fontWeight={"semibold"}
			position={"relative"}
			color={color}
			display={"inline-block"}
			w={"fit-content"}
		>
			{children}
		</Heading>
	);
};

export default SectionSubTitle;
