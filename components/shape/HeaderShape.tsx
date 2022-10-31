import React from "react";
import { Box } from "@chakra-ui/react";

const HeaderShape = () => {
	return (
		<Box
			position={"absolute"}
			left={0}
			bottom={0}
			w={"full"}
			overflow={"hidden"}
			lineHeight={0}
		>
			<svg
				data-name="Layer 1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1200 120"
				preserveAspectRatio="none"
				style={{
					position: "relative",
					display: "block",
					width: "calc(300% + 1.3px)",
					height: "70px",
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

export default HeaderShape;
