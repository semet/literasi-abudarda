import { Box, List, ListIcon, ListItem, Stack } from "@chakra-ui/react";
import { FaCalendar, FaCheck } from "react-icons/fa";
import SidebarTitle from "../../shared/SidebarTitle";

const FictionArchive = () => {
	return (
		<Box bg={"#F4EEFF"} p={4} rounded={"lg"}>
			<Stack gap={4}>
				<SidebarTitle title={"Arsip"} />
				<List spacing={3}>
					<ListItem>
						<ListIcon as={FaCalendar} />
						January 2022
					</ListItem>
				</List>
			</Stack>
		</Box>
	);
};

export default FictionArchive;
