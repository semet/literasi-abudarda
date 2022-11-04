import { Box, Button, Flex, Skeleton } from "@chakra-ui/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { FictionArticleWithDetails } from "common";
import { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import FictionMainCard from "../../components/fiction/FictionMainCard";
import FictionSidebar from "../../components/fiction/FictionSidebar";
import LayoutSecondary from "../../components/LayoutSecondary";

const FictionPage: NextPage<{}> = () => {
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
		posts: FictionArticleWithDetails[];
	}>(
		["allFictionArticles"],
		async ({ pageParam = "" }) => {
			await new Promise((res) => setTimeout(res, 1000));
			const res = await fetch("/api/fiction/all?cursor=" + pageParam);
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
		<LayoutSecondary title={"Karya Fiksi"}>
			<Head>
				<title>Karya Fiksi</title>
			</Head>
			<Box p={"4"}>
				<Flex gap={12}>
					<Box w={{ base: "full" }}>
						<Skeleton isLoaded={data !== undefined || !isFetchingNextPage}>
							{data &&
								data.pages.map((page, index) => (
									<Fragment key={index}>
										{page.posts.map((post) => (
											<FictionMainCard article={post} key={post.id} />
										))}
									</Fragment>
								))}
						</Skeleton>

						<Flex justifyContent={"center"} mt={"6"}>
							<Button
								size={"lg"}
								colorScheme={"pink"}
								rounded={"3xl"}
								disabled={!hasNextPage}
								isLoading={isFetchingNextPage}
								onClick={loadMore}
							>
								{hasNextPage ? "Load more" : "No more"}
							</Button>
						</Flex>
					</Box>
					<Box display={{ base: "none", lg: "flex" }} w={"30%"}>
						{/* Sidebar */}
						<FictionSidebar />
					</Box>
				</Flex>
			</Box>
		</LayoutSecondary>
	);
};

export default FictionPage;
