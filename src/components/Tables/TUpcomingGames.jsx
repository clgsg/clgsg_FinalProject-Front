import {useState, useEffect} from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {games} from "services";


const TUpcomingGames = () => {
	const [data, dataSet] = useState([]);

	useEffect(() => {
		async function fetchMyAPI() {
			const response = await games.getUpcomingGames()
			dataSet(response.data.data);
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
					</TableRow>
				</TableHead>
				<TableBody>
					{data && data.map((trx) => (
							<TableRow>
								<TableCell>{trx.sport}</TableCell>
								<TableCell>{trx.game_date}</TableCell>
								<TableCell>{trx.game_time}</TableCell>
							</TableRow>
						))}
				</TableBody>
			</Table>
		</>
	);
};


export default TUpcomingGames;
