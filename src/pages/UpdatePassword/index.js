import Button from "components/Button";
import "components/index.scss";
import UpdatePasswordForm from "components/Forms/UpdatePasswordForm";

const updatePassword = () => {
	return (
		<>
			<UpdatePasswordForm />
			<Button text={"Actualizar contraseña"} />
		</>
	);
};

export default updatePassword;
