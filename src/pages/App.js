import { BrowserRouter, Route, Switch } from "react-router-dom";
import SecurityProvider from "context/SecurityProvider";
import Homepage from "./homepage";
import LoginPage from "./loginPage";
import SignupPage from "./signupPage";
import UserTabs from "./userTabs";



function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<SecurityProvider>
					<Switch>
						<Route>
							<Homepage />
						</Route>
						<Route>
							<LoginPage />
						</Route>
						<Route>
							<SignupPage />
						</Route>
						<Route>
							<UserTabs />
						</Route>

					</Switch>
				</SecurityProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
