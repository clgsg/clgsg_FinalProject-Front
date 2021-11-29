import Button from "components/Button";
import "index.scss";
import { FormControlLabel, FormGroup, Checkbox } from "@mui/material";

 function UserPreferencesForm(){

	return (
		<>
			<FormGroup>
				<FormControlLabel
					control={<Checkbox />}
					label="3X3"
					size="small"
				/>
				<FormControlLabel
					control={<Checkbox />}
					label="Baloncesto"
					size="small"
				/>
				<FormControlLabel
					control={<Checkbox />}
					label="Fútbol"
					size="small"
				/>
				<FormControlLabel
					control={<Checkbox />}
					label="Fútbol 7"
					size="small"
				/>
				<FormControlLabel
					control={<Checkbox />}
					label="Fútbol sala"
					size="small"
				/>
				<FormControlLabel
					control={<Checkbox />}
					label="Tenis"
					size="small"
				/>
				<FormControlLabel
					control={<Checkbox />}
					label="Pádel"
					size="small"
				/>
			</FormGroup>

			<Button text={"Cancelar"} />
			<Button text={"Confirmar"} />
		</>
	);
}

export default UserPreferencesForm