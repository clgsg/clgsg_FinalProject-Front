import { Link } from "react-router-dom";
import SignupForm from "components/SignupForm";

const SignupPage = () => {
	return (
		<>
			<SignupForm />
			<h3>
				¿Aún no tienes cuenta? ¡Regístrate
				<Link href={`register`}>aquí!</Link>
			</h3>
		</>
	);
};
export default SignupPage;
