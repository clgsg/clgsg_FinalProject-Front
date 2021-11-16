import { Link } from "@chakra-ui/layout";
import SignupForm from "components/Forms/SignupForm";

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
