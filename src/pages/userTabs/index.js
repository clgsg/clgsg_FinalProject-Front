import UserGames from "components/UserGames"
import UserPreferences from "components/UserPreferences"
import UserProfile from "components/UserProfile"
import ProfileTabs from "components/ProfileTabs"


const UserTabs = () => {
return (
		<ProfileTabs>
			<UserProfile/>
			<UserGames/>
			<UserPreferences/>
		</ProfileTabs>
	);
};

export default UserTabs