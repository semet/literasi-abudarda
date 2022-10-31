import { Avatar, Box, Flex, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import SidebarTitle from "../../shared/SidebarTitle";

const PopularAuthor = () => {
	return (
		<Box bg={"#F4EEFF"} p={4} rounded={"lg"}>
			<Stack gap={4}>
				<SidebarTitle title={"Author Favorit"} />
				<Stack>
					<Link
						href={"#"}
						_hover={{
							textDecor: "none",
							color: "pink.500",
						}}
					>
						<Flex alignItems={"center"} gap={4}>
							<Avatar src={"/images/team/01.jpg"} name={"Some Name"} />
							<Text fontWeight={"semibold"}>Author Name (20 Posts)</Text>
						</Flex>
					</Link>
				</Stack>
			</Stack>
		</Box>
	);
};

export default PopularAuthor;
