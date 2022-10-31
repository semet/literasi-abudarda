import { Fragment } from "react";
import FooterContainer from "./foot/FooterContainer";
import ScrollToTop from "./foot/ScrollToTop";
import SubscriptionForm from "./foot/SubscriptionForm";
import SecondaryHeaderContainer from "./head/SecondaryHeaderContainer";

interface Props {
	children: React.ReactNode;
	title: string;
}
const LayoutSecondary: React.FC<Props> = ({ children, title }) => {
	return (
		<Fragment>
			<SecondaryHeaderContainer title={title} />
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
