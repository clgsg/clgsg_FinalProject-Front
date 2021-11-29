import Button from "components/Button";
import { login } from "services/auth";
import "index.scss";



const LoginForm = () => {
		return (
			<>

				<form>
				<h2>Acceso</h2>

				<Button
					type="submit"
					text="Acceder"
					onSubmit={login}
					to="users/${userid}/games"/>
				</form>

			</>
	)
};

export default LoginForm;
