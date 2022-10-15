import React from "react";
import { Box, Heading, useBreakpointValue } from "@chakra-ui/react";

const AppLogo = () => {
	const logo = useBreakpointValue({
		base: "Base",
		sm: "Small",
		md: "Medium",
		lg: "Large",
		xl: "X-Large",
		"2xl": "2-XL",
	});
	return (
		<Box>
			<Heading as={"h1"}>{logo}</Heading>
		</Box>
	);
};

export default AppLogo;
