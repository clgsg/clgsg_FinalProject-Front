import Bttn from "components/Button";
import {MultiCheckbox} from "components/Forms/elements/MultiCheckbox"


 function UserPreferencesForm(){

	return (
		<>
			<h2>Qué</h2>
			<MultiCheckbox></MultiCheckbox>
			<h2>Deporte adaptado</h2>
			{/* <RadioButton></RadioButton> */}
			<h2>Hombres/Mujeres/Mixto</h2>
			<MultiCheckbox></MultiCheckbox>
			<Bttn text={"Cancelar"}/>
			<Bttn text={"Confirmar"}/>
		</>
	);
}

export default UserPreferencesForm