import { useState, useEffect } from "react";
const useScroll = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		setIsScrolled(window.scrollY >= 75 ? true : false);

		const handleScroll = () => {
			if (window.scrollY >= 75) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [isScrolled]);

	return {
		isScrolled,
	};
};

export default useScroll;
