import { Link } from "@chakra-ui/layout";
import LoginForm from "components/LoginForm";

const LoginPage = () => {
	return (
		<>
			<LoginForm />
			<h3>
				¿Aún no tienes cuenta? ¡Regístrate
				<Link href={`register`}>aquí!</Link>
			</h3>
		</>
	);
};
export default LoginPage;
