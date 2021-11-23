import { Link } from "react-router-dom";
import LoginForm from "components/LoginForm";

const LoginPage = () => {
	return (
		<>
			<h1>Acceso</h1>
			<LoginForm />
			<p>¿Aún no tienes cuenta? ¡Regístrate <Link href={`register`}>aquí!</Link></p>
		</>
	);
};
export default LoginPage;
