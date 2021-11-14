import { Button } from "@chakra-ui/button";
import {MultiCheckbox} from "Forms/elements/MultiCheckbox"
import {RadioButton} from "Forms/elements/RadioButton"


 function UserPreferencesForm(){
	return (
		<>
			<h2>Qué</h2>
			<MultiCheckbox></MultiCheckbox>
			<h2>Deporte adaptado</h2>
			<RadioButton></RadioButton>
			<h2>Hombres/Mujeres/Mixto</h2>
			<MultiCheckbox></MultiCheckbox>
			<Button text={"Cancelar"}></Button>
			<Button text={"Confirmar"}></Button>
		</>
	);
}

export default UserPreferencesForm