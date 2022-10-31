import {
	Avatar,
	Box,
	Flex,
	List,
	ListItem,
	Stack,
	Text,
	Textarea,
} from "@chakra-ui/react";
import React from "react";

const FictionCommentSection = () => {
	return (
		<Stack gap={"4"} p={4}>
			<Text fontSize={"lg"} fontWeight={"semibold"}>
				Comments
			</Text>
			<Box>
				<Textarea placeholder={"write your comment"}></Textarea>
			</Box>
			<List spacing={"8"}>
				{Array(4)
					.fill(0)
					.map((_, i) => (
						<ListItem key={i}>
							<Flex gap={4}>
								<Avatar src={"/images/team/01.jpg"} name={"Some Name"} />
								<Box
									boxShadow={"base"}
									p={4}
									rounded={"lg"}
									flex={1}
									pos={"relative"}
								>
									<Text>
										Lorem, ipsum dolor sit amet consectetur adipisicing elit.
										Dolores quidem, consequuntur at ducimus, eveniet, magni
										dignissimos placeat quasi nobis enim amet libero cupiditate
										repellat sunt tempore aspernatur explicabo corrupti
										voluptate.
									</Text>
								</Box>
							</Flex>
						</ListItem>
					))}
			</List>
		</Stack>
	);
};

export default FictionCommentSection;
