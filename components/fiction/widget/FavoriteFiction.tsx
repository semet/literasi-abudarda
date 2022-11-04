import { Box, Skeleton, Stack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { FictionArticleWithDetails } from "common";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import SidebarTitle from "../../shared/SidebarTitle";
import FavoriteCard from "./FavoriteCard";

const FavoriteFiction = () => {
	const { query } = useRouter();
	//skip current opened article
	const { data, isLoading, isError } = useQuery<FictionArticleWithDetails[]>(
		["favoriteFiction", query.id],
		async () => {
			const res = await fetch(`/api/fiction/favorite?skippedId=${query.id}`);
			const data = await res.json();
			return data;
		},
		{
			enabled: query.id !== undefined,
		}
	);
	return (
		<Box bg={"#F4EEFF"} p={4} rounded={"lg"}>
			<Stack gap={4}>
				<SidebarTitle title={"Favorite"} />
				{/* List FavoriteCard */}
				{isLoading && (
					<Stack>
						{Array(4)
							.fill(0)
							.map((_, i) => (
								<Skeleton h={"16"} rounded={"md"} key={i} />
							))}
					</Stack>
				)}
				{data && (
					<Fragment>
						{data.map((article) => (
							<FavoriteCard article={article} key={article.id} />
						))}
					</Fragment>
				)}
			</Stack>
		</Box>
	);
};

export default FavoriteFiction;
