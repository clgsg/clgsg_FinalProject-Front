import { useForm } from "react-hook-form";
import { useHistory, Link } from "react-router-dom";
import { useState, useContext } from "react";
import context from "context/SecurityContext"
import { login } from "services/auth";
import "index.scss";



const LoginForm = (props) => {
	const {login} = useContext(context);
	const [loginError, setLoginError] = useState(false);
	const history = useHistory();

	const {register, handleSubmit, formState: { errors }} = useForm();
	const redirect = (redirectPath) => {
		redirectPath = redirectPath || "/home";
		history.push(redirectPath);
	}
	const onSubmit = async (data) => {
		const result = await login(data);
		if (result.success) {
			const state = props.userid|| {};
			redirect(state.prevPath);
			if (state.userid) {
				login(state.userid, result.data.id);
			}
		} else {
			setLoginError(true);
		}
	};

  return (
		<>
			<form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label>Email o usuario: </label>
					<input
						type="text"
						{...register("email_username", {
							required: true,
							minLength: 8,
							pattern: {
								value: /^\S+@\S+$/i,
							},
						})}
					/>
					{errors?.email_username?.type === "required" && (
						<p>Campo obligatorio</p>
					)}
					{errors?.email_username?.type === "minLength" && (
						<p>8 caracteres mínimo</p>
					)}

					{/* include validation with required or other standard HTML validation rules */}
					<label>Contraseña:</label>
					<input
						type="password"
						{...register("password", {
							required: true,
							minLength: 8,
							maxLength: 16,
							pattern: {
								value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]$/,
							},
						})}
					/>
					{errors?.password?.type === "required" && (
						<p>Campo obligatorio</p>
					)}
					{errors?.password?.type === "pattern" && (
						<p>
							Usa mínimo 8 caracteres, incluyendo una mayúscula,
							una minúscula y un dígito
						</p>
					)}

					<p>
						¿Has olvidado tu contraseña? Recupérala{" "}
						<Link to="pwd/forgotten">aquí!</Link>
					</p>
				</div>

				<input
					className="formButton"
					type="submit"
					text="Acceder"
					onSubmit={login}
					to="users/${userid}/games"
				/>
			</form>
		</>
  );
};

export default LoginForm;
