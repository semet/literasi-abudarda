import {
	Avatar,
	Box,
	Button,
	Flex,
	IconButton,
	List,
	ListItem,
	Skeleton,
	Stack,
	Text,
	Textarea,
	useToast,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { NonFictionCommentWithUser } from "common";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import { FaLock } from "react-icons/fa";
import * as Yup from "yup";

const NonFictionCommentSection: React.FC<{ articleId: string }> = ({ articleId }) => {
	const { data: user, status } = useSession();
	const router = useRouter();
	const toast = useToast();
	//
	const {
		data: nonFictionArticleComments,
		isLoading,
		isError,
		refetch,
	} = useQuery<NonFictionCommentWithUser[]>(["nonFictionArticleComments"], async () => {
		const res = await fetch(`/api/nonfiction/comment/${articleId}`);
		const data = await res.json();
		return data;
	});
	//
	const formik = useFormik({
		initialValues: {
			commentBody: "",
		},
		validationSchema: Yup.object({
			commentBody: Yup.string().required(),
		}),
		onSubmit: async (values) => {
			const res = await fetch("/api/nonfiction/comment/store", {
				method: "POST",
				body: JSON.stringify({
					articleId: articleId,
					userEmail: user?.user?.email,
					...values,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			});
			const data = await res.json();

			if (res.status === 201) {
				toast({
					title: "Success",
					description: data.message,
					status: "success",
					duration: 9000,
					isClosable: true,
					position: "top",
				});
				formik.resetForm();
				refetch();
			} else {
				toast({
					title: "Failed",
					description: data.message,
					status: "error",
					duration: 9000,
					isClosable: true,
					position: "top",
				});
			}
		},
	});
	return (
		<Stack gap={"4"} p={4}>
			<Text fontSize={"lg"} fontWeight={"semibold"}>
				Comments
			</Text>
			<Box>
				{status !== "loading" && status !== "unauthenticated" ? (
					<Box experimental_spaceY={4}>
						<Textarea
							placeholder={"write your comment"}
							name={"commentBody"}
							id={"commentBody"}
							onChange={formik.handleChange}
							value={formik.values.commentBody}
							errorBorderColor={"pink.400"}
							onBlur={formik.handleBlur}
							isInvalid={formik.errors.commentBody !== undefined}
						></Textarea>

						<Button
							colorScheme={"messenger"}
							rounded={"3xl"}
							onClick={() => formik.handleSubmit()}
						>
							Post
						</Button>
					</Box>
				) : (
					<Box position={"relative"}>
						<Textarea
							placeholder={"Login to write comment"}
							_placeholder={{
								textAlign: "center",
							}}
							disabled={true}
							_disabled={{
								color: "gray.600",
							}}
						></Textarea>
						<Box
							position={"absolute"}
							top={0}
							bg={"blackAlpha.500"}
							w={"full"}
							h={"full"}
							display={"flex"}
							justifyContent={"center"}
							alignItems={"start"}
							rounded={"lg"}
						>
							<IconButton
								aria-label="Login Button"
								icon={<FaLock />}
								mt={"-7"}
								rounded={"full"}
								colorScheme={"twitter"}
								onClick={() => router.push("/auth/login")}
							/>
						</Box>
					</Box>
				)}
			</Box>
			<Skeleton isLoaded={!isLoading}>
				<List spacing={"8"}>
					{nonFictionArticleComments !== undefined && (
						<>
							{nonFictionArticleComments.length > 0 ? (
								<>
									{nonFictionArticleComments.map((comment) => (
										<ListItem key={comment.id}>
											<Flex gap={4}>
												<Avatar
													src={
														comment.user.image
															? comment.user.image
															: "/images/team/01.jpg"
													}
													name={comment.user.name}
												/>
												<Box
													boxShadow={"base"}
													p={4}
													rounded={"lg"}
													flex={1}
													pos={"relative"}
												>
													<Text>{comment.body}</Text>
												</Box>
											</Flex>
										</ListItem>
									))}
								</>
							) : (
								<Text fontSize={"xl"} fontWeight={"semibold"}>
									No comment ...
								</Text>
							)}
						</>
					)}
				</List>
			</Skeleton>
		</Stack>
	);
};

export default NonFictionCommentSection;
