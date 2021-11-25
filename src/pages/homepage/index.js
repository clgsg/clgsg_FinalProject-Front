import TUpcomingGames from "../../components/Tables/TUpcomingGames";
import { Box } from "@mui/system";
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
			<Box>
				<div>
				<p>¿Ya tienes cuenta?</p>
				<Button className="LoginButton"
					text="Acceder"
					to="auth/login"/>
				</div>
				<div>
				<p>¿Aún no tienes cuenta?</p>
				<Button className="SignupButton" text="Registrarse" to="auth/signup"/>
				</div>
			</Box>
		</div>
	);
}

export default Homepage