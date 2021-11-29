import Button from "components/Button";
import "components/index.scss";
import { signup } from "services/auth";

const SignupForm = () => (
	<div>
		<h1>Formulario de registro</h1>
		return (
		<>
			<form></form>

			<Button
				type="submit"
				text="Acceder"
				onSubmit={signup}
				to="users/${userid}/games"
			/>
		</>
		) };
	</div>
);

export default SignupForm;
