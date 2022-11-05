import {
	Avatar,
	Box,
	Flex,
	Link,
	Skeleton,
	SkeletonCircle,
	Stack,
	Text,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import SidebarTitle from "../../shared/SidebarTitle";
import { Fragment } from "react";

const PopularAuthor = () => {
	const { data, isLoading, isError } = useQuery<
		{
			id: string;
			name: string;
			image: string;
			_count: {
				nonFictions: number;
			};
		}[]
	>(["favoriteFictionAuthors"], async () => {
		const res = await fetch("/api/nonfiction/favorite-author");
		const data = await res.json();
		return data;
	});
	return (
		<Box bg={"#F4EEFF"} p={4} rounded={"lg"}>
			<Stack gap={4}>
				<SidebarTitle title={"Author Favorit"} />
				<Stack>
					{isLoading && (
						<Stack gap={4}>
							{Array(4)
								.fill(0)
								.map((_, i) => (
									<Flex gap={2} alignItems={"center"} key={i}>
										<SkeletonCircle />
										<Skeleton h={"8"} flex={1} />
									</Flex>
								))}
						</Stack>
					)}

					{data && (
						<Fragment>
							{data.map((author) => (
								<Link
									href={"#"}
									_hover={{
										textDecor: "none",
										color: "pink.500",
									}}
									key={author.id}
								>
									<Flex alignItems={"center"} gap={4}>
										<Avatar src={author.image} name={"Some Name"} />
										<Text fontWeight={"semibold"}>
											{author.name} ({author._count.nonFictions} Posts)
										</Text>
									</Flex>
								</Link>
							))}
						</Fragment>
					)}
				</Stack>
			</Stack>
		</Box>
	);
};

export default PopularAuthor;
