import LoginForm from "components/LoginForm";

const LoginPage = () => {
	return (
		<>
			<LoginForm />
			<p>
				¿Aún no tienes cuenta? ¡Regístrate {" "}
				<a href={`register`}>aquí!</a>
			</p>
		</>
	);
};
export default LoginPage;
