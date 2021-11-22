import { extendTheme, theme as base} from "@chakra-ui/react";
const theme = extendTheme({
	colors: {
		brand: {
			 	50: '#defdf9',
				100: '#bbf1ec',
				200: '#96e6de',
				300: '#6edad0',
				400: '#49cfc3',
				500: '#30b6aa',
				600: '#208e84',
				700: '#10665e',
				800: '#003e39',
				900: '#001715',
				}

		},
	fonts: {
		heading: `Galada, ${base.fonts?.heading}`,
		body: `Verdana, ${base.fonts?.body}`,
	}

});

export default theme

