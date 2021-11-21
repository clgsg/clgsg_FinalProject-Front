import Bttn from "components/Button"
import TBrowseGamesResults from "../../components/Tables/TBrowseGamesResults";

const BrowseGamesResults = () => {
	return (
		<>
			<h1>Resultado de la búsqueda</h1>
			<TBrowseGamesResults />
			<Bttn text={"Volver a buscar"}/>
			<Bttn text={"Volver a mis pachangas"}></Bttn>
		</>
	);
};

export default BrowseGamesResults;
