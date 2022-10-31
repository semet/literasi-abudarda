import { Fragment } from "react";
import FooterContainer from "./foot/FooterContainer";
import ScrollToTop from "./foot/ScrollToTop";
import SubscriptionForm from "./foot/SubscriptionForm";
import SecondaryHeaderContainer from "./head/SecondaryHeaderContainer";

interface Props {
	children: React.ReactNode;
}
const LayoutSecondary: React.FC<Props> = ({ children }) => {
	return (
		<Fragment>
			<SecondaryHeaderContainer />
			{/* content */}
			{children}
			{/* Subscription Form */}
			<SubscriptionForm />
			{/* Footer Container */}
			<FooterContainer />
			<ScrollToTop />
		</Fragment>
	);
};

export default LayoutSecondary;
