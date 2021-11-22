import TUpcomingGames from "../../components/Tables/TUpcomingGames";
import { Button, Box, Stack} from "@chakra-ui/react";
// import { Theme } from "@chakra-ui/theme";

const Homepage = () => {
	return (
		<Stack>
			<h1> Esta es la página de inicio </h1>
			<Box>
				<h2> Próximas pachangas:</h2>
				<TUpcomingGames />
			</Box>
			<Box>
				<p>¿Ya tienes cuenta?</p>
				<Button className="LoginButton"
					text="Acceder"
					to="login">Acceder</Button>

				<p>¿Aún no tienes cuenta?</p>
				<Button>Registrarse</Button>
			</Box>
		</Stack>
	);
}

export default Homepage