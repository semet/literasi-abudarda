import { AspectRatio, Box, Flex, Heading, Image } from "@chakra-ui/react";

const HeroSlider = () => {
	return (
		<Flex
			justify={{ base: "center", lg: "space-between" }}
			flexDirection={{ base: "column", md: "row" }}
			alignItems={"end"}
			px={{ base: "4", lg: "20" }}
			w={"full"}
			h={"600px"}
		>
			<Box
				w={{ base: "full", md: "50%" }}
				experimental_spaceY={"4"}
				alignSelf={"center"}
			>
				<Heading
					as={"h1"}
					textAlign={{ base: "center", md: "left" }}
					fontSize={{ base: "4xl", sm: "5xl", lg: "6xl" }}
					fontWeight={"extrabold"}
					bgGradient={"linear(to-r, blue.600, pink.400)"}
					bgClip={"text"}
					letterSpacing={"widest"}
				>
					ABUDARDAPEDIA
				</Heading>
				<Heading
					as={"h2"}
					textAlign={{ base: "center", md: "left" }}
					fontSize={{ base: "sm", sm: "md", lg: "large" }}
					fontWeight={{ base: "normal", lg: "medium" }}
					lineHeight={"6"}
					color={"gray.50"}
					px={"2"}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</Heading>
			</Box>

			<Box w={"50%"} zIndex={"1"} display={{ base: "none", md: "block" }}>
				<AspectRatio maxW="400px" ratio={3 / 3.4}>
					<Image
						src={"/images/slider/slide-1.png"}
						alt={"Slider"}
						objectFit={"cover"}
					/>
				</AspectRatio>
			</Box>
		</Flex>
	);
};

export default HeroSlider;
