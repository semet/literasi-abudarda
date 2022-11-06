import {
	Box,
	Grid,
	GridItem,
	Icon,
	Link,
	List,
	ListIcon,
	ListItem,
	Stack,
	Text,
	UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { FaAngleRight, FaHeart } from "react-icons/fa";
import { menus } from "../head/menu";
import FooterShape from "../shape/FooterShape";
import FooterLogo from "./FooterLogo";

const FooterContainer = () => {
	return (
		<Box w={"full"} bg={"cyan.500"} position={"relative"} pt={"160px"}>
			{/* Shape */}
			<FooterShape />
			<Box display={"flex"} px={"4"}>
				<Box w={"20%"}>
					<FooterLogo />
				</Box>
				<Box py={"4"} w={"80%"}>
					<Grid templateColumns={"repeat(3, 1fr)"} gap={2}>
						<GridItem w={"100%"}>
							<Stack>
								<Text
									fontSize={"lg"}
									color={"gray.100"}
									textTransform={"uppercase"}
								>
									Menu
								</Text>
								<List spacing={3}>
									{menus.map((menu, i) => (
										<ListItem key={i} color={"white"}>
											<Link
												href={menu.link}
												_hover={{
													textDecor: "none",
													color: "gray.200",
												}}
											>
												<ListIcon as={FaAngleRight} color="white" />
												{menu.label}
											</Link>
										</ListItem>
									))}
								</List>
							</Stack>
						</GridItem>
						<GridItem w={"100%"}>
							<Text fontSize={"lg"} color={"gray.100"} textTransform={"uppercase"}>
								KARYA
							</Text>
							<List spacing={3}>
								{["Fiksi", "Non-fiksi", "Favorite ", "Archive"].map(
									(data, idx) => (
										<ListItem color={"white"} key={idx}>
											<Link
												href={""}
												_hover={{
													textDecor: "none",
													color: "gray.200",
												}}
											>
												<ListIcon as={FaAngleRight} color="white" />
												{data}
											</Link>
										</ListItem>
									)
								)}
							</List>
						</GridItem>
						<GridItem w={"100%"}>
							<Text fontSize={"lg"} color={"gray.100"} textTransform={"uppercase"}>
								Other
							</Text>
							<List spacing={3}>
								{["Kontak", "Sitemap", "Location ", "Term"].map((data, idx) => (
									<ListItem color={"white"} key={idx}>
										<Link
											href={""}
											_hover={{
												textDecor: "none",
												color: "gray.200",
											}}
										>
											<ListIcon as={FaAngleRight} color="white" />
											{data}
										</Link>
									</ListItem>
								))}
							</List>
						</GridItem>
					</Grid>
				</Box>
			</Box>
			<Box bg={"whiteAlpha.400"} p={"4"} textAlign={"center"} color={"white"}>
				<Text>©{new Date().getFullYear().toString()}</Text>
				<Text>
					Made with <Icon as={FaHeart} color={"pink.400"} /> by Abudarda
				</Text>
			</Box>
		</Box>
	);
};

export default FooterContainer;
