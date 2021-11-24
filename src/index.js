import { StrictMode } from "react";
import ReactDOM from "react-dom";
import routes from "routes"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";


import App from "pages/App"
import TopHeader from "components/TopHeader";

ReactDOM.render(
	<StrictMode>
		<TopHeader />
			<BrowserRouter>
				<Switch>
					{routes.map((route, index) => (
						<Route {...route} key={index} />
					))}
				<Redirect to="/home" />
					<App/>
				</Switch>
			</BrowserRouter>
	</StrictMode>,
	document.getElementById("root")
);