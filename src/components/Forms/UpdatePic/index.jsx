import useHistory from "react-router-dom";

import Button from "components/Button";
import { Password } from "components/Forms/elements/Password";
import { ShortText } from "components/Forms/elements/ShortText";
import { useHistory } from "react-router";

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
			<h2>Selecciona tu nueva imagen</h2>
			<ShortText />

			<Button type="Submit" text={"Actualizar mi foto de perfil"}></Button>
		</>
	);
}

export default UpdatePasswordForm;
