import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import UserProfile from "components/UserProfile/index";
import UserGames from "components/UserGames/index";
import UserPreferences from "components/UserPreferences/index";

const Home = (props) => {
	const { match, history } = props;
	const { params } = match;
	const { page } = params;

	const tabNameToIndex = {
		0: "profile",
		1: "games",
		2: "preferences"
	};

	const indexToTabName = {
		profile: 0,
		games: 1,
		preferences: 2
	};

	const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);

	const handleChange = (event, newValue) => {
		history.push(
			`/users/:userid/${tabNameToIndex[newValue]}`
		);
		setSelectedTab(newValue);
	};

	return (
		<>
				<Tabs value={selectedTab} onChange={handleChange}>
					<Tab label="Perfil" />
					<Tab label="Pachangas" />
					<Tab label="Preferencias" />
				</Tabs>
			{selectedTab === 0 && <UserProfile />}
			{selectedTab === 1 && <UserGames />}
			{selectedTab === 2 && <UserPreferences />}
		</>
	);
};

export default Home;
