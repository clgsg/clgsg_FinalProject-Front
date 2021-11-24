import TUpcomingGames from "../../components/Tables/TUpcomingGames";
import Button from "components/Button";
import "components/index.scss";

const Homepage = () => {
	return (
		<div id="homepage">
			<p> Has llegado a megustalapachanga.com </p>
			<div>
				<h2> Próximas pachangas:</h2>
				<TUpcomingGames />
			</div>
			<div>
				<p>¿Ya tienes cuenta?</p>
				<Button className="LoginButton"
					text="Acceder"
					to="login"/>
				<p>¿Aún no tienes cuenta?</p>
				<Button className="SignupButton" text="Registrarse" to="signup"/>
			</div>
		</div>
	);
}

export default Homepage