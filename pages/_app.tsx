import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../config/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<SessionProvider session={pageProps.session}>
			<ChakraProvider theme={theme}>
				<QueryClientProvider client={queryClient}>
					<Component {...pageProps} />
				</QueryClientProvider>
			</ChakraProvider>
		</SessionProvider>
	);
}

export default MyApp;
