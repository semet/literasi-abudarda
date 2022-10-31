import { Box, Button, Flex, Grid, GridItem, Icon, Input, Select } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import LayoutSecondary from "../../components/LayoutSecondary";
import { FaLayerGroup } from "react-icons/fa";
import MainCard from "../../components/non-fiction/MainCard";

const NonFiction = () => {
	return (
		<LayoutSecondary>
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
					{Array(6)
						.fill(0)
						.map((_, i) => (
							<MainCard key={i} />
						))}
				</Grid>
				<Box display={"flex"} justifyContent={"center"}>
					<Button size={"lg"} colorScheme={"pink"} rounded={"3xl"}>
						Load more
					</Button>
				</Box>
			</Box>
		</LayoutSecondary>
	);
};

export default NonFiction;
