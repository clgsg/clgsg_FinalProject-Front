import { Button } from "components/Buttons";
import { Password } from "components/Forms/elements/Password";
import { ShortText } from "components/Forms/elements/ShortText";

function SignupForm() {
	return (
		<>
			<h2>Email</h2>
			<ShortText />
			<h2>Usuario</h2>
			<ShortText />
			<h2>Contraseña</h2>
			<Password />
			<Button text={"Registrarse"}></Button>
		</>
	);
}

export default SignupForm;
