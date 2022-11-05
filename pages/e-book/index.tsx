import { Box, Button, Flex, Grid, GridItem, Skeleton, Text } from "@chakra-ui/react";
import { Book } from "@prisma/client";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import Head from "next/head";
import React, { Fragment } from "react";
import EbookCard from "../../components/ebook/EbookCard";
import LayoutSecondary from "../../components/LayoutSecondary";

const EbookPage: NextPage = () => {
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
		books: Book[];
	}>(
		["allBooks"],
		async ({ pageParam = "" }) => {
			await new Promise((res) => setTimeout(res, 1000));
			const res = await fetch("/api/e-book/all?cursor=" + pageParam);
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
		<LayoutSecondary title={"Free E-book"}>
			<Head>
				<title>E-book</title>
			</Head>
			<Box p={"4"}>
				<Flex gap={4}>
					<Box w={{ base: "full" }} experimental_spaceY={"4"}>
						<Grid gridTemplateColumns={"repeat(3, 1fr)"} gap={4}>
							{isLoading && (
								<Fragment>
									{Array(3)
										.fill(0)
										.map((_, i) => (
											<GridItem w={"full"} key={i}>
												<Skeleton h={"500px"} />
											</GridItem>
										))}
								</Fragment>
							)}
							{data &&
								data.pages.map((page, index) => (
									<Fragment key={index}>
										{page.books.map((book) => (
											<GridItem w={"full"} key={book.id}>
												<EbookCard />
											</GridItem>
										))}
									</Fragment>
								))}
						</Grid>
						<Box display={"flex"} justifyContent={"center"}>
							<Button
								size={"lg"}
								colorScheme={"orange"}
								rounded={"3xl"}
								disabled={!hasNextPage}
								isLoading={isFetchingNextPage}
								onClick={loadMore}
							>
								{hasNextPage ? "Load more" : "No more"}
							</Button>
						</Box>
					</Box>
					<Box display={{ base: "none", lg: "flex" }} w={"30%"} bg={"green"}>
						{/* Sidebar */}
					</Box>
				</Flex>
			</Box>
		</LayoutSecondary>
	);
};

export default EbookPage;
