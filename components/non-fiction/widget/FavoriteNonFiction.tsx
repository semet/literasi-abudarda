import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import SidebarTitle from "../../shared/SidebarTitle";
import FavoriteCard from "./FavoriteCard";

const FavoriteNonFiction = () => {
	return (
		<Box bg={"#F4EEFF"} p={4} rounded={"lg"}>
			<Stack gap={4}>
				<SidebarTitle title={"Favorite"} />
				{/* List FavoriteCard */}
				{Array(4)
					.fill(0)
					.map((_, i) => (
						<FavoriteCard key={i} />
					))}
			</Stack>
		</Box>
	);
};

export default FavoriteNonFiction;
