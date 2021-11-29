import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import Button from "components/Button";

const UserPreferences = () => {
	return (
		<>
			<div>
				<Table>
					<TableBody>
						<TableRow>
							<TableRow>
								<h3>Qué</h3>
							</TableRow>
							<TableCell>
								3x3
								<br />
								Baloncesto
								<br />
								Fútbol 7<br />
								Pádel
							</TableCell>
						</TableRow>
						<TableRow>
							<TableRow>
								<h3>Deporte adaptado</h3>
							</TableRow>
							<TableCell>Indiferente</TableCell>
						</TableRow>
						<TableRow>
							<TableRow>
								<h3>Hombres/Mujeres/Mixto</h3>
							</TableRow>
							<TableCell>
								Hombres
								<br />
								Mixto
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
				<Button
					className="FormButton"
					text="Cambiar preferencias"
					to="users/030fbdfa-ad94-42bd-9633-ee4fa1bf3631/preferencesForm"
				/>
			</div>
		</>
	);
};

export default UserPreferences;
