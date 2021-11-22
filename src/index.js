import React from "react";
import ReactDOM from "react-dom";
import routes from "routes"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ChakraProvider, CSSReset, ColorModeScript, Flex} from "@chakra-ui/react";
import theme from "./theme"
import "theme/styles.css"

// import routes from "routes";

import App from "pages/App"
import TopHeader from "components/TopHeader";

ReactDOM.render(
	<React.StrictMode>
		<ColorModeScript />
		<ChakraProvider theme={theme}>
			import
			<CSSReset />
				<TopHeader />
					<BrowserRouter>
						<Flex h={{base: 'auto', md: '100vh' }} py={[0, 10, 20]} direction={{base: 'column-reverse', md: 'row'}}>
						<Switch>
							{routes.map((route, index) => (
								<Route {...route} key={index} />
							))}
						<Redirect to="/home" />
						<App/>
						</Switch>
						</Flex>
					</BrowserRouter>
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById("root")
);