import { Box, List, ListIcon, ListItem, Skeleton, Stack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { FaCalendar, FaCheck } from "react-icons/fa";
import SidebarTitle from "../../shared/SidebarTitle";
import { Fragment } from "react";
const NonFictionArchive = () => {
	const { data, isLoading, isError } = useQuery<
		{
			createdAt: string;
			_count: {
				_all: number;
			};
		}[]
	>(["fictionArchive"], async () => {
		const res = await fetch("/api/nonfiction/archive");
		const data = await res.json();
		return data;
	});
	return (
		<Box bg={"#F4EEFF"} p={4} rounded={"lg"}>
			<Stack gap={4}>
				<SidebarTitle title={"Arsip"} />
				{isLoading && (
					<Stack>
						{Array(4)
							.fill(0)
							.map((_, i) => (
								<Skeleton h={"16"} rounded={"md"} key={i} />
							))}
					</Stack>
				)}
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

export default NonFictionArchive;
