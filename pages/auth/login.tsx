import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Heading,
	Input,
	ModalHeader,
	Stack,
	Text,
	useToast,
} from "@chakra-ui/react";
import { InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import LayoutSecondary from "../../components/LayoutSecondary";
import {
	getProviders,
	getCsrfToken,
	getSession,
	signIn,
	useSession,
} from "next-auth/react";
import { CtxOrReq } from "next-auth/client/_utils";
import ChakraNextLink from "../../components/shared/ChakraNextLink";
import Head from "next/head";

const LoginPage = ({
	providers,
	csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const toast = useToast();
	const { data, status } = useSession();
	//

	const loginWithCredential = () => {
		setIsLoading(true);
		signIn("credentials", {
			redirect: false,
			email: email,
			password: password,
		}).then((res) => {
			if (res!.ok) {
				setIsLoading(false);
				toast({
					title: "Success",
					description: "You're good to go",
					status: "success",
					duration: 9000,
					isClosable: true,
					position: "top",
				});
				setTimeout(() => {
					router.back();
				}, 1000);
			} else {
				setIsLoading(false);
				toast({
					title: "Oops",
					description:
						res?.error == "CredentialsSignin"
							? "Email dan Password tidak valid"
							: "",
					status: "error",
					duration: 9000,
					isClosable: true,
					position: "top",
				});
			}
		});
	};
	return (
		<LayoutSecondary title="User Login">
			<Head>
				<title>Login Page</title>
			</Head>
			<Box w={"full"} p={4} display={"flex"} justifyContent={"center"}>
				<>
					{status !== "unauthenticated" && status !== "loading" ? (
						<Stack
							w={"600px"}
							maxW={"600px"}
							bg={"gray.100"}
							p={"6"}
							rounded={"lg"}
							shadow={"lg"}
							color={"gray.700"}
						>
							<Heading fontSize={"xl"}>Anda sudh berhasil Login</Heading>

							<Text>Email: {data?.user?.email}</Text>
							<Text>Nama: {data?.user?.name}</Text>
						</Stack>
					) : (
						<>
							{providers ? (
								<Box
									as={"form"}
									w={"600px"}
									maxW={"600px"}
									bg={"gray.100"}
									p={"6"}
									rounded={"lg"}
									shadow={"lg"}
								>
									<Stack gap={6}>
										<FormControl isRequired>
											<FormLabel htmlFor={"email"}>Email</FormLabel>
											<Input
												type={"email"}
												name={"email"}
												id={"email"}
												value={email}
												onChange={(e) => setEmail(e.target.value)}
											/>
										</FormControl>
										<FormControl isRequired>
											<FormLabel htmlFor={"password"}>password</FormLabel>
											<Input
												type={"password"}
												name={"password"}
												id={"password"}
												value={password}
												onChange={(e) => setPassword(e.target.value)}
											/>
										</FormControl>
										<ChakraNextLink
											href={"#"}
											_hover={{
												textDecor: "none",
												color: "pink.500",
											}}
										>
											Lupa password ?
										</ChakraNextLink>
										<Button
											variant={"outline"}
											colorScheme={"twitter"}
											onClick={(e) => {
												e.preventDefault();
												loginWithCredential();
											}}
										>
											Login
										</Button>
									</Stack>
								</Box>
							) : null}
						</>
					)}
				</>
			</Box>
		</LayoutSecondary>
	);
};

export default LoginPage;

export const getServerSideProps = async (context: CtxOrReq | undefined) => {
	const providers = await getProviders();
	const csrfToken = await getCsrfToken(context);
	const session = await getSession(context);

	return {
		// redirect: {
		// 	destination: "/",
		// },
		props: { providers, csrfToken },
	};
};
