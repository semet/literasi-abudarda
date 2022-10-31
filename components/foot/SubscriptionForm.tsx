/* eslint-disable react/no-unescaped-entities */
import { Box, Container, Flex, Heading, IconButton, Input } from "@chakra-ui/react";
import React from "react";
import { FaEnvelope, FaSearch } from "react-icons/fa";

const SubscriptionForm = () => {
	return (
		<Box
			bg={"brand"}
			p={"4"}
			display={"flex"}
			flexDir={"column"}
			justifyContent={"center"}
			alignItems={"center"}
			gap={"6"}
		>
			<Heading
				py={4}
				color={"white"}
				letterSpacing={"wider"}
				textAlign={"center"}
				fontSize={{
					base: "xl",
					md: "3xl",
				}}
			>
				Jangan lewatkan update terkini dari kami
			</Heading>
			<Container
				maxW={"container.sm"}
				bg={"white"}
				px={"4"}
				py={"2"}
				w={"full"}
				rounded={"3xl"}
				display={"flex"}
				gap={4}
				position={"relative"}
				role={"group"}
			>
				<Input
					type={"text"}
					variant={"unstyled"}
					w={"85%"}
					p={"1"}
					placeholder={"example@email.com"}
					fontStyle={"italic"}
					color={"gray.500"}
					_placeholder={{
						color: "gray.400",
					}}
				/>
				<Box w={"15%"} position={"relative"}>
					<IconButton
						aria-label="Subscribe form"
						icon={<FaEnvelope />}
						color={"white"}
						colorScheme={"messenger"}
						position={"absolute"}
						right={0}
						top={"50%"}
						transform={"translateY(-50%)"}
						w={"100px"}
						rounded={"full"}
						_groupHover={{
							right: "-5",
						}}
						transition={"all 1s ease"}
					/>
				</Box>
			</Container>
		</Box>
	);
};

export default SubscriptionForm;
