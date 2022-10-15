import React, { Fragment } from "react";
import { Box, Flex, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { FaFacebookF, FaYoutube, FaWhatsapp, FaAlignJustify } from "react-icons/fa";
import useScroll from "../../hooks/useScroll";
import { AnimatePresence, motion } from "framer-motion";
const RightMenu = () => {
	const screen = useBreakpointValue({
		base: "base",
		lg: "lg",
	});
	const { isScrolled } = useScroll();
	return (
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
				/>
			)}
		</AnimatePresence>
	);
};

export default RightMenu;
