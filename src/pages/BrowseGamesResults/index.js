
import { ButtonGroup, Button } from "@chakra-ui/react";
import TBrowseGamesResults from "../../components/Tables/TBrowseGamesResults";
// import {customTheme} from "../../theme";

const BrowseGamesResults = () => {
	return (
		<>
			<h1>Resultado de la búsqueda</h1>
			<TBrowseGamesResults />
			<ButtonGroup>
				<Button text={"Volver a buscar"}/>
				<Button text={"Volver a mis pachangas"}/>
			</ButtonGroup>
		</>
	);
};

export default BrowseGamesResults;
