import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import SidebarTitle from "../../shared/SidebarTitle";

const EbookArchive = () => {
	return (
		<Box bg={"#F4EEFF"} p={4} rounded={"lg"}>
			<Stack gap={4}>
				<SidebarTitle title={"Archive"} />
				{/* List */}
			</Stack>
		</Box>
	);
};

export default EbookArchive;
