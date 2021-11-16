import { useHistory } from "react-router-dom";

import { Link } from "@chakra-ui/layout";
import Button from "components/Button";
import UpdatePasswordForm from "components/Forms/UpdatePasswordForm";

const updatePassword = () => {






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
			<UpdatePasswordForm />
			<Button text={"Enviar contraseña"} />
			<h3>
				¿Aún no tienes cuenta? ¡Regístrate
				<Link href={`register`}>aquí!</Link>
			</h3>
		</>
	);
};

export default updatePassword;
