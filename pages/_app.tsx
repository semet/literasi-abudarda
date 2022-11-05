import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../config/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<SessionProvider session={pageProps.session}>
			<ChakraProvider theme={theme}>
				<QueryClientProvider client={queryClient}>
					<Head>
						<meta charSet="UTF-8" />
						<meta name="viewport" content="width=device-width, initial-scale=1.0" />
						<meta name="description" content="Abudardapedia" />
						<meta
							name="keywords"
							content="Abudarda, Abudardapedia, Media Abudarda, E-Learning, Lombok Tengah, NTB, Nusa Tenggara Barat"
						/>
						<meta name="author" content="Mollusca" />
						<meta name="robots" content="noindex" />
					</Head>
					<Component {...pageProps} />
				</QueryClientProvider>
			</ChakraProvider>
		</SessionProvider>
	);
}

export default MyApp;
