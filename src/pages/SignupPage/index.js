import { Link } from "react-router-dom";
import SignupForm from "components/SignupForm";

const SignupPage = () => {
	return (
		<>
			<SignupForm />
			<p>
				¿Ya tienes cuenta? <Link to="auth/login">Ve a la página de acceso</Link>
			</p>
		</>
	);
};
export default SignupPage;
