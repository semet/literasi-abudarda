import {
	Flex,
	Grid,
	GridItem,
	Skeleton,
	SkeletonText,
	Stack,
	useBreakpointValue,
} from "@chakra-ui/react";
import React, { Fragment, useEffect } from "react";

const NonFictionSliderSkeleton = () => {
	const screen = useBreakpointValue({
		base: "base",
		sm: "sm",
		md: "md",
		lg: "lg",
		xl: "xl",
		"2xl": "2xl",
	});

	return (
		<Flex gap={4}>
			{screen === "base" || screen === "sm" ? (
				<Stack bg={"white"} w={"full"} rounded={"lg"} overflow={"hidden"}>
					<Skeleton h={"400px"} />
					<SkeletonText />
				</Stack>
			) : null}
			{screen === "md" && (
				<Fragment>
					{Array(2)
						.fill(0)
						.map((_, i) => (
							<Stack
								bg={"white"}
								w={"full"}
								rounded={"lg"}
								overflow={"hidden"}
								key={i}
							>
								<Skeleton h={"400px"} />
								<SkeletonText />
							</Stack>
						))}
				</Fragment>
			)}
			{screen === "lg" || screen === "xl" || screen === "2xl" ? (
				<Fragment>
					{Array(3)
						.fill(0)
						.map((_, i) => (
							<Stack
								bg={"white"}
								w={"full"}
								rounded={"lg"}
								overflow={"hidden"}
								key={i}
							>
								<Skeleton h={"400px"} />
								<SkeletonText />
							</Stack>
						))}
				</Fragment>
			) : null}
		</Flex>
	);
};

export default NonFictionSliderSkeleton;
