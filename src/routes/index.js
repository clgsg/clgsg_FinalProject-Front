import BrowseGames from "pages/browseGames";
import BrowseGamesResults from "pages/browseGamesResults";
import CreateGame from "pages/createGame";
import ForgotPassword from "pages/forgotPassword";
import GameDetails from "pages/gameDetails";
import Homepage from "pages/homepage";
import LoginPage from "pages/loginPage";
import SignupPage from "pages/signupPage";
import UpdateEmail from "pages/updateEmail";
import UpdatePassword from "pages/updateEmail";
import UpdatePic from "pages/updatePic";
import UserGames from "pages/userGames";
import UserPreferences from "pages/userPreferences";
import UserProfile from "pages/userProfile";

const Routes = [
	{
		path: "/browsegames",
		component: BrowseGames,
		exact: true,
	},
	{
		path: "/browsegresults",
		component: BrowseGamesResults,
		exact: true,
	},
	{
		path: "/newgame",
		component: CreateGame,
		exact: true,
	},
	{
		path: "/forgotpwd",
		component: ForgotPassword,
		exact: true,
	},
	{
		path: "/gameinfo",
		component: GameDetails,
		exact: true,
	},
	{
		path: "/home",
		component: Homepage,
		exact: true,
	},
	{
		path: "/login",
		component: LoginPage,
		exact: true,
	},
	{
		path: "/signup",
		component: SignupPage,
		exact: true,
	},
	{
		path: "/emailupdate",
		component: UpdateEmail,
		exact: true,
	},
	{
		path: "/pwdupdate",
		component: UpdatePassword,
		exact: true,
	},
	{
		path: "/picupdate",
		component: UpdatePic,
		exact: true,
	},
	{
		path: "/usersgames",
		component: UserGames,
		exact: true,
	},
	{
		path: "userpreferences",
		component: UserPreferences,
		exact: true,
	},
	{
		path: "/userprofile",
		component: UserProfile,
		exact: true,
	},
];
export default Routes;
