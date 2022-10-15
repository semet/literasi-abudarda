import { Box } from "@chakra-ui/react";
import { Fragment } from "react";
import FooterContainer from "./foot/FooterContainer";
import SubscriptionForm from "./foot/SubscriptionForm";
import HeaderContainer from "./head/HeaderContainer";

interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<Fragment>
			{/* content */}
			{children}
			{/* Subscription Form */}
			<SubscriptionForm />
			{/* Footer Container */}
			<FooterContainer />
		</Fragment>
	);
};

export default Layout;
