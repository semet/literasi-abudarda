import {
	Box,
	ChakraProvider,
	Collapse,
	Flex,
	Icon,
	Link,
	Stack,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { menus } from "../menu";
import ChakraNextLink from "../../shared/ChakraNextLink";

const MobileNavItems = () => {
	const { isOpen, onToggle } = useDisclosure();
	return (
		<Stack
			display="flex"
			flexDirection="column"
			alignItems="start"
			listStyleType="none"
			justifyContent="start"
			gap="4"
			textTransform="uppercase"
			fontWeight="semibold"
			color={"gray.700"}
		>
			{menus.map((menu) => (
				<Box width="full" key={menu.label}>
					{menu.subs == undefined ? (
						<ChakraNextLink
							href={menu.link}
							_hover={{
								textDecor: "none",
								color: "brand",
							}}
						>
							{menu.label}
						</ChakraNextLink>
					) : (
						<Box
							_hover={{ textDecoration: "none", cursor: "pointer" }}
							width="full"
						>
							<Flex align="center" gap="2" onClick={onToggle}>
								<Text>{menu.label}</Text>
								<Icon
									as={FaChevronDown}
									color="gray.500"
									transition={"all .25s ease-in-out"}
									transform={isOpen ? "rotate(180deg)" : ""}
								/>
							</Flex>
							<Collapse
								in={isOpen}
								animateOpacity
								style={{ marginTop: "0!important" }}
							>
								<Stack
									mt={2}
									pl={4}
									borderLeft={1}
									borderStyle={"solid"}
									borderColor="gray.200"
									align={"start"}
								>
									{menu.subs.map((sub) => (
										<ChakraNextLink
											href={sub.link}
											_hover={{ color: "brand" }}
											key={sub.label}
										>
											{sub.label}
										</ChakraNextLink>
									))}
								</Stack>
							</Collapse>
						</Box>
					)}
				</Box>
			))}
			{/*  */}
		</Stack>
	);
};

export default MobileNavItems;
