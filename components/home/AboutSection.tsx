import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import SectionSubTitle from "../shared/SectionSubTitle";
import SectionTitle from "../shared/SectionTitle";

const AboutSection = () => {
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
					<Text color={"gray.700"} lineHeight={"7"} textAlign={"justify"}>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
						voluptates. Ad quas omnis, autem est consectetur voluptatum ducimus ipsa
						expedita fugiat rem, quod quidem, facilis praesentium qui veniam
						distinctio eum! Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Iste incidunt ipsum illo perspiciatis praesentium! Maiores eius
						adipisci dolores praesentium voluptas nihil, quos perferendis suscipit
						similique quidem facilis veniam illo sit. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Optio veritatis earum quibusdam sunt eum
						tempora nesciunt? Recusandae, aut! Nostrum ipsum eveniet, odit modi
						officia dolorem sequi obcaecati! Ratione, voluptas perferendis! Lorem
						ipsum dolor sit amet consectetur adipisicing elit. Quaerat, eius. Non
						saepe qui autem accusamus? Excepturi, recusandae. Labore id dolorem odit
						totam placeat, similique voluptate a obcaecati, ipsum neque omnis.
					</Text>
				</Stack>
			</Box>
		</Flex>
	);
};

export default AboutSection;
