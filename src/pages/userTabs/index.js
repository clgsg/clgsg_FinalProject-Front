import {useState} from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

import UserProfile from "components/UserProfile";
import UserGames from "components/UserGames";
import UserPreferencesForm from "components/UserPreferencesForm";

const StyledTabs = styled((props) => (
	<Tabs
		{...props}
		TabIndicatorProps={{
			children: <span className="MuiTabs-indicatorSpan" />,
		}}
	/>
))({
	"& .MuiTabs-indicator": {
		display: "flex",
		justifyContent: "center",
		backgroundColor: "white",
	},
	"& .MuiTabs-indicatorSpan": {
		width: "100%",
		backgroundColor: "teal",
	},
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
	({ theme }) => ({
		textTransform: "none",
		fontWeight: theme.typography.fontWeightRegular,
		fontSize: theme.typography.pxToRem(15),
		marginRight: theme.spacing(1),
		color: "teal",
		"&.Mui-selected": {
			color: "teal",
		},
		"&.Mui-focusVisible": {
			backgroundColor: "pink",
		},
	})
);
function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

export default function ProfileTabs() {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>

			<Box sx={{ bgcolor: "rgb(252, 248, 248)" }}>
				<StyledTabs
					value={value}
					onChange={handleChange}
					aria-label="user-profile-tabs"
				>
					<StyledTab
						label="Perfil"
						{...a11yProps(0)}
						value={value}
						index={0}
					>
						<TabPanel>
							<UserProfile />
						</TabPanel>
					</StyledTab>
					<StyledTab
						label="Pachangas"
						{...a11yProps(1)}
						value={value}
						index={1}
					>
						<TabPanel>
							<UserGames />
						</TabPanel>
					</StyledTab>
					<StyledTab
						label="Preferencias"
						{...a11yProps(2)}
						value={value}
						index={2}
					>
						<TabPanel>
							<UserPreferencesForm />
						</TabPanel>
					</StyledTab>
				</StyledTabs>
				<Box
					sx={{
						p: 3,
						bgcolor: "white",
						borderColor: "teal",
						textColor: "teal",
					}}
				/>
			</Box>
		</>
	);
}
