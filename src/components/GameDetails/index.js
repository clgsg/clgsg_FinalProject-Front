import {Table, useState, useEffect} from "react"
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
				<div>
					<div>
						<div>
							<h2>Qué</h2>
						</div>
						<div>{data.sport}</div>
					</div>
					<div>
						<div>
							<h2>Cuándo</h2>
						</div>
						<div>{data.game_date} a las {data.game_time}</div>
					</div>
					<div>
						<div>
							<h2>Dónde</h2>
						</div>
						<div>
							{data.game_venue}
							{/* <Link href="venues/info">
								Ver detalles
							</Link>

						</div>
					</div>
					<div>
						<div>
							<h2>Participantes</h2>
						</div>
						<div>
							5 participantes (
							<Link href="#" color="teal.700">
								Ver detalles
							</Link>
							)
						</div>
					</div>
					<div>
						<div>
							<h2>Nivel</h2>
						</div>
						<div>Intermedio</div>
					</div>
					<div>
						<div>*/}
							<h2>Adaptado</h2>
						</div>
						<div>{data.adapted}</div>
					</div>
					<div>
						<div>
							<h2>Masc./Fem./Mixto</h2>
						</div>
						<div>{data.game_gender}</div>
					</div>
					<div>
						<div>
							<h2>Comentario</h2>
						</div>
						<div>
							{data.notes}
						</div>
					</div>
				</div>
			</Table>
		</>
	);
};

export default GameDetails
