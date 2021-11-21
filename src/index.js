import React from "react";
import ReactDOM from "react-dom";
import routes from "routes"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ChakraProvider, CSSReset, ColorModeScript} from "@chakra-ui/react";
import theme from "./theme"

// import routes from "routes";

import App from "pages/App"
import TopHeader from "components/TopHeader";

ReactDOM.render(
	<React.StrictMode>
		<ColorModeScript initialColorMode={theme.config.initialColorMode} />
		<ChakraProvider theme={theme}>
			<CSSReset />
			<BrowserRouter>
				<TopHeader />
				<Switch>
					{routes.map((route, index) => (
						<Route {...route} key={index} />
					))}
				<Redirect to="/home" />
          <App/>
				</Switch>
			</BrowserRouter>
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById("root")
);