import { Box, Button, Flex, Skeleton, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import FictionMainCard from "../../components/fiction/FictionMainCard";
import FictionSidebar from "../../components/fiction/FictionSidebar";
import LayoutSecondary from "../../components/LayoutSecondary";
import { useQuery } from "@tanstack/react-query";
import { FictionArticleWithDetails } from "common";

const FictionPage: NextPage<{}> = () => {
	const {
		data: allFictionArticles,
		isLoading,
		isError,
	} = useQuery<FictionArticleWithDetails[]>(["allFictionArticles"], async () => {
		const res = await fetch("/api/fiction/all");
		const data = await res.json();

		return data;
	});
	return (
		<LayoutSecondary title={"Karya Fiksi"}>
			<Head>
				<title>Karya Fiksi</title>
			</Head>
			<Box p={"4"}>
				<Flex gap={12}>
					<Box w={{ base: "full" }}>
						<Skeleton isLoaded={!isLoading}>
							{allFictionArticles !== undefined && (
								<>
									{allFictionArticles.map((article) => (
										<FictionMainCard article={article} key={article.id} />
									))}
								</>
							)}
						</Skeleton>
						<Flex justifyContent={"center"} mt={"6"}>
							<Button size={"lg"} colorScheme={"pink"} rounded={"3xl"}>
								Load more
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
