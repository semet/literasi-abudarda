import { Box, Flex, Image, Link, Stack, Text } from "@chakra-ui/react";
import { About } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import SectionSubTitle from "../shared/SectionSubTitle";
import SectionTitle from "../shared/SectionTitle";

const AboutSection = () => {
	const {
		data: about,
		isLoading,
		isError,
	} = useQuery<About>(["about"], async () => {
		const res = await fetch("/api/about");
		const data = await res.json();
		return data;
	});
	return (
		<Flex
			alignItems={"center"}
			direction={{ base: "column", lg: "row" }}
			px={"4"}
			py={"10"}
		>
			<Box w={{ base: "full", lg: "50%" }} p={"2"} alignSelf={"self-start"}>
				{/* <AspectRatio maxW={"700px"} ratio={4.7 / 3}>
					<Image src={"/images/bg/20944800.png"} alt={"About Us"} />
				</AspectRatio> */}
				<Image
					src={"/images/bg/20944800.png"}
					minW={{ base: "200px", md: "500px", lg: "400px" }}
					alt={"About Us"}
				/>
			</Box>
			<Box
				w={{ base: "full", lg: "50%" }}
				justifyContent={"start"}
				px={"4"}
				py={"6"}
				bgGradient={{
					base: "linear(to-t, rgba(245, 240, 243, 0.8), transparent)",
					lg: "linear(to-tr, rgba(245, 240, 243, 0.8), transparent)",
				}}
				boxShadow={"sm"}
				rounded={"lg"}
			>
				<Stack direction={"column"} gap={6}>
					<SectionTitle>Tentang kami</SectionTitle>
					<SectionSubTitle color="gray.500">
						Kenapa sih kami sampe bisa ada d sini dan membangun semua ini?
					</SectionSubTitle>
					{!isLoading && about ? (
						<>
							<Text
								color={"gray.700"}
								lineHeight={"7"}
								textAlign={"justify"}
								noOfLines={9}
							>
								{about.body}
							</Text>
							<Link
								_hover={{
									textDecor: "none",
									color: "pink.500",
								}}
							>
								read more ...
							</Link>
						</>
					) : (
						<Text>Loading ...</Text>
					)}
				</Stack>
			</Box>
		</Flex>
	);
};

export default AboutSection;
