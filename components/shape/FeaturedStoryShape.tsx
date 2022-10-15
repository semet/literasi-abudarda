import { Box } from "@chakra-ui/react";
import React from "react";

const FeaturedStoryShape = () => {
	return (
		<Box
			position={"absolute"}
			left={0}
			top={0}
			w={"full"}
			overflow={"hidden"}
			lineHeight={0}
			transform={"rotate(180deg)"}
			zIndex={"1"}
		>
			<svg
				data-name="Layer 1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1200 120"
				preserveAspectRatio="none"
				style={{
					position: "relative",
					display: "block",
					width: "calc(243% + 1.3px)",
					height: "500px",
					transform: "rotateY(180deg)",
				}}
			>
				<path
					d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z"
					style={{
						fill: "#FFFFFF",
					}}
				></path>
			</svg>
		</Box>
	);
};

export default FeaturedStoryShape;
