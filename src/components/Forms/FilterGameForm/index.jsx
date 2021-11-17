import { useHistory } from "react-router-dom";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { DropDownList } from "components/Forms/elements/DropDownList";
import { Calendar } from "components/Forms/elements/Calendar";
import { MultiCheckbox } from "components/Forms/elements/MultiCheckbox";

function FilterGameForm() {




		const handleClick = () => {
			if (Button.className === "ClearBttn") {
				history.push("/browseGames");
			}
			if (Button.className === "FilterBttn") {
				history.push("/browseGamesResults");
			}
		};
	return (
		<>
			<h2>Qué</h2>
			<MultiCheckbox />
			<h2>Fecha</h2>
			<Calendar></Calendar>
			<h2>A partir de las</h2>
			<DropDownList></DropDownList>
			<h2>Deporte adaptado</h2>
			<MultiCheckbox />
			<h2>Hombres/Mujeres/Mixto</h2>
			<MultiCheckbox />
			<Button
				className="ClearBttn"
				text="Borrar"
				onClick={handleClick}
				to=""
			></Button>
			<Button
				className="FilterBttn"
				text="Buscar"
				onClick={handleClick}
				to="browseGamesResults"
			></Button>
		</>
	);
}

export default FilterGameForm;
