import {
	Box,
	Button,
	Divider,
	Flex,
	Heading,
	Icon,
	IconButton,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import {
	FaCommentAlt,
	FaRegCalendarAlt,
	FaThumbsDown,
	FaThumbsUp,
	FaUserAlt,
} from "react-icons/fa";
import FictionCommentSection from "../../components/fiction/FictionCommentSection";
import FictionMainCard from "../../components/fiction/FictionMainCard";
import FictionSidebar from "../../components/fiction/FictionSidebar";
import LayoutSecondary from "../../components/LayoutSecondary";

//todo: Change file name to [id].tsx
const FictionDetail: NextPage = () => {
	return (
		<LayoutSecondary title={"Karya Fiksi"}>
			<Head>
				<title>Karya Fiksi</title>
			</Head>
			<Box p={"4"}>
				<Flex gap={12}>
					<Box w={{ base: "full" }}>
						<Stack rounded={"md"} overflow={"hidden"} gap={6}>
							<Box maxH={"600px"} overflow={"hidden"} bg={"red"}>
								<Image
									src={"/images/blog/06.jpg"}
									alt={"Detail"}
									objectFit={"cover"}
									w={"full"}
								/>
							</Box>
							<Stack gap={4}>
								<Heading>Lorem ipsum dolor, sit amet consectetur.</Heading>
								<Flex justify={"space-between"} alignItems={"center"}>
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

									<Stack direction={"row"} gap={4}>
										<Flex alignItems={"center"} gap={2}>
											0
											<IconButton
												aria-label="like"
												icon={<FaThumbsUp />}
												rounded={"full"}
												colorScheme={"facebook"}
												size={"sm"}
											/>
										</Flex>

										<Flex alignItems={"center"} gap={2}>
											0
											<IconButton
												aria-label="like"
												icon={<FaThumbsDown />}
												rounded={"full"}
												colorScheme={"red"}
												size={"sm"}
											/>
										</Flex>
									</Stack>
								</Flex>

								<Text textAlign={"justify"}>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Molestiae aliquam hic esse perferendis, sunt excepturi nesciunt
									repellat animi. Corrupti quaerat iure at odit praesentium error
									pariatur sunt sed maiores reprehenderit? Lorem ipsum dolor, sit
									amet consectetur adipisicing elit. Quae, animi dicta deleniti
									labore repudiandae laborum expedita architecto, excepturi
									deserunt ut quos. Aspernatur similique voluptatibus omnis
									porro? Maxime id voluptate ex? Lorem ipsum dolor sit amet
									consectetur adipisicing elit. Blanditiis quas vero aspernatur
									ipsa nobis maxime suscipit fugiat quis quos dicta. Fugit
									repellendus beatae porro ex. Nisi iste a ducimus ab. Lorem
									ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
									eos consequatur. Ex incidunt consectetur, quae qui tempore
									eaque cumque! Id maxime tempora enim ab! Ullam numquam
									dignissimos perferendis nobis iste!
								</Text>
								<Divider variant={"solid"} />
								{/* CommentSection */}
								<FictionCommentSection />
							</Stack>
						</Stack>
					</Box>
					<Box display={{ base: "none", lg: "flex" }} w={"30%"}>
						{/* Sidebar */}
						<FictionSidebar />
					</Box>
				</Flex>
			</Box>
		</LayoutSecondary>
	);
};

export default FictionDetail;
