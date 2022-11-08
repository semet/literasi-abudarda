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
	Stack,
	Text,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { NonFictionArticleWithDetails } from "common";
import React, { Fragment } from "react";
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
import FeaturedNonFictionSkeleton from "./FeaturedNonFictionSkeleton";

const FeaturedNonFiction = () => {
	const { data, isLoading, isError } = useQuery<NonFictionArticleWithDetails[]>(
		["latestNonfiction"],
		async () => {
			const res = await fetch("/api/nonfiction/featured");
			const data = await res.json();
			return data;
		}
	);
	return (
		<Fragment>
			{isLoading && <FeaturedNonFictionSkeleton />}
			{data && (
				<Box mt={{ base: "5", lg: "-10" }}>
					<Flex
						direction={{ base: "column-reverse", md: "row" }}
						rounded={"md"}
						shadow={"lg"}
						bg={"#76c0e9"}
						position={"relative"}
						role={"group"}
						overflow={"hidden"}
						_before={{
							content: "''",
							width: "100%",
							height: "100%",
							bg: "gray.400",
							position: "absolute",
							top: -4,
							left: -4,
							zIndex: "-1",
							rounded: "lg",
							filter: "blur(2px)",
						}}
					>
						<Box w={{ base: "full", md: "60%" }} p={"4"}>
							<Stack gap={4}>
								<Heading as={"h3"} fontSize={"3xl"} color={"pink.400"}>
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
								<Text
									textAlign={"justify"}
									noOfLines={9}
									color={"gray.50"}
									fontSize={"md"}
								>
									{data![0].body}
								</Text>
								<ChakraNextLink
									href={`/non-fiction/${data![0].slug}`}
									_hover={{ textDecoration: "none", color: "pink.300" }}
									color={"pink.500"}
									fontWeight={"semibold"}
								>
									Read more ...
								</ChakraNextLink>
							</Stack>
						</Box>
						<Box
							w={{ base: "full", md: "40%" }}
							overflow={"hidden"}
							position={"relative"}
						>
							<Image
								src={data![0].image}
								fallback={<Skeleton w={"full"} h={"full"} />}
								alt={"Travel"}
								h={{ base: "auto", md: "100%" }}
								w={{ base: "100%", md: "auto" }}
								objectFit={"cover"}
								roundedRight={{ base: "0", md: "lg" }}
								_groupHover={{
									transform: "scale(1.1)",
								}}
								transition={"all .25s ease"}
							/>
							<Stack
								position={"absolute"}
								left={"-20"}
								top={"50%"}
								transform={"translateY(-50%)"}
								bg={"blackAlpha.700"}
								p={"2"}
								rounded={"md"}
								_groupHover={{
									left: "1",
								}}
								transition={"all .5s ease"}
							>
								<IconButton
									aria-label="share"
									icon={<FaFacebookF />}
									size={"sm"}
									rounded={"full"}
									colorScheme={"facebook"}
								/>
								<IconButton
									aria-label="share"
									icon={<FaTwitter />}
									size={"sm"}
									rounded={"full"}
									colorScheme={"twitter"}
								/>
								<IconButton
									aria-label="share"
									icon={<FaPinterest />}
									size={"sm"}
									rounded={"full"}
									colorScheme={"red"}
								/>
								<IconButton
									aria-label="share"
									icon={<FaWhatsapp />}
									size={"sm"}
									rounded={"full"}
									colorScheme={"whatsapp"}
								/>
							</Stack>
						</Box>
					</Flex>
				</Box>
			)}
		</Fragment>
	);
};

export default FeaturedNonFiction;
