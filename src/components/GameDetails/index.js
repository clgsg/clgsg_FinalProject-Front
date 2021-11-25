import {useState, useEffect} from "react"
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import "components/index.scss";
import {games} from "services"

const GameDetails = () => {

	const [data, dataSet] = useState([]);

	useEffect(() => {
		async function fetchMyAPI() {
			const response = await games.getUpcomingGames();
			dataSet(response.data.data);
		}

		fetchMyAPI();
	}, []);

	return (
		<>
			<h2>Qué</h2>
			<Table>
				<TableBody>
					<TableRow>
						<TableCell>
							<h2>Qué</h2>
						</TableCell>
						<TableCell>{data.sport}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<h2>Cuándo</h2>
						</TableCell>
						<TableCell>
							{data.game_date} a las {data.game_time}
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<h2>Dónde</h2>
						</TableCell>
						<TableCell>
							{data.game_venue}
							<Link
								to={`/games/info?gameid=${data.gameid}`}>
								Ver detalles
							</Link>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<h2>Masc./Fem./Mixto</h2>
						</TableCell>
						<TableCell>{data.game_gender}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<h2>Adaptado</h2>
						</TableCell>
						<TableCell>{data.adapted}</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<h2>Comentario</h2>
						</TableCell>
						<TableCell>{data.notes}</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</>
	);
};

export default GameDetails
