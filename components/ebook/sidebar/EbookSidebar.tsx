import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import EbookArchive from "./EbookArchive";
import PopularEbook from "./PopularEbook";

const EbookSidebar = () => {
	return (
		<Stack w={"full"}>
			{/* Popular E-book */}
			<PopularEbook />
			{/* E-book archive */}
			<EbookArchive />
		</Stack>
	);
};

export default EbookSidebar;
