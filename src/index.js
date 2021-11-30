import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import routes from "routes";
import App from "pages/App"
import TopHeader from "components/TopHeader";



ReactDOM.render(
	<StrictMode>
		<TopHeader />
			<BrowserRouter>
				<CssBaseline/>
				<Switch>
					{routes.map((route, index) => (
						<Route {...route} key={index} />
					))}
					{routes.map((route, index)=> (
						<Route {...route} key={index}/>
					))}
				<Redirect to="/home" />
					<App/>
				</Switch>
			</BrowserRouter>
	</StrictMode>,
	document.getElementById("root")
);