import GameDetails from "pages/gameDetails";
import Homepage from "pages/homepage";
import LoginPage from "pages/loginPage";
import SignupPage from "pages/signupPage";
import UserTabs from "pages/userTabs";

const Routes = [
	{
		path: "/game/:gameid/info",
		component: GameDetails,
		exact: true,
	},
	{
		path: "/home",
		component: Homepage,
		exact: true,
	},
	{
		path: "/auth/login",
		component: LoginPage,
		exact: true,
	},
	{
		path: "/auth/signup",
		component: SignupPage,
		exact: true,
	},
	{
		path: `/users/030fbdfa-ad94-42bd-9633-ee4fa1bf3631/:tab?`,
		render: "{props => <App {...props}/>}",
		component: UserTabs,
		exact: true,
	},

	];
export default Routes;
