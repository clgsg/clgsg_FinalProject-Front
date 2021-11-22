import { ButtonGroup, Button, useColorModeValue, Box, Flex, Stack } from "@chakra-ui/react";


export default function TopHeader() {
	return (
		<Box bg={useColorModeValue("teal")} px={4}>
			<Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
				<Flex alignItems={"center"}>
					<Stack direction={"row"} spacing={7}>
						<Box>
							<img
								src="./headerimg.tiff"
								alt="Logo de megustalapachanga"
							/>
						</Box>
						<ButtonGroup spacing={4}>
							<Button
								size="sm"
								bg="teal.100"
								borderColor="white"
								borderWidth="2px"
								color="teal.700"
								to="/auth/login"
							>
								Acceder
							</Button>
							<Button
								size="sm"
								bg="teal.100"
								borderColor="white"
								borderWidth="2px"
								color="teal.700"
								to="/auth/signup"
							>
								{" "}
								Quiero registrarme
							</Button>
						</ButtonGroup>
					</Stack>
				</Flex>
			</Flex>
		</Box>
	);
}
