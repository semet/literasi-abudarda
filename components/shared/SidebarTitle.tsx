import { Heading } from "@chakra-ui/react";
import React from "react";

const SidebarTitle: React.FC<{ title: string }> = ({ title }) => {
	return (
		<Heading
			fontSize={"2xl"}
			color={"gray.600"}
			position={"relative"}
			display={"inline-block"}
			_after={{
				content: "''",
				position: "absolute",
				w: "30%",
				h: "20%",
				bg: "blue.200",
				bottom: -2,
				left: 0,
				rounded: "full",
			}}
		>
			{title}
		</Heading>
	);
};

export default SidebarTitle;
