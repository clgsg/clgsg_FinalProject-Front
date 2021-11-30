import * as React from "react";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { users } from "services";
import Button from "components/Button";

const TSuggestedGames = () => {
	const [usersGames, setUsersGames] = useState([]);
	console.log("User's games: ", usersGames);

	const [suggestedGames, setSuggestedGames] = useState([]);
	console.log("Suggested games: ", suggestedGames)

	useEffect(() => {
		async function fetchMyAPI() {
			const response = await users.getUsersGames();
			setUsersGames(response.usersGames);
			const resp2 = await users.getSuggestedGames();
			setSuggestedGames(resp2.suggestedGames)
		}
		fetchMyAPI();
	}, []);

	return (
		<>
			<TableContainer>
				<Table aria-label="User's games table">
					<TableHead>
						<TableRow>
							<TableCell>Deporte</TableCell>
							<TableCell>Fecha</TableCell>
							<TableCell>Hora</TableCell>
							<TableCell>Masc./Fem.</TableCell>
							<TableCell>Adaptado</TableCell>
							<TableCell>Lugar</TableCell>
							<TableCell></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{usersGames &&
							usersGames.map((trx) => (
								<TableRow>
									<TableCell>{trx.sport}</TableCell>
									<TableCell>{trx.game_date}</TableCell>
									<TableCell>{trx.game_time}</TableCell>
									<TableCell>{trx.game_gender}</TableCell>
									<TableCell>{trx.adapted}</TableCell>
									<TableCell>{trx.game_venue}</TableCell>
									<TableCell>
										<Button
											text="+info"
											to="users/games"
											onClick={console.log("Más info")}
										/>
										<Button
											text="Borrarme"
											to="users/games"
											onClick={console.log("Borrado de pachanga")}
										/>
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>

			<TableContainer>
				<Table aria-label="Suggested games table">
					<TableHead>
						<TableRow>
							<TableCell>Deporte</TableCell>
							<TableCell>Fecha</TableCell>
							<TableCell>Hora</TableCell>
							<TableCell>Masc./Fem.</TableCell>
							<TableCell>Adaptado</TableCell>
							<TableCell>Lugar</TableCell>
							<TableCell></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{suggestedGames &&
							suggestedGames.map((trx) => (
								<TableRow>
									<TableCell>{trx.sport}</TableCell>
									<TableCell>{trx.game_date}</TableCell>
									<TableCell>{trx.game_time}</TableCell>
									<TableCell>{trx.game_gender}</TableCell>
									<TableCell>{trx.adapted}</TableCell>
									<TableCell>{trx.game_venue}</TableCell>
									<TableCell>
										<Button
											text="+info"
											to="users/games"
											onClick={console.log("Más info")}
										/>
										<Button
											text="Apuntarme"
											to="users/games"
											onClick={console.log("Apuntado")}
										/>
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}

export default TSuggestedGames