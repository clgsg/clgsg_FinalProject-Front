import { ButtonGroup, Button, useColorModeValue, Box, Flex, Stack, Text } from "@chakra-ui/react";


export default function TopHeader() {
	return (
		<Box bg={useColorModeValue("cyan.700")} px={4} h='20vh' w='100vw'>
			<Flex h={20} alignItems={"center"} justifyContent={"center"}>
				<Flex alignItems={"center"}>
					<Stack direction={"column"} spacing={2}>
						<Box>
							<Text fontFamily='Road Rage' fontSize={{base: '20vh', md: '30vh'}}>
								megustalapachanga
							</Text>
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
