import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import UserProfileForm from "components/Forms/UserProfileForm";
import TSuggestedGames from "components/Tables/TSuggestedGames";
import TUsersGames from "components/Tables/TUsersGames";
import UserPreferencesForm from "components/Forms/UserPreferencesForm";

<Tabs variant="enclosed-colored">
	<TabList>
		<Tab>Perfil</Tab>
		<Tab>Mis pachangas</Tab>
		<Tab>Preferencias</Tab>
	</TabList>

	<TabPanels>
		<TabPanel>
			<UserProfileForm/>
		</TabPanel>
		<TabPanel>
			<TUsersGames/>
			<TSuggestedGames/>
		</TabPanel>
		<TabPanel>
			<UserPreferencesForm/>
		</TabPanel>
	</TabPanels>
</Tabs>;
