import { Link } from "@chakra-ui/layout";
import Button from "components/Button";
import ForgotPasswordForm from "components/Forms/ForgotPasswordForm";


const forgotPassword = () => {

	return (
		<>
			<ForgotPasswordForm />
			<Button text={"Enviar email"} />
			<h3>
				¿Aún no tienes cuenta? ¡Regístrate
				<Link href={`register`}>aquí!</Link>
			</h3>
		</>
	);
}

export default forgotPassword