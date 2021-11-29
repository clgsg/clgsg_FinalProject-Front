import Button from "components/Button";
import "components/index.scss";
import TBrowseGamesResults from "../../components/Tables/TBrowseGamesResults";

const BrowseGamesResults = () => {
	return (
		<>
			<h1>Resultado de la búsqueda</h1>
			<TBrowseGamesResults />
			<div>
				<Button text="Volver a buscar" />
				<Button
					text="Volver a mis pachangas"
					to="users/030fbdfa-ad94-42bd-9633-ee4fa1bf3631/games"
				/>
			</div>
		</>
	);
};

export default BrowseGamesResults;
