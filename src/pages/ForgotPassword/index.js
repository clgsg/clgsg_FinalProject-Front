import Button from "components/Button";
import "index.scss";
import ForgotPasswordForm from "components/ForgotPasswordForm";

const forgotPassword = () => {
	return (
		<>
			<ForgotPasswordForm />
			<Button text="Enviar email" />
			<h3>
				¿Aún no tienes cuenta? ¡Regístrate
				<div to="signup">aquí!</div>
			</h3>
		</>
	);
};

export default forgotPassword;
