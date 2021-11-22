import { Link } from "@chakra-ui/layout";
;
import UpdatePasswordForm from "components/Forms/UpdatePasswordForm";

const updatePassword = () => {
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
