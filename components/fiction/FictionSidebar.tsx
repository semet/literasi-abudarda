import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import FavoriteFiction from "./widget/FavoriteFiction";

const FictionSidebar = () => {
	return (
		<Box>
			<Stack>
				{/* Favorite */}
				<FavoriteFiction />
				{/* Archive */}
				{/* Popular Author */}
			</Stack>
		</Box>
	);
};

export default FictionSidebar;
