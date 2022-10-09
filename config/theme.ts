import "@fontsource/lato";
import "@fontsource/raleway";

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	colors: {
		brand: "#29ace2",
	},
	fonts: {
		heading: `'Raleway', sans-serif`,
		body: `'Lato', sans-serif`,
	},
});

export default theme;
