import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useRoutes} from "react-router-dom";
import { signup } from "services/auth";
import context from "context/SecurityContext";
import "index.scss";

const SignupForm = (props) => {
	const { signUp } = useContext(context);
	const [signupError, setSignupError] = useState(false);
	const history = useHistory();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const redirect = (redirectPath) => {
		redirectPath = redirectPath || "/home";
		history.push(redirectPath);
	};

	const onSubmit = async (data) => {
		console.log("onSubmit: ", data)
		const result = await signup(data);


	};

	return (
		<>
			<div>
				<form className="signupForm" onSubmit={handleSubmit(onSubmit)}>
					<div>
						<label>Email: </label>
						<input
							type="email"
							{...register("email", {
								required: true,
							})}
						/>

						<label>Usuario: </label>
						<input
							type="text"
							{...register("username", {
								required: true,
							})}
						/>

						<label>Contraseña:</label>
						<input
							type="password"
							{...register("password", {
								required: true,
								pattern: {
									value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
								},
							})}
						/>
					</div>

					<input
						className="formButton"
						type="submit"
						// text="Registrarse"
					/>
				</form>
			</div>
		</>
	); };


export default SignupForm;