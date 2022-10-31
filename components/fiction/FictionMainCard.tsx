import {
	Box,
	Flex,
	Heading,
	Icon,
	IconButton,
	Image,
	Link,
	Stack,
	StackDivider,
	Text,
} from "@chakra-ui/react";
import React from "react";
import {
	FaCommentAlt,
	FaFacebookF,
	FaPinterest,
	FaRegCalendarAlt,
	FaTwitter,
	FaUserAlt,
	FaWhatsapp,
} from "react-icons/fa";

const FictionMainCard = () => {
	return (
		<Box w={"full"} role={"group"}>
			<Flex
				shadow={"lg"}
				direction={{ base: "column", md: "row" }}
				rounded={"lg"}
				overflow={"hidden"}
			>
				<Box w={{ base: "full", md: "40%" }} overflow={"hidden"}>
					<Image
						src={"/images/blog/travel/05.jpg"}
						alt={"Fictional Story"}
						w={"100%"}
						h={"100%"}
						objectFit={"cover"}
						_groupHover={{
							transform: "scale(1.1)",
						}}
						transition={"all .5s ease"}
					/>
				</Box>
				<Box flex={1} bg={"#F5F5F5"} p={"4"}>
					<Stack gap={4}>
						{/* Post Title */}
						<Heading
							as={"h3"}
							fontSize={{ base: "2xl", sm: "3xl" }}
							color={"#364F6B"}
						>
							Lorem ipsum dolor sit amet consectetur adipisicing.
						</Heading>
						{/* Meta */}
						<Stack direction={"row"} align={"center"} gap={2}>
							<Flex align={"center"} gap={2} color={"gray.500"}>
								<Icon as={FaRegCalendarAlt} fontSize={"xs"} />
								<Text fontSize={"xs"}>{new Date().toDateString()}</Text>
							</Flex>
							<Flex align={"center"} gap={2} color={"gray.500"}>
								<Icon as={FaUserAlt} fontSize={"xs"} />
								<Text fontSize={"xs"}>Rifki</Text>
							</Flex>
							<Flex align={"center"} gap={2} color={"gray.500"}>
								<Icon as={FaCommentAlt} fontSize={"xs"} />
								<Text fontSize={"xs"}>10 Comments</Text>
							</Flex>
						</Stack>
						{/* Summary */}
						<Text
							color={"#3C4048"}
							lineHeight={"tall"}
							textAlign={"justify"}
							noOfLines={7}
						>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius non
							dicta perferendis fugiat nisi. Voluptatum corporis aliquid facere
							officia repellat, amet odio reprehenderit enim vero culpa odit
							temporibus ex magnam. Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Saepe ipsum pariatur aliquam exercitationem
							veritatis dolore cumque sit quidem dignissimos dolorum assumenda
							similique nemo quasi aut, optio magnam odio ab animi. Lorem ipsum
							dolor sit amet consectetur adipisicing elit. Est recusandae quod odio
							voluptate praesentium! Molestias dignissimos nesciunt delectus
							dolore, quam recusandae totam, perspiciatis molestiae quos nam iure
							animi consectetur aliquam. Lorem ipsum dolor sit amet consectetur,
							adipisicing elit. Iure possimus officiis illum dicta rerum harum
							magnam facere adipisci magni ea quis provident, soluta, ipsam
							architecto ut tenetur exercitationem fugiat doloribus!
						</Text>
						{/* Read more and buttons */}
						<Flex justify={"space-between"}>
							<Link
								href={"#"}
								color={"#FC5185"}
								_hover={{
									textDecor: "none",
									color: "#364F6B",
								}}
							>
								Read more ...
							</Link>
							<Stack direction={"row"}>
								<IconButton
									aria-label="share"
									icon={<FaFacebookF />}
									size={"sm"}
									rounded={"full"}
									colorScheme={"facebook"}
									shadow={"lg"}
								/>
								<IconButton
									aria-label="share"
									icon={<FaTwitter />}
									size={"sm"}
									rounded={"full"}
									colorScheme={"twitter"}
									shadow={"lg"}
								/>
								<IconButton
									aria-label="share"
									icon={<FaPinterest />}
									size={"sm"}
									rounded={"full"}
									colorScheme={"red"}
									shadow={"lg"}
								/>
								<IconButton
									aria-label="share"
									icon={<FaWhatsapp />}
									size={"sm"}
									rounded={"full"}
									colorScheme={"whatsapp"}
									shadow={"lg"}
								/>
							</Stack>
						</Flex>
					</Stack>
				</Box>
			</Flex>
		</Box>
	);
};

export default FictionMainCard;
