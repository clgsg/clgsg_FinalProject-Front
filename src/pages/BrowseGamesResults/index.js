import Button from "components/Button"
import TBrowseGamesResults from "../../components/Tables/TBrowseGamesResults";

const BrowseGamesResults = () => {
	return (
		<>
			<h1>Resultado de la búsqueda</h1>
			<TBrowseGamesResults />
			<Button text={"Volver a buscar"}/>
			<Button text={"Volver a mis pachangas"}></Button>
		</>
	);
};

export default BrowseGamesResults;
