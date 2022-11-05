import { Box, List, ListIcon, ListItem, Skeleton, Stack } from "@chakra-ui/react";
import { Book } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import React, { Fragment } from "react";
import { FaCalendar } from "react-icons/fa";
import SidebarTitle from "../../shared/SidebarTitle";

const EbookArchive = () => {
	const { data, isLoading, isError } = useQuery<
		{
			createdAt: string;
			_count: {
				_all: number;
			};
		}[]
	>(["bookArchive"], async () => {
		const res = await fetch("/api/e-book/archive");
		const data = await res.json();
		return data;
	});
	return (
		<Box bg={"#F4EEFF"} p={4} rounded={"lg"}>
			<Stack gap={4}>
				<SidebarTitle title={"Archive"} />
				{/* List */}
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
							{data.map((book) => (
								<ListItem key={book.createdAt}>
									<ListIcon as={FaCalendar} />
									{new Date(book.createdAt).toISOString()} {book._count._all}
								</ListItem>
							))}
						</Fragment>
					)}
				</List>
			</Stack>
		</Box>
	);
};

export default EbookArchive;
