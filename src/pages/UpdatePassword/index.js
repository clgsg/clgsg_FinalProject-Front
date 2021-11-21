import { Link } from "@chakra-ui/layout";
import Bttn from "components/Button";
import UpdatePasswordForm from "components/Forms/UpdatePasswordForm";

const updatePassword = () => {
	return (
		<>
			<UpdatePasswordForm />
			<Bttn text={"Enviar contraseña"} />
			<h3>
				¿Aún no tienes cuenta? ¡Regístrate
				<Link href={`register`}>aquí!</Link>
			</h3>
		</>
	);
};

export default updatePassword;
