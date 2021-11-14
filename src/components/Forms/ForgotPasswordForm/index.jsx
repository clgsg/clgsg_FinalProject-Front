import { Button } from "components/Buttons";
import { Password } from "components/Forms/elements/Password"
import { ShortText } from "components/Forms/elements/ShortText";

function ForgotPasswordForm() {
	return (
		<>
			<h2>Nuevo email</h2>
			<ShortText/>
			<h2>Escríbelo otra vez</h2>
			<ShortText/>
			<h2>Introduce tu contraseña</h2>
			<Password/>
			<Button text={"Cancelar"}></Button>
			<Button text={"Confirmar"}></Button>
		</>
	);
}

export default ForgotPasswordForm;
