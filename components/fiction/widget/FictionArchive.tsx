import { Box, List, ListIcon, ListItem, Stack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { Fragment } from "react";
import { FaCalendar } from "react-icons/fa";
import SidebarTitle from "../../shared/SidebarTitle";

const FictionArchive = () => {
	const { data } = useQuery<
		{
			createdAt: string;
			_count: {
				_all: number;
			};
		}[]
	>(["fictionArchive"], async () => {
		const res = await fetch("/api/fiction/archive");
		const data = await res.json();
		return data;
	});

	return (
		<Box bg={"#F4EEFF"} p={4} rounded={"lg"}>
			<Stack gap={4}>
				<SidebarTitle title={"Arsip"} />
				<List spacing={3}>
					{data && (
						<Fragment>
							{data.map((article) => (
								<ListItem key={article.createdAt}>
									<ListIcon as={FaCalendar} />
									{new Date(article.createdAt).toISOString()}{" "}
									{article._count._all}
								</ListItem>
							))}
						</Fragment>
					)}
				</List>
			</Stack>
		</Box>
	);
};

export default FictionArchive;
