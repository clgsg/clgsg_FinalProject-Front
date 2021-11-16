import {
	Link,
	Table,
	Tbody,
	Tr,
	Td,
} from "@chakra-ui/react";
import Button from "components/Button";

const GameDetails = () => {
	return (
		<>
			<h2>Qué</h2>
			<Table variant="simple" colorScheme="teal">
				<Tbody>
					<Tr>
						<Td>
							<h2>Qué</h2>
						</Td>
						<Td>Baloncesto</Td>
					</Tr>
					<Tr>
						<Td>
							<h2>Cuándo</h2>
						</Td>
						<Td>16 de diciembre del 2021 a las 17:30</Td>
					</Tr>
					<Tr>
						<Td>
							<h2>Dónde</h2>
						</Td>
						<Td>
							IDB Boston (
							<Link href="#" color="teal.700">
								Ver detalles
							</Link>
							)
						</Td>
					</Tr>
					<Tr>
						<Td>
							<h2>Participantes</h2>
						</Td>
						<Td>
							5 participantes (
							<Link href="#" color="teal.700">
								Ver detalles
							</Link>
							)
						</Td>
					</Tr>
					<Tr>
						<Td>
							<h2>Nivel</h2>
						</Td>
						<Td>Intermedio</Td>
					</Tr>
					<Tr>
						<Td>
							<h2>Adaptado</h2>
						</Td>
						<Td>No</Td>
					</Tr>
					<Tr>
						<Td>
							<h2>Masc./Fem./Mixto</h2>
						</Td>
						<Td>Mixto</Td>
					</Tr>
					<Tr>
						<Td>
							<h2>Comentario</h2>
						</Td>
						<Td>
							Recuerdo que es obligatorio el uso de mascarillas.
							Quedamos 15 minutos antes en la entrada del colegio
							que hay al lado.
						</Td>
					</Tr>
				</Tbody>
			</Table>
			<Button text={"¡Me apunto!"} />
		</>
	);
};

export default GameDetails
