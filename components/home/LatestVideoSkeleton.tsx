import {
	Box,
	Flex,
	Grid,
	GridItem,
	Skeleton,
	Stack,
	useBreakpointValue,
} from "@chakra-ui/react";
import React, { Fragment } from "react";

const LatestVideoSkeleton = () => {
	const screen = useBreakpointValue({
		base: "base",
		sm: "sm",
		md: "md",
		lg: "lg",
	});
	return (
		<Stack>
			<Grid templateColumns="repeat(8, 1fr)" templateRows="repeat(2, 1fr)" gap={6}>
				<GridItem
					w="100%"
					p={2}
					bg="gray.50"
					rounded={"lg"}
					shadow={"md"}
					colSpan={{ base: 8, md: 5 }}
					rowSpan={2}
				>
					<Skeleton
						w={"100%"}
						h={{ base: "300px", lg: "400px", xl: "500px" }}
						maxH={"500px"}
					/>
				</GridItem>
				<GridItem
					w="100%"
					p={2}
					bg="gray.50"
					rounded={"lg"}
					shadow={"md"}
					colSpan={{ base: 8, md: 3 }}
				>
					<Skeleton
						w={"100%"}
						h={{ base: "300px", md: "130px", lg: "180px", xl: "230px" }}
						maxH={"500px"}
					/>
				</GridItem>
				<GridItem
					w="100%"
					p={2}
					bg="gray.50"
					rounded={"lg"}
					shadow={"md"}
					colSpan={{ base: 8, md: 3 }}
				>
					<Skeleton
						w={"100%"}
						h={{ base: "300px", md: "130px", lg: "180px", xl: "230px" }}
						maxH={"500px"}
					/>
				</GridItem>
			</Grid>
			<Flex gap={2}>
				{screen === "base" ||
					(screen === "sm" && (
						<Box p={2} bg="gray.50" rounded={"lg"} shadow={"md"} flex={1}>
							<Skeleton h={"300px"} w={"full"} />
						</Box>
					))}
				{screen === "md" && (
					<Fragment>
						{Array(2)
							.fill(0)
							.map((_, i) => (
								<Box
									p={2}
									bg="gray.50"
									rounded={"lg"}
									shadow={"md"}
									flex={1}
									key={i}
								>
									<Skeleton h={"250px"} w={"full"} />
								</Box>
							))}
					</Fragment>
				)}
				{screen === "lg" && (
					<Fragment>
						{Array(4)
							.fill(0)
							.map((_, i) => (
								<Box
									p={2}
									bg="gray.50"
									rounded={"lg"}
									shadow={"md"}
									flex={1}
									key={i}
								>
									<Skeleton h={"200px"} w={"full"} />
								</Box>
							))}
					</Fragment>
				)}
			</Flex>
		</Stack>
	);
};

export default LatestVideoSkeleton;
