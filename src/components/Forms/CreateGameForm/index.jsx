import { useHistory } from "react-router";
import { Button, ButtonGroup } from "@chakra-ui/react"
import DropDownList from "components/Forms/elements/DropDownList";
import RadioButton from "components/Forms/elements/RadioButton";
import Calendar  from "components/Forms/elements/Calendar";
import LongText from "components/Forms/elements/LongText";

function CreateGameForm() {

	const handleClick = () =>{
		if (Button.className === 'CancelBttn'){
			history.push('/userGames')
		}
		if (Button.className === "CreateGameBttn") {
			history.push("/userGames");
		}

	return (
		<>
			<h2>Qué</h2>
			<DropDownList />
			<h2>Fecha</h2>
			<Calendar />
			<h2>Hora</h2>
			<DropDownList />
			<h2>Dónde</h2>
			<DropDownList />
			<h2>Deporte adaptado</h2>
			<RadioButton />
			<h2>Hombres/Mujeres/Mixto</h2>
			<DropDownList />
			<h2>Comentarios</h2>
			<LongText />
			<Button
				className="CancelBttn"
				text="Cancelar"
				onClick={handleClick}
				to="userGames"
			>
			</Button>
			<Button
				className="CreateGameBttn"
				text="Crear"
				onClick={handleClick}
				to="UserGames"   //* ¿nombre del componente, parte de la url específica...?
			/>
		</>
	);
}
}
export default CreateGameForm;
