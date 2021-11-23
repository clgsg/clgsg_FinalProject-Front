import TUpcomingGames from "../../components/Tables/TUpcomingGames";
import Button from "components/Button";
import "components/index.scss";

const Homepage = () => {
	return (
		<div>
			<h1> Esta es la página de inicio </h1>
			<div>
				<h2> Próximas pachangas:</h2>
				<TUpcomingGames />
			</div>
			<div>
				<p>¿Ya tienes cuenta?</p>
				<Button className="LoginButton"
					text="Acceder"
					to="login">Acceder</Button>

				<p>¿Aún no tienes cuenta?</p>
				<Button>Registrarse</Button>
			</div>
		</div>
	);
}

export default Homepage