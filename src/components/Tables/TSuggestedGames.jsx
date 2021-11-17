import { useHistory } from "react-router-dom";

import {
	Table,
	Thead,
	Tbody,
	// Tfoot,
	Tr,
	Th,
	Td,
} from "@chakra-ui/react";
import Button from "components/Button";

const TSuggestedGames = () => {






		const handleClick = () => {
			if (Button.className === "LoginBttn") {
				history.push("/login");
			}
			if (Button.className === "SignupBttn") {
				history.push("/register");
			}
		};

	return (
		<>
			{/* <h3>Pachangas sugeridas</h3> */}
			<Table variant="striped" colorScheme="teal">
				<Thead>
					<Tr>
						<Th>Deporte</Th>
						<Th>Fecha</Th>
						<Th>Hora</Th>
						<Th>Masc./Fem.</Th>
						<Th>Adaptado</Th>
						<Th>Lugar</Th>
						<Th></Th>
						<Th></Th>
					</Tr>
				</Thead>
				<Tbody>
					<Tr>
						<Td>Baloncesto</Td>
						<Td>21-12-2021</Td>
						<Td>12:00</Td>
						<Td>Masculino</Td>
						<Td>No</Td>
						<Td>IDB La Vaguada</Td>
						<Td>
							<Button text={"Apuntarme"} />
						</Td>
						<Td>
							<Button text={"Ver detalles"} />
						</Td>
					</Tr>
					<Tr>
						<Td>Baloncesto</Td>
						<Td>21-12-2021</Td>
						<Td>12:00</Td>
						<Td>Masculino</Td>
						<Td>No</Td>
						<Td>IDB La Vaguada</Td>
						<Td>
							<Button text={"Apuntarme"} />
						</Td>
						<Td>
							<Button text={"Ver detalles"} />
						</Td>
					</Tr>
					<Tr>
						<Td>Baloncesto</Td>
						<Td>21-12-2021</Td>
						<Td>12:00</Td>
						<Td>Masculino</Td>
						<Td>No</Td>
						<Td>IDB La Vaguada</Td>
						<Td>
							<Button text={"Apuntarme"} />
						</Td>
						<Td>
							<Button text={"Ver detalles"} />
						</Td>
					</Tr>
					<Tr>
						<Td>3x3</Td>
						<Td>26-12-2021</Td>
						<Td>12:00</Td>
						<Td>Masculino</Td>
						<Td>Sí</Td>
						<Td>IDB La Vaguada</Td>
						<Td>
							<Button text={"Apuntarme"} />
						</Td>
						<Td>
							<Button text={"Ver detalles"} />
						</Td>
					</Tr>
				</Tbody>
				{/* <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th>multiply by</Th>
            </Tr>
          </Tfoot> */}
			</Table>
		</>
	);
};

export default TSuggestedGames;
