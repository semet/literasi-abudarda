import { Box } from "@chakra-ui/react";
import React from "react";
import FooterContainer from "./foot/FooterContainer";
import SubscriptionForm from "./foot/SubscriptionForm";
import HeaderContainer from "./head/HeaderContainer";

interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<Box>
			{/* header container */}
			<HeaderContainer />
			{/* content */}
			{children}
			{/* Subscription Form */}
			<SubscriptionForm />
			{/* Footer Container */}
			{/* <FooterContainer /> */}
		</Box>
	);
};

export default Layout;
