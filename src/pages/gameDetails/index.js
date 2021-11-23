import Button from "components/Button";
import "components/index.scss";
import {Table, Link} from "react"

const GameDetails = () => {
	return (
		<>
			<h2>Qué</h2>
			<Table variant="simple" colorScheme="teal">
				<div>
					<div>
						<div>
							<h2>Qué</h2>
						</div>
						<div>Baloncesto</div>
					</div>
					<div>
						<div>
							<h2>Cuándo</h2>
						</div>
						<div>16 de diciembre del 2021 a las 17:30</div>
					</div>
					<div>
						<div>
							<h2>Dónde</h2>
						</div>
						<div>
							IDB Boston (
							<Link href="#" color="teal.700">
								Ver detalles
							</Link>
							)
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
						<div>
							<h2>Adaptado</h2>
						</div>
						<div>No</div>
					</div>
					<div>
						<div>
							<h2>Masc./Fem./Mixto</h2>
						</div>
						<div>Mixto</div>
					</div>
					<div>
						<div>
							<h2>Comentario</h2>
						</div>
						<div>
							Recuerdo que es obligatorio el uso de mascarillas.
							Quedamos 15 minutos antes en la endivada del colegio
							que hay al lado.
						</div>
					</div>
				</div>
			</Table>
			<div>
			<Button text={"Volver"}/>
			<Button text={"¡Me apunto!"} />
			</div>
		</>
	);
};

export default GameDetails
