import React from "react";
import {
	Box,
	Flex,
	Icon,
	Link,
	Popover,
	PopoverArrow,
	PopoverContent,
	PopoverTrigger,
	Stack,
	Text,
} from "@chakra-ui/react";
import { Menu, menus } from "./menu";

import { FiChevronRight } from "react-icons/fi";
import useScroll from "../../hooks/useScroll";

const DesktopMenu = () => {
	return (
		<Flex
			direction={"row"}
			gap={6}
			display={{
				base: "none",
				lg: "flex",
			}}
		>
			{menus.map((menu, index) => (
				<MenuItems label={menu.label} link={menu.link} subs={menu.subs} key={index} />
			))}
		</Flex>
	);
};

export default DesktopMenu;

const MenuItems: React.FC<Menu> = (props) => {
	const { label, link, subs } = props;
	const { isScrolled } = useScroll();
	return (
		<Popover placement={"bottom-start"} trigger={"hover"}>
			<PopoverTrigger>
				<Link
					_hover={{
						textDecoration: "none",
						color: `${isScrolled ? "brand" : "white"}`,
					}}
					href={link}
					color={isScrolled ? "gray.500" : "gray.50"}
					fontWeight={"600"}
					textTransform={"uppercase"}
					position={"relative"}
					overflow={"hidden"}
					role={"group"}
				>
					<Box
						position={"absolute"}
						w={"100%"}
						h={"50%"}
						bottom={0}
						left={"-90px"}
						bg={"blackAlpha.100"}
						rounded={"xl"}
						_groupHover={{
							left: "0px",
						}}
						transition={"all .3s ease"}
					/>
					{label}
				</Link>
			</PopoverTrigger>
			{subs && (
				<PopoverContent
					border={0}
					boxShadow={"xl"}
					rounded={"xl"}
					minW={"sm"}
					p={4}
					bg={"white"}
				>
					<PopoverArrow />
					<SubMenu subs={subs} />
				</PopoverContent>
			)}
		</Popover>
	);
};

const SubMenu: React.FC<{ subs: Menu["subs"] }> = ({ subs }) => {
	return (
		<Stack>
			{subs?.map((sub, index) => (
				<Link
					role={"group"}
					_hover={{
						textDecoration: "none",
						color: "blue.100",
						bg: "gray.200",
					}}
					p={2}
					rounded={"lg"}
					href={sub.link}
					key={index}
				>
					<Stack direction={"row"} align={"center"}>
						<Box>
							<Text
								transition={"all .3s ease"}
								_groupHover={{ color: "blue.500" }}
								color={"gray.600"}
								fontWeight={"500"}
								textTransform={"uppercase"}
							>
								{sub.label}
							</Text>
							<Text
								fontSize={"sm"}
								_groupHover={{ color: "gray.500" }}
								color={"gray.400"}
							>
								sub label
							</Text>
						</Box>
						<Flex
							transition={"all .3s ease"}
							transform={"translateX(-10px)"}
							opacity={0}
							_groupHover={{ opacity: "100%", transform: "translateX(0)" }}
							justify={"flex-end"}
							align={"center"}
							flex={1}
						>
							<Icon color={"blue.400"} w={5} h={5} as={FiChevronRight} />
						</Flex>
					</Stack>
				</Link>
			))}
		</Stack>
	);
};
