import { useHistory } from "react-router-dom";

import Button from "components/Button";
import { Password } from "components/Forms/elements/Password";

function UpdatePasswordForm() {






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
			<h2>Contraseña</h2>
			<Password />
			<h2>Introdúcela otra vez</h2>
			<Password />
			<Button type="Submit" text={"Actualizar contraseña"}></Button>
		</>
	);
}

export default UpdatePasswordForm;
