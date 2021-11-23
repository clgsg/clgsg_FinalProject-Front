import Button from "components/Button";
import "components/index.scss";
import UpdatePasswordForm from "components/Forms/UpdatePasswordForm";

const updatePassword = () => {
	return (
		<>
			<UpdatePasswordForm />
			<Button text={"Enviar contraseña"} />
			<h3>
				¿Aún no tienes cuenta? ¡Regístrate
				<div href={`register`}>aquí!</div>
			</h3>
		</>
	);
};

export default updatePassword;
