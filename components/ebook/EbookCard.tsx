import { Box, Icon, IconButton, Image } from "@chakra-ui/react";
import React from "react";
import { FaDownload, FaEye } from "react-icons/fa";

const EbookCard = () => {
	return (
		<Box
			w={"full"}
			position={"relative"}
			overflow={"hidden"}
			role={"group"}
			shadow={"md"}
		>
			<Image src={"/images/book/1.jpg"} alt={"some book"} objectFit={"cover"} />
			<Box
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
				position={"absolute"}
				bottom={"-600px"}
				w={"full"}
				h={"full"}
				bg={"blackAlpha.700"}
				gap={6}
				_groupHover={{
					bottom: 0,
				}}
				transition={"all .5s ease"}
			>
				<IconButton
					aria-label={"View"}
					icon={<FaEye />}
					rounded={"full"}
					colorScheme={"pink"}
					shadow={"lg"}
				/>
				<IconButton
					aria-label={"View"}
					icon={<FaDownload />}
					rounded={"full"}
					colorScheme={"messenger"}
					shadow={"lg"}
				/>
			</Box>
		</Box>
	);
};

export default EbookCard;
