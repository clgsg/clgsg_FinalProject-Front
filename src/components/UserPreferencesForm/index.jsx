import Button from "components/Button";
import "components/index.scss";

 function UserPreferencesForm(){

	return (
		<>
			<h2>Qué</h2>
			<div>Desplegable de deportes</div>
			<h2>Deporte adaptado</h2>
			<div>Opción múltiple</div>
			<h2>Hombres/Mujeres/Mixto</h2>
			<div>Opción múltiple</div>
			<Button text={"Cancelar"}/>
			<Button text={"Confirmar"}/>
		</>
	);
}

export default UserPreferencesForm