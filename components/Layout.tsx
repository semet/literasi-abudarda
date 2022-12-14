import { Box } from "@chakra-ui/react";
import { Fragment } from "react";
import FooterContainer from "./foot/FooterContainer";
import ScrollToTop from "./foot/ScrollToTop";
import SubscriptionForm from "./foot/SubscriptionForm";
import HeaderContainer from "./head/HeaderContainer";

interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<Fragment>
			{/* header container */}
			<HeaderContainer />
			{/* content */}
			{children}
			{/* Subscription Form */}
			<SubscriptionForm />
			{/* Footer Container */}
			<FooterContainer />
			{/* ScrollToTop */}
			<ScrollToTop />
		</Fragment>
	);
};

export default Layout;
