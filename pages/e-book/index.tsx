import { Box, Button, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { Book } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import EbookCard from "../../components/ebook/EbookCard";
import LayoutSecondary from "../../components/LayoutSecondary";

const EbookPage: NextPage = () => {
	const {
		data: allBooks,
		isLoading,
		isError,
	} = useQuery<Book[]>(["allBooks"], async () => {
		const res = await fetch("/api/e-book/all");
		const data = await res.json();

		return data;
	});
	return (
		<LayoutSecondary title={"Free E-book"}>
			<Head>
				<title>E-book</title>
			</Head>
			<Box p={"4"}>
				<Flex gap={4}>
					<Box w={{ base: "full" }} experimental_spaceY={"4"}>
						<Grid gridTemplateColumns={"repeat(3, 1fr)"} gap={4}>
							{!isLoading ? (
								<>
									{allBooks?.length ? (
										<>
											{allBooks.map((book) => (
												<GridItem w={"full"} key={book.id}>
													<EbookCard />
												</GridItem>
											))}
										</>
									) : (
										<Text>No books ...</Text>
									)}
								</>
							) : (
								<Text>Loading ...</Text>
							)}
						</Grid>
						{allBooks !== undefined && allBooks.length > 9 ? (
							<Box display={"flex"} justifyContent={"center"}>
								<Button size={"lg"} colorScheme={"orange"} rounded={"3xl"}>
									Load more
								</Button>
							</Box>
						) : null}
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
