import Button from "@chakra-ui/button";
import DropDownList from "Forms/elements/DropDownList";
import RadioButton from "Forms/elements/RadioButton";
import  Calendar  from "Forms/elements/Calendar";
import LongText from "Forms/elements/LongText";

function CreateGameForm() {
	return (
		<>
			<h2>Qué</h2>
			<DropDownList/>
			<h2>Fecha</h2>
			<Calendar/>
			<h2>Hora</h2>
			<DropDownList/>
			<h2>Dónde</h2>
			<DropDownList/>
			<h2>Deporte adaptado</h2>
			<RadioButton/>
			<h2>Hombres/Mujeres/Mixto</h2>
			<DropDownList/>
			<h2>Comentarios</h2>
			<LongText/>
			<Button text={"Cancelar"}/>
			<Button text={"Crear pachanga"}/>
		</>
	);
}

export default CreateGameForm;
