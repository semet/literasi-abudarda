import { Stack, Text, useBreakpointValue } from "@chakra-ui/react";

const FooterLogo = () => {
	const screen = useBreakpointValue({
		base: "base",
		md: "md",
	});
	return (
		<Stack color={"white"}>
			<Text fontSize={"5xl"} letterSpacing={"widest"}>
				{screen === "base" ? "L" : "LOGO"}
			</Text>
			<Text display={{ base: "none", md: "inline" }}>Logo description</Text>
		</Stack>
	);
};

export default FooterLogo;
