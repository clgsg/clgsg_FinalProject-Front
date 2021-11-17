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
		path: "/browse",
		component: BrowseGames,
		exact: true,
	},
	{
		path: "/browse/results",
		component: BrowseGamesResults,
		exact: true,
	},
	{
		path: "/new",
		component: CreateGame,
		exact: true,
	},
	{
		path: "/forgot",
		component: ForgotPassword,
		exact: true,
	},
	{
		path: "/details",
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
		path: "/email/update",
		component: UpdateEmail,
		exact: true,
	},
	{
		path: "/pwd/update",
		component: UpdatePassword,
		exact: true,
	},
	{
		path: "/pic/update",
		component: UpdatePic,
		exact: true,
	},
	{
		path: "/games",
		component: UserGames,
		exact: true,
	},
	{
		path: "/preferences",
		component: UserPreferences,
		exact: true,
	},
	{
		path: "/profile",
		component: UserProfile,
		exact: true,
	},
];
export default Routes;
