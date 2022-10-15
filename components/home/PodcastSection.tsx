import {
	Avatar,
	Box,
	Center,
	Divider,
	Flex,
	Grid,
	GridItem,
	Heading,
	Icon,
	IconButton,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import React from "react";
import {
	FaHeadphones,
	FaPlay,
	FaRedoAlt,
	FaUndo,
	FaUndoAlt,
	FaVolumeUp,
} from "react-icons/fa";
import PodcastShape from "../shape/PodcastShape";
import SectionSubTitle from "../shared/SectionSubTitle";
import SectionTitle from "../shared/SectionTitle";

const PodcastSection = () => {
	return (
		<Box
			px={"4"}
			py={"20"}
			position={"relative"}
			overflow={"hidden"}
			bgImage={"/images/bg/7367652.png"}
			bgSize={"contain"}
			bgRepeat={"no-repeat"}
			bgPosition={"left"}
		>
			{/* Wavy Shape */}
			<PodcastShape />
			{/* Ornament */}
			<Ornament />
			<Flex flexDirection={"column"} alignItems={"center"} gap={6}>
				<SectionTitle color={"brand"}>Podcast</SectionTitle>
				<Center maxW={"container.sm"} textAlign={"center"}>
					<SectionSubTitle color={"gray.700"}>
						Anda lebih suka dengerin ketimbang nonton ? No problem.
					</SectionSubTitle>
				</Center>
			</Flex>
			<Box w={"full"} mt={"14"} experimental_spaceY={"10"}>
				{/* Featured Podcast Card */}
				<FeaturedPodcast />
				<Box>
					<Grid
						templateColumns={{
							base: "repeat(1, 1fr)",
							md: "repeat(2, 1fr)",
							lg: "repeat(4, 1fr)",
						}}
						gap={{ base: "6", xl: "10" }}
						justifyContent={"center"}
					>
						{Array(4)
							.fill(0)
							.map((_, i) => (
								<PodcastCard key={i} />
							))}
					</Grid>
				</Box>
			</Box>
		</Box>
	);
};

export default PodcastSection;

const FeaturedPodcast = () => {
	return (
		<Center>
			<Flex
				justify={"start"}
				w={{ base: "full", xl: "50%" }}
				flexDirection={{
					base: "column",
					sm: "row",
				}}
				bg={"white"}
				p={"2"}
				gap={4}
				boxShadow={"md"}
				rounded={"lg"}
			>
				<Box w={{ base: "full", sm: "20%" }}>
					<Image
						src={"/images/thumb/thumb1.jpg"}
						alt={"featured podcast"}
						w={"full"}
						objectFit={"cover"}
					/>
				</Box>
				<Stack
					w={{ base: "full", sm: "60%" }}
					justify={"center"}
					px={{ base: 2, sm: "unset" }}
				>
					<Flex justify={"start"} alignItems={"center"} gap={1}>
						<Heading
							as={"h6"}
							fontSize={{ base: "sm", lg: "md" }}
							fontWeight={"semibold"}
						>
							THE FRIDAY HABIT
						</Heading>
						<Text fontSize={"xs"} color={"gray.500"}>
							• EPISODE 102
						</Text>
					</Flex>
					<Flex alignItems={"center"} gap={4}>
						<IconButton
							aria-label="Play Podcast"
							icon={<FaPlay />}
							rounded={"full"}
							colorScheme={"blackAlpha"}
							size={"sm"}
							alignSelf={"start"}
						/>
						<Stack w={"full"} mt={"7px"}>
							<Box bg={"gray.400"} h={"13px"} rounded={"full"}></Box>
							<Flex
								justifyContent={"space-between"}
								alignItems={"center"}
								color={"gray.500"}
							>
								<Stack direction={"row"} gap={{ base: 1, md: 4 }}>
									<Icon as={FaUndoAlt} fontSize={"xs"} />
									<Icon as={FaVolumeUp} fontSize={"xs"} />
									<Icon as={FaRedoAlt} fontSize={"xs"} />
								</Stack>
								<Text fontSize={"xs"}>00:30 | 26:04</Text>
							</Flex>
						</Stack>
					</Flex>
				</Stack>
			</Flex>
		</Center>
	);
};

const PodcastCard = () => {
	return (
		<GridItem
			w={"100%"}
			bg={"blackAlpha.800"}
			display={"flex"}
			flexDirection={"column"}
			rounded={"xl"}
			px={1}
			shadow={"lg"}
		>
			<Stack
				align={"center"}
				h={"270px"}
				bg={"white"}
				roundedTop={"sm"}
				py={"4"}
				mt={"-2"}
				boxShadow={"dark-lg"}
			>
				<Text
					fontSize={"xl"}
					fontWeight={"bold"}
					textAlign={"center"}
					textTransform={"uppercase"}
					color={"gray.500"}
				>
					Kisah Sang Pencari Tengkong
				</Text>
				<Divider w={"210px"} />
				<Text color={"gray.400"} fontSize={"lg"}>
					Oleh: hamdani
				</Text>
				<Text color={"gray.400"} fontSize={"sm"}>
					Durasi : 2hrs
				</Text>
				<Text color={"gray.400"} fontSize={"sm"}>
					episodes : 20
				</Text>
				<Text color={"gray.400"} fontSize={"sm"}>
					Didengar: 30 kali
				</Text>
			</Stack>
			<Flex h={"60px"} justify={"center"} mt={"4"}>
				<IconButton
					aria-label="play it"
					icon={<FaPlay />}
					rounded={"full"}
					pl={"1"}
					boxShadow={"outline"}
					colorScheme={"messenger"}
				/>
			</Flex>
		</GridItem>
	);
};

const Ornament = () => {
	return (
		<Box position={"absolute"} top={10} right={0} zIndex={"-1"}>
			<Icon
				as={FaHeadphones}
				fontSize={"300px"}
				transform={"rotate(20deg)"}
				color={"blackAlpha.100"}
			/>
		</Box>
	);
};
