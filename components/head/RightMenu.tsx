import React, { Fragment } from "react";
import {
	Box,
	Collapse,
	Flex,
	IconButton,
	useBreakpointValue,
	useDisclosure,
} from "@chakra-ui/react";
import {
	FaFacebookF,
	FaYoutube,
	FaWhatsapp,
	FaAlignJustify,
	FaSignOutAlt,
} from "react-icons/fa";
import useScroll from "../../hooks/useScroll";
import { AnimatePresence, motion } from "framer-motion";
import { useSession, signOut } from "next-auth/react";
import MobileMenu from "./mobile/MobileMenu";
const RightMenu = () => {
	const screen = useBreakpointValue({
		base: "base",
		lg: "lg",
	});
	const { isScrolled } = useScroll();

	const { data, status } = useSession();

	const { isOpen, onToggle, onClose, onOpen } = useDisclosure();
	return (
		<Fragment>
			<AnimatePresence>
				{screen === "lg" ? (
					<Flex
						as={motion.div}
						initial={{ opacity: 0, y: -100 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -100 }}
						gap={"2"}
					>
						<IconButton
							aria-label="Search database"
							colorScheme={"facebook"}
							icon={<FaFacebookF />}
							rounded={"full"}
							fontSize={"lg"}
							size={"sm"}
						/>
						<IconButton
							aria-label="Search database"
							colorScheme={"red"}
							icon={<FaYoutube />}
							rounded={"full"}
							fontSize={"lg"}
							size={"sm"}
						/>
						<IconButton
							aria-label="Search database"
							colorScheme={"whatsapp"}
							icon={<FaWhatsapp />}
							rounded={"full"}
							fontSize={"lg"}
							size={"sm"}
						/>
						{status !== "unauthenticated" && status !== "loading" && (
							<IconButton
								aria-label="logout"
								colorScheme={"pink"}
								icon={<FaSignOutAlt />}
								rounded={"full"}
								fontSize={"lg"}
								size={"sm"}
								onClick={() => signOut()}
							/>
						)}
					</Flex>
				) : (
					<IconButton
						as={motion.button}
						initial={{ y: -100 }}
						animate={{ y: 0 }}
						exit={{ y: -100 }}
						// @ts-ignore no problem in operation, although type error appears.
						transition={{
							duration: 0.5,
						}}
						aria-label="Search database"
						color={isScrolled ? "gray.700" : "white"}
						bg={"transparent"}
						icon={<FaAlignJustify />}
						rounded={"lg"}
						fontSize={"lg"}
						size={"sm"}
						variant={"ghost"}
						onClick={onToggle}
					/>
				)}
			</AnimatePresence>
			{/* Mobile Menu */}
			<MobileMenu isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
		</Fragment>
	);
};

export default RightMenu;
