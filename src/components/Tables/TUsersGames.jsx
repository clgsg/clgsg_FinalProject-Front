import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { users } from "services";
import Button from "components/Button";
import "components/index.scss";

const TUsersGames = () => {
	const [data, dataSet] = useState([]);
	console.log("UsersGames data: ", data)
	useEffect(() => {
		async function fetchMyAPI() {
			const response = await users.getUsersGames();
			dataSet(response.data);
		}

		fetchMyAPI();
	}, []);
	return (
		<>
			<Table>
				<TableHead>
					<TableRow>
						<th>Deporte</th>
						<th>Fecha</th>
						<th>Hora</th>
						<th>Masc./Fem.</th>
						<th>Adaptado</th>
						<th>Lugar</th>
						<th></th>
					</TableRow>
				</TableHead>
				<TableBody>
					{data &&
						data.map((trx) => (
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
		</>
	);
};

export default TUsersGames;
