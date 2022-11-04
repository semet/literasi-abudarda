import {
	Box,
	Button,
	Flex,
	Grid,
	GridItem,
	Icon,
	Input,
	Select,
	Skeleton,
} from "@chakra-ui/react";
import Head from "next/head";
import React, { Fragment } from "react";
import LayoutSecondary from "../../components/LayoutSecondary";
import { FaLayerGroup } from "react-icons/fa";
import MainCard from "../../components/non-fiction/MainCard";
import { useInfiniteQuery } from "@tanstack/react-query";
import { NonFictionArticleWithDetails } from "common";

const NonFiction = () => {
	const {
		isLoading,
		isError,
		data,
		error,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
	} = useInfiniteQuery<{
		nextId: string;
		posts: NonFictionArticleWithDetails[];
	}>(
		["allNonFictionArticles"],
		async ({ pageParam = "" }) => {
			await new Promise((res) => setTimeout(res, 1000));
			const res = await fetch("/api/nonfiction/all?cursor=" + pageParam);
			const data = await res.json();

			return data;
		},
		{
			getNextPageParam: (lastPage: any) => lastPage.nextId ?? false,
		}
	);
	//
	const loadMore = () => {
		if (hasNextPage) {
			fetchNextPage();
		}
	};
	return (
		<LayoutSecondary title={"Karya Non Fiksi"}>
			<Head>
				<title>Karangan Non-fiksi</title>
			</Head>
			<Box p={"4"} experimental_spaceY={"4"}>
				{/* Filter Property */}
				<Flex gap={4} w={"container.sm"} alignItems={"center"}>
					<Box flex={1}>
						<Select
							placeholder={"Category"}
							rounded={"base"}
							variant={"outline"}
							_focus={{
								ring: "none",
							}}
						>
							<option value="option1">Option 1</option>
							<option value="option2">Option 2</option>
							<option value="option3">Option 3</option>
						</Select>
					</Box>
					<Box flex={1}>
						<Select
							placeholder={"Filter By"}
							rounded={"base"}
							variant={"outline"}
							_focus={{
								ring: "none",
							}}
						>
							<option value="option1">Option 1</option>
							<option value="option2">Option 2</option>
							<option value="option3">Option 3</option>
						</Select>
					</Box>
					<Box flex={1}>
						<Select
							placeholder={"Archive"}
							rounded={"base"}
							variant={"outline"}
							_focus={{
								ring: "none",
							}}
						>
							<option value="option1">Option 1</option>
							<option value="option2">Option 2</option>
							<option value="option3">Option 3</option>
						</Select>
					</Box>
					<Icon as={FaLayerGroup} fontSize={"2xl"} color={"messenger.400"} />
				</Flex>
				{/* Main Content */}
				<Grid templateColumns={"repeat(2, 1fr)"} gap={6}>
					{isLoading && (
						<Fragment>
							{Array(2)
								.fill(0)
								.map((_, i) => (
									<GridItem key={i}>
										<Skeleton h={"400px"} rounded={"lg"} />
									</GridItem>
								))}
						</Fragment>
					)}

					{data &&
						data.pages.map((page, index) => (
							<Fragment key={index}>
								{page.posts.map((post) => (
									<MainCard article={post} key={post.id} />
								))}
							</Fragment>
						))}
				</Grid>
				<Box display={"flex"} justifyContent={"center"}>
					<Button
						size={"lg"}
						colorScheme={"pink"}
						rounded={"3xl"}
						disabled={!hasNextPage}
						isLoading={isFetchingNextPage}
						onClick={loadMore}
					>
						Load more
					</Button>
				</Box>
			</Box>
		</LayoutSecondary>
	);
};

export default NonFiction;
