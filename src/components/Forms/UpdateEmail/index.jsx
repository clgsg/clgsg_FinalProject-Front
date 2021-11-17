import { useHistory } from "react-router-dom";

import Button from "components/Button";
import { Password } from "components/Forms/elements/Password";
import { ShortText } from "components/Forms/elements/ShortText";

function UpdateEmailForm() {


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
			<h2>Nuevo email</h2>
			<ShortText />
			<h2>Introdúcelo otra vez</h2>
			<ShortText />
			<h2>Contraseña</h2>
			<Password />
			<Button text={"Actualizar email"}></Button>
		</>
	);
}

export default UpdateEmailForm;
