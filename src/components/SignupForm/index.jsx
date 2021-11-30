import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Button from "components/Button";
import { signup } from "services/auth";
import context from "context/SecurityContext";
import "index.scss";

const SignupForm = (props) => {

	const { signup } = useContext(context);
	const [signupError, setsignupError] = useState(false);
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
		const result = await signup(data);
		if (result.success) {
			const state = props.userid || {};
			redirect(state.prevPath);
			if (state.userid) {
				signup(state.userid, result.data.id);
			}
		} else {
			setsignupError(true);
		}
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
						text="Registrarse"
						onSubmit={signup}
						to="users/${userid}/games"
					/>
				</form>
			</div>
		</>
	); };


export default SignupForm;