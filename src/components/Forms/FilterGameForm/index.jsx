import { Button } from "@chakra-ui/button";
import { DropDownList } from "Forms/elements/DropDownList";
import { Calendar } from "Forms/elements/Calendar";
import { MultiCheckbox } from "Forms/elements/MultiCheckbox";

function FilterGameForm() {
	return (
		<>
			<h2>Qué</h2>
			<MultiCheckbox/>
			<h2>Fecha</h2>
			<Calendar></Calendar>
			<h2>A partir de las</h2>
			<DropDownList></DropDownList>
			<h2>Deporte adaptado</h2>
			<MultiCheckbox/>
			<h2>Hombres/Mujeres/Mixto</h2>
			<MultiCheckbox/>
			<Button text={"Cancelar"}></Button>
			<Button text={"Buscar"}></Button>
		</>
	);
}

export default FilterGameForm;
