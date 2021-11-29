import GameDetails from "components/GameDetails";
import Button from "components/Button";
import "index.scss";


const gameInfo = () => {
	return (
		<>
			<h2>Detalles de esta pachanga:</h2>
			<GameDetails/>
			<Button text={"Volver"} to="users/games/{userid}"/>
			<Button text={"¡Me apunto!"} />
		</>
	);
};

export default gameInfo
