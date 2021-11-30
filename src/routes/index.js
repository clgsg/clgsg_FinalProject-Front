import Homepage from "pages/homepage";
import LoginPage from "pages/loginPage";
import SignupPage from "pages/signupPage";
import GameDetails from "pages/gameDetails";
import UserTabs from "pages/userTabs";

const routes = [
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
		path: "/games/:gameid/info",
		component: GameDetails,
		exact: true,
	},
	{
		path: `/users/:userid/:tab?`,
		render: "{props => <App {...props}/>}",
		component: UserTabs,
		exact: true,
	},
];
export default routes;
