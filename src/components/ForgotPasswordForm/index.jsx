import Button from "components/Button";
import "index.scss";


function ForgotPasswordForm() {
	const { login } = useContext(context);
	const [loginError, setLoginError] = useState(false);
	const history = useHistory();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const redirect = (redirectPath) => {
		redirectPath = redirectPath || "/auth/login";
		history.push(redirectPath);
	};
	const onSubmit = async (data) => {
		const result = await login(data);
		if (result.success) {
			const state = props.userid || {};
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
			<p> Formulario de contraseña olvidada</p>
			<div>
				<form className="forgottenPwdForm" onSubmit={handleSubmit(onSubmit)}>
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
						type="reset"
						text="Cancelar"
						to="auth/login"
					/>
					<input
						className="formButton"
						type="submit"
						text="Obtener nueva contraseña"
						onSubmit={forgottenPwd}
						to="auth/login"
					/>
				</form>
			</div>

			<Button text="Cancelar" />

		</>
	);
}

export default ForgotPasswordForm;
