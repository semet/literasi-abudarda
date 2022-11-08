import { Box, Flex, Skeleton, SkeletonText, Stack } from "@chakra-ui/react";
import React from "react";

const FeaturedNonFictionSkeleton = () => {
	return (
		<Box mt={{ base: "5", lg: "-10" }}>
			<Flex
				direction={{ base: "column-reverse", md: "row" }}
				rounded={"md"}
				shadow={"lg"}
				bg={"#76c0e9"}
			>
				<Box w={{ base: "full", md: "60%" }} p={"4"}>
					<Stack gap={4}>
						<Skeleton w={"full"} h={"30px"} />
						<Skeleton w={"full"} h={"20px"} />
						<SkeletonText noOfLines={9} />
					</Stack>
				</Box>
				<Box
					w={{ base: "full", md: "40%" }}
					overflow={"hidden"}
					position={"relative"}
				>
					<Skeleton w={"full"} h={"350px"} />
				</Box>
			</Flex>
		</Box>
	);
};

export default FeaturedNonFictionSkeleton;
