import { Link } from "@chakra-ui/layout";
import Bttn from "components/Button";
import ForgotPasswordForm from "components/ForgotPasswordForm";


const forgotPassword = () => {

	return (
		<>
			<ForgotPasswordForm />
			<Bttn text={"Enviar email"} />
			<h3>
				¿Aún no tienes cuenta? ¡Regístrate
				<Link href={`register`}>aquí!</Link>
			</h3>
		</>
	);
}

export default forgotPassword