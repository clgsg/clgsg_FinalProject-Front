// import "@fontsource/gluten/100.css";
// import "@fontsource/gluten/600.css";
// import "@fontsource/raleway/200.css";
// import "@fontsource/raleway/600.css";
// import "@fontsource/source-code-pro/200.css";
// import "@fontsource/source-code-pro/600.css";
import {ButtonStyles as Button} from "./ButtonStyles";
import { extendTheme, theme as base } from "@chakra-ui/react";
const customTheme = extendTheme({
	config: {
		initialColorMode: "light",
		useSystemColorMode: false,		/* 'true' si queremos que el usuario elija modo claro u oscuro*/
		},
	colors: {
		brand: {
			main: "teal",
			second: "orange",
			third: "#9D4F9D",
			fourth: "#F9F871",
			fifth: "#5C74B8",
			// Natural palette: #0FBEBC	#00AAAA	#E2FFFE	#E6F4F1
		},
	},

	fonts: {
		heading: `Gluten, ${base.fonts?.heading}`,
		body: `Raleway, ${base.fonts?.body}`,
		mono: `Source Code Pro, ${base.fonts?.mono}`,
	},
	components: {
		Button,
	}

});

export default customTheme;
