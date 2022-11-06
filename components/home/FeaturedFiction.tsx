/* eslint-disable react/no-unescaped-entities */
import {
	Box,
	Flex,
	Heading,
	Icon,
	IconButton,
	Image,
	Link,
	Skeleton,
	SkeletonCircle,
	SkeletonText,
	Stack,
	Text,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { FictionArticleWithDetails } from "common";
import { Fragment, useEffect } from "react";
import {
	FaCalendarAlt,
	FaComment,
	FaFacebookF,
	FaPinterest,
	FaTwitter,
	FaUser,
	FaWhatsapp,
} from "react-icons/fa";
import ChakraNextLink from "../shared/ChakraNextLink";
import SocialShareButtons from "../shared/SocialShareButtons";
import FeaturedFictionSkeleton from "./FeaturedFictionSkeleton";

const FeaturedFiction = () => {
	const { data, isLoading, isError } = useQuery<FictionArticleWithDetails[]>(
		["featuredFiction"],
		async () => {
			const res = await fetch("/api/fiction/featured");
			const data = await res.json();
			return data;
		}
	);

	useEffect(() => {
		console.log(data);
	}, [data]);
	return (
		<Box px={{ base: "4", lg: "20" }} mt={"10"}>
			<Flex
				justify={"start"}
				flexDirection={{
					base: "column",
					lg: "row",
				}}
				gap={"10"}
			>
				{/* Image */}
				<Box
					w={{ base: "full", lg: "40%" }}
					position={"relative"}
					_before={{
						content: "''",
						width: "100%",
						height: "100%",
						bg: "teal",
						position: "absolute",
						top: 0,
						right: -3,
						zIndex: "-1",
						transform: "rotate(5deg)",
						bgImage: `${
							isLoading && data === undefined
								? "/images/blog/travel/02.jpg"
								: data![0].image
						}`,
						filter: "blur(2px)",
						rounded: "lg",
					}}
					role={"group"}
				>
					{isLoading && data === undefined ? (
						<Skeleton
							w={"full"}
							h={"full"}
							rounded={"base"}
							boxShadow={"dark-lg"}
							transform={"rotate(-4deg)"}
							transition={"all .35s ease-in-out"}
							_hover={{
								transform: "rotate(5deg)",
							}}
						/>
					) : (
						<Image
							src={data![0].image}
							alt={"Travel"}
							objectFit={"cover"}
							w={"full"}
							rounded={"base"}
							boxShadow={"dark-lg"}
							transform={"rotate(-4deg)"}
							transition={"all .35s ease-in-out"}
							_hover={{
								transform: "rotate(5deg)",
							}}
						/>
					)}
				</Box>
				<Box
					w={{ base: "full", lg: "60%" }}
					bg={"cyan.600"}
					rounded={"lg"}
					shadow={"lg"}
					px={"6"}
					py={"4"}
					color={"gray.50"}
				>
					{/* article content */}
					<Stack gap={6}>
						{isLoading && data === undefined ? (
							<FeaturedFictionSkeleton />
						) : (
							<Fragment>
								<Heading
									as={"h2"}
									fontSize={{
										base: "lg",
										sm: "xl",
										md: "3xl",
									}}
								>
									{data![0].title}
								</Heading>
								<Stack
									direction={"row"}
									align={"center"}
									gap={{ base: 2, sm: 4 }}
									fontSize={{
										base: "xx-small",
										sm: "sm",
									}}
								>
									<Flex align={"center"} gap={2} color={"teal.700"}>
										<Icon as={FaCalendarAlt} />
										{new Date(data![0].createdAt).toDateString()}
									</Flex>
									<Flex align={"center"} gap={2} color={"gray.600"}>
										<Icon as={FaUser} />
										<Text>{data![0].author.name}</Text>
									</Flex>
									<Flex align={"center"} gap={2} color={"gray.600"}>
										<Icon as={FaComment} />
										<Text>{data![0]._count.comments} Comments</Text>
									</Flex>
								</Stack>
								<Text textAlign={"justify"} noOfLines={9}>
									{data![0].body}
								</Text>
								<Flex justify={"space-between"}>
									<ChakraNextLink
										href={`/fiction/${data![0].slug}`}
										_hover={{ textDecoration: "none", color: "pink.300" }}
										color={"pink.500"}
										fontWeight={"semibold"}
									>
										Read more ...
									</ChakraNextLink>
									<SocialShareButtons url={""} title={""} />
								</Flex>
							</Fragment>
						)}
					</Stack>
				</Box>
			</Flex>
		</Box>
	);
};

export default FeaturedFiction;
