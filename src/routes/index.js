// import UserGames from "components/UserGames";
// import BrowseGames from "pages/browseGames";
// import BrowseGamesResults from "pages/browseGamesResults";
// import CreateGame from "pages/createGame";
import ForgotPassword from "pages/forgotPassword";
import GameDetails from "pages/gameDetails";
import Homepage from "pages/homepage";
import LoginPage from "pages/loginPage";
import SignupPage from "pages/signupPage";
// import UpdateEmail from "pages/updateEmail";
// import UpdatePassword from "pages/updateEmail";
// import UpdatePic from "pages/updatePic";
import UserTabs from "pages/userTabs";

const Routes = [
	// {
	// 	path: "/games",
	// 	component: BrowseGames,
	// 	exact: true,
	// },
	// {
	// 	path: "/games/filtered",
	// 	component: BrowseGamesResults,
	// 	exact: true,
	// },
	// {
	// 	path: "/games/new",
	// 	component: CreateGame,
	// 	exact: true,
	// },
	{
		path: "/auth/pwd/forgotten",
		component: ForgotPassword,
		exact: true,
	},
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
	// {
	// 	path: "/auth/email/update",
	// 	component: UpdateEmail,
	// 	exact: true,
	// },
	// {
	// 	path: "/auth/pwd/update",
	// 	component: UpdatePassword,
	// 	exact: true,
	// },
	// {
	// 	path: "/users/030fbdfa-ad94-42bd-9633-ee4fa1bf3631/updatepic",
	// 	component: UpdatePic,
	// 	exact: true,
	// },
	{
		path: `/users/030fbdfa-ad94-42bd-9633-ee4fa1bf3631/:tab?`,
		render: "{props => <App {...props}/>}",
		component: UserTabs,
		exact: true,
	},
];
export default Routes;
