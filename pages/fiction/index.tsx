import { Box, Button, Flex } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import FictionMainCard from "../../components/fiction/FictionMainCard";
import FictionSidebar from "../../components/fiction/FictionSidebar";
import LayoutSecondary from "../../components/LayoutSecondary";

const FictionPage: NextPage<{}> = () => {
	return (
		<LayoutSecondary title={"Karya Fiksi"}>
			<Head>
				<title>Karya Fiksi</title>
			</Head>
			<Box p={"4"}>
				<Flex gap={12}>
					<Box w={{ base: "full" }} experimental_spaceY={"6"}>
						{Array(6)
							.fill(0)
							.map((_, i) => (
								<FictionMainCard key={i} />
							))}
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
