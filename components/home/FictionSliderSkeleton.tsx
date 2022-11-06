import { Flex, Skeleton, useBreakpointValue } from "@chakra-ui/react";
import React, { Fragment } from "react";

const FictionSliderSkeleton = () => {
	const screen = useBreakpointValue({
		base: "base",
		sm: "sm",
		md: "md",
		lg: "lg",
		xl: "xl",
	});
	return (
		<Flex px={4} gap={4}>
			{screen === "base" ||
				(screen === "sm" && <Skeleton w={"full"} h={"450px"} rounded={"lg"} />)}

			{screen === "md" && (
				<Fragment>
					{Array(2)
						.fill(0)
						.map((_, i) => (
							<Skeleton w={"full"} h={"450px"} rounded={"lg"} key={i} />
						))}
				</Fragment>
			)}
			{screen === "lg" && (
				<Fragment>
					{Array(3)
						.fill(0)
						.map((_, i) => (
							<Skeleton w={"full"} h={"450px"} rounded={"lg"} key={i} />
						))}
				</Fragment>
			)}
			{screen === "xl" && (
				<Fragment>
					{Array(4)
						.fill(0)
						.map((_, i) => (
							<Skeleton w={"full"} h={"450px"} rounded={"lg"} key={i} />
						))}
				</Fragment>
			)}
		</Flex>
	);
};

export default FictionSliderSkeleton;
