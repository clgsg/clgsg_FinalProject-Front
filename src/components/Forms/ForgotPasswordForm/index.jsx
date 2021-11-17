import { useHistory } from "react-router-dom";

import { Button, ButtonGroup } from "@chakra-ui/react";
import { ShortText } from "components/Forms/elements/ShortText";

function ForgotPasswordForm() {


	// const handleClick = () => {
	// 	if (Button.className === "LoginBttn") {
	// 		history.push("/login");
	// 	}
	// 	if (Button.className === "SignupBttn") {
	// 		history.push("/register");
	// 	}
	// };


	return (
		<>
			<h2>Email</h2>
			<ShortText/>
			<h2>Escríbelo otra vez</h2>
			<ShortText/>
			<Button text={"Cancelar"}></Button>
			<Button type="submit" text={"Enviar email"}></Button>
		</>
	);
}

export default ForgotPasswordForm;
