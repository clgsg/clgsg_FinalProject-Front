// import {
// 	Box,
// 	Flex,
// 	Button,
// 	Menu,
// 	useColorModeValue,
// 	Stack,
// } from "@chakra-ui/react";

import Button from "components/Button"

export default function TopHeader() {
	return (
		<div>
		<h1 > Este es el encabezado </h1>

			<Button text={"Acceder a mi cuenta"}/>
			<Button text={"Registrarse"}></Button>

		</div>
	);
}
