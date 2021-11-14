import {
	Table,
	Thead,
	Tbody,
	// Tfoot,
	Tr,
	Th,
	Td,
} from "@chakra-ui/react";

const TableUpcomingGames = () => {

  return (
    <>
        {/* <h3>Próximas pachangas:</h3> */}
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Deporte</Th>
              <Th>Fecha</Th>
              <Th>Hora</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Baloncesto</Td>
              <Td>21-12-2021</Td>
              <Td>12:00</Td>
            </Tr>
            <Tr>
              <Td>3x3</Td>
              <Td>21-12-2021</Td>
              <Td>16:30</Td>
            </Tr>
            <Tr>
              <Td>Fútbol 7</Td>
              <Td>27-12-2021</Td>
              <Td>19:30</Td>
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
  )
}

export default TableUpcomingGames