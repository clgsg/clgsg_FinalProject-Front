import TUpcomingGames from "../../components/Tables/TUpcomingGames"
import Button from "components/Button"

const Homepage = () => {

	return (
		<>
			<h1> Esta es la página de inicio </h1>
			<div>
				<h2> Próximas pachangas:</h2>
				<TUpcomingGames />
			</div>
			<div>
				<p>¿Ya tienes cuenta?</p>
				<Button text={"Acceder"}></Button>
			</div>
			<div>
				<p>¿Aún no tienes cuenta?</p>
				<Button text={"Registrarse"}></Button>
			</div>
		</>
	);
}

export default Homepage