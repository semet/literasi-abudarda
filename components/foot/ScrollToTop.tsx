import { Box, IconButton } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import useScroll from "../../hooks/useScroll";

const ScrollToTop = () => {
	const { isScrolled } = useScroll(200);
	const handleClick = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<AnimatePresence>
			{isScrolled && (
				<Box
					as={motion.div}
					initial={{ y: 60 }}
					animate={{ y: 0 }}
					exit={{ y: 60 }}
					// @ts-ignore:next-line
					transition={{ duration: 2 }}
					position={"fixed"}
					bottom={"5"}
					right={"2"}
					zIndex={"1"}
				>
					<IconButton
						as={motion.button}
						aria-label="scroll to top"
						icon={<FaArrowUp />}
						colorScheme={"pink"}
						rounded={"full"}
						shadow={"lg"}
						onClick={handleClick}
						whileHover={{
							rotate: 360,
						}}
					/>
				</Box>
			)}
		</AnimatePresence>
	);
};

export default ScrollToTop;
