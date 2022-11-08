import {
	Box,
	Flex,
	IconButton,
	Image,
	Stack,
	Text,
	Skeleton,
	SkeletonText,
	useBreakpointValue,
} from "@chakra-ui/react";
import { Team } from "@prisma/client";
import React, { Fragment } from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const TeamSliderSkeleton = () => {
	const screen = useBreakpointValue({
		base: "base",
		sm: "sm",
		md: "md",
		lg: "lg",
		xl: "xl",
		"2xl": "2xl",
	});
	return (
		<Flex my={"4"} w={"100%"} gap={4}>
			{screen === "base" || screen === "sm" ? (
				<Stack w={"full"} bg={"white"} rounded={"lg"} shadow={"md"} p={4}>
					<Skeleton w={"full"} h={"300px"} rounded={"lg"} />
					<SkeletonText />
				</Stack>
			) : null}
			{screen === "md" && (
				<Fragment>
					{Array(2)
						.fill(0)
						.map((_, i) => (
							<Stack
								w={"full"}
								bg={"white"}
								rounded={"lg"}
								shadow={"md"}
								p={4}
								key={i}
							>
								<Skeleton w={"full"} h={"300px"} rounded={"lg"} />
								<SkeletonText />
							</Stack>
						))}
				</Fragment>
			)}
			{screen === "lg" && (
				<Fragment>
					{Array(3)
						.fill(0)
						.map((_, i) => (
							<Stack
								w={"full"}
								bg={"white"}
								rounded={"lg"}
								shadow={"md"}
								p={4}
								key={i}
							>
								<Skeleton w={"full"} h={"300px"} rounded={"lg"} />
								<SkeletonText />
							</Stack>
						))}
				</Fragment>
			)}
			{screen === "xl" || screen === "2xl" ? (
				<Fragment>
					{Array(4)
						.fill(0)
						.map((_, i) => (
							<Stack
								w={"full"}
								bg={"white"}
								rounded={"lg"}
								shadow={"md"}
								p={4}
								key={i}
							>
								<Skeleton w={"full"} h={"300px"} rounded={"lg"} />
								<SkeletonText />
							</Stack>
						))}
				</Fragment>
			) : null}
		</Flex>
	);
};

export default TeamSliderSkeleton;
