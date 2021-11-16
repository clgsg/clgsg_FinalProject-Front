import { useHistory } from "react";
import TUpcomingGames from "../../components/Tables/TUpcomingGames";
import Button from "components/Button";

const Homepage = () => {
	const history = useHistory()

	const handleClick = () =>{
		if (Button.className === 'LoginBttn'){
			history.push('/login')
		}
		if (Button.className === "SignupBttn") {
			history.push("/register");
		}
	}

	return (
		<>
			<h1> Esta es la página de inicio </h1>
			<div>
				<h2> Próximas pachangas:</h2>
				<TUpcomingGames />
			</div>
			<div>
				<p>¿Ya tienes cuenta?</p>
				<Button className="LoginBttn"
					text="Acceder"
					onClick={handleClick}
					to="login">Log in</Button>
			</div>
			<div>
				<p>¿Aún no tienes cuenta?</p>
				<Button
					className="SignupBttn"
					text='Registrarse'
					onClick={handleClick}
					to="signup"></Button>
			</div>
		</>
	);
}

export default Homepage