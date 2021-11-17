import Button from "components/Button";
import {MultiCheckbox} from "components/Forms/elements/MultiCheckbox"
import {RadioButton} from "components/Forms/elements/RadioButton"


 function UserPreferencesForm(){

	return (
		<>
			<h2>Qué</h2>
			<MultiCheckbox></MultiCheckbox>
			<h2>Deporte adaptado</h2>
			<RadioButton></RadioButton>
			<h2>Hombres/Mujeres/Mixto</h2>
			<MultiCheckbox></MultiCheckbox>
			<Button>Cancelar</Button>
			<Button>Confirmar</Button>
		</>
	);
}

export default UserPreferencesForm