import { Link } from "react-router-dom";
import SignupForm from "components/SignupForm";

const SignupPage = () => {
	return (
		<>
			<h1>Formulario de registro</h1>
			<SignupForm />
			<p>
				¿Ya tienes cuenta?{" "}
				<Link to="login">Ve a la página de acceso</Link>
			</p>
		</>
	);
};
export default SignupPage;
