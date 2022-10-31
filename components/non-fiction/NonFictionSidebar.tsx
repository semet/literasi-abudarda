import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import FavoriteNonFiction from "./widget/FavoriteNonFiction";
import NonFictionArchive from "./widget/NonFictionArchive";
import PopularAuthor from "./widget/PopularAuthor";

const NonFictionSidebar = () => {
	return (
		<Box>
			<Stack>
				{/* Favorite */}
				<FavoriteNonFiction />
				{/* Archive */}
				<NonFictionArchive />
				{/* Popular Author */}
				<PopularAuthor />
			</Stack>
		</Box>
	);
};

export default NonFictionSidebar;
