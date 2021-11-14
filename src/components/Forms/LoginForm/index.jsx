import { Button } from "components/Buttons";
import { Password } from "components/Forms/elements/Password";
import { ShortText } from "components/Forms/elements/ShortText";

function LoginForm() {
	return (
		<>
			<h2>Email o usuario</h2>
			<ShortText />
			<h2>Contraseña</h2>
			<Password />
			<Button text={"Acceder"}></Button>
		</>
	);
}

export default LoginForm;
