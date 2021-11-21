import { Button } from "@chakra-ui/react";

const Bttn = () => {
	return (
		<Button
			colorScheme="teal"
			color="white"
			height="50px"
			width="200px"
			variant="solid"
			spacing="6"
			direction="row"
			rounded={"md"}
			cursor={"pointer"}
			minW={0}
		></Button>
	);
}
export default Bttn