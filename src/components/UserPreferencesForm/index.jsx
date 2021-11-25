import Button from "components/Button";
import "components/index.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

 function UserPreferencesForm(){

	return (
		<>
			<h3>Qué</h3>
			<div>
				<Table>
					<TableBody>
						<TableRow>
							<TableCell>3x3</TableCell>
							<TableCell>baloncesto</TableCell>
							<TableCell>fútbol</TableCell>
							<TableCell>fútbol 7</TableCell>
							<TableCell>fútbol sala</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>tenis</TableCell>
							<TableCell>pádel</TableCell>
							<TableCell></TableCell>
							<TableCell></TableCell>
							<TableCell></TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</div>
			<h3>Deporte adaptado</h3>
			<div>Sí | No |✅ Indiferente</div>
			<h3>Hombres/Mujeres/Mixto</h3>
			<div>✅Hombres | Mujeres | ✅Mixto</div>
			<Button text={"Cancelar"} />
			<Button text={"Confirmar"} />
		</>
	);
}

export default UserPreferencesForm