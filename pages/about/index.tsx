import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { About } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import React from "react";
import LayoutSecondary from "../../components/LayoutSecondary";

const AboutPage = () => {
	const {
		data: about,
		isLoading,
		isError,
	} = useQuery<About>(["about"], async () => {
		const res = await fetch("/api/about");
		const data = await res.json();
		return data;
	});
	return (
		<LayoutSecondary title={"Tentang Kami"}>
			<Head>
				<title>Tentang Kami</title>
			</Head>
			<Box px={"24"} py={6}>
				<Stack>
					<Heading>
						Kenapa sih kami sampe bisa ada d sini dan membangun semua ini?
					</Heading>
					{!isLoading && about ? (
						<Text color={"gray.700"} lineHeight={"7"} textAlign={"justify"}>
							{about.body}
						</Text>
					) : (
						<Text>Loading ...</Text>
					)}
				</Stack>
			</Box>
		</LayoutSecondary>
	);
};

export default AboutPage;
