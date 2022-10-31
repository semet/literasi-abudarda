import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import EbookCard from "../../components/ebook/EbookCard";
import LayoutSecondary from "../../components/LayoutSecondary";

const EbookPage: NextPage = () => {
	return (
		<LayoutSecondary title={"Free E-book"}>
			<Head>
				<title>E-book</title>
			</Head>
			<Box p={"4"}>
				<Flex gap={4}>
					<Box w={{ base: "full" }}>
						<Grid gridTemplateColumns={"repeat(3, 1fr)"} gap={4}>
							{Array(9)
								.fill(0)
								.map((_, i) => (
									<GridItem w={"full"} key={i}>
										<EbookCard />
									</GridItem>
								))}
						</Grid>
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
