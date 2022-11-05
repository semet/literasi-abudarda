import { Box, Divider, Flex, Image, Skeleton, Stack, Text } from "@chakra-ui/react";
import { Book } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useEffect, Fragment } from "react";
import SidebarTitle from "../../shared/SidebarTitle";
import PopularEbookCard from "./PopularEbookCard";

const PopularEbook = () => {
	const { query } = useRouter();
	const { data, isLoading, isError } = useQuery<Book[]>(["favoriteEbook"], async () => {
		const res = await fetch(`/api/e-book/favorite?skippedId=${query.id}`);
		const data = await res.json();
		return data;
	});
	useEffect(() => {
		console.log(data);
	}, [data]);
	return (
		<Box bg={"#F4EEFF"} p={4} rounded={"lg"}>
			<Stack gap={4}>
				<SidebarTitle title={"Favorite"} />
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
				<Stack gap={4}>
					{data && (
						<Fragment>
							{data.map((book) => (
								<PopularEbookCard book={book} key={book.id} />
							))}
						</Fragment>
					)}
				</Stack>
			</Stack>
		</Box>
	);
};

export default PopularEbook;
