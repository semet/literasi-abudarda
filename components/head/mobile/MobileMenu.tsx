import {
	Box,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	Icon,
	IconButton,
	Link,
	Stack,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import React, { Fragment, RefObject, useRef } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";
import MobileNavItems from "./MobileNavItems";

const MobileMenu: React.FC<{
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}> = ({ isOpen, onClose, onOpen }) => {
	const btnRef = useRef<any>();
	return (
		<Fragment>
			{/* Drawer */}
			<Drawer
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>
						<Text color="brida.100">Abudardapedia </Text>
					</DrawerHeader>
					<DrawerBody>
						<MobileNavItems />
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Fragment>
	);
};

export default MobileMenu;
