import { Box, Stack } from "@chakra-ui/react";
import FavoriteFiction from "./widget/FavoriteFiction";
import FictionArchive from "./widget/FictionArchive";
import PopularAuthor from "./widget/PopularAuthor";

const FictionSidebar = () => {
	return (
		<Box>
			<Stack>
				{/* Favorite */}
				<FavoriteFiction />
				{/* Archive */}
				<FictionArchive />
				{/* Popular Author */}
				<PopularAuthor />
			</Stack>
		</Box>
	);
};

export default FictionSidebar;
