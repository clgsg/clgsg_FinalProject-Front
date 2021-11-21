import TUpcomingGames from "../../components/Tables/TUpcomingGames";
import Bttn from "components/Button";

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
				<Bttn className="LoginBttn"
					text="Acceder"
					// onClick={handleClick}
					to="login">Log in</Bttn>
			</div>
			<div>
				<p>¿Aún no tienes cuenta?</p>
				<Bttn
					className="SignupBttn"
					text='Registrarse'
					// onClick={handleClick}
					to="signup"></Bttn>
			</div>
		</>
	);
}

export default Homepage