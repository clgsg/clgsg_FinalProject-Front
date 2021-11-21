import {
	Table,
	Thead,
	Tbody,
	// Tfoot,
	Tr,
	Th,
	Td,
} from "@chakra-ui/react";
import Bttn from "components/Button";

const TUsersGames = () => {
	return (
		<>
			{/* <h2>Estas son tus pachangas</h2> */}
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
							<Bttn text={"Ver detalles"} />
						</Td>
						<Td>
							<Bttn text={"Borrarme"} />
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
							<Bttn text={"Ver detalles"} />
						</Td>
						<Td>
							<Bttn text={"Borrarme"} />
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
							<Bttn text={"Ver detalles"} />
						</Td>
						<Td>
							<Bttn text={"Borrarme"} />
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
							<Bttn text={"Ver detalles"} />
						</Td>
						<Td>
							<Bttn text={"Borrarme"} />
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

export default TUsersGames;
