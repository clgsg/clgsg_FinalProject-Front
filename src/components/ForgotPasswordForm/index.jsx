import Button from "components/Button";
import "components/index.scss";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";

import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);

const schema = yup.object().shape({
	email: yup.string().email().required("Campo obligatorio."),
	confirmEmail: yup
		.string()
		.email()
		.required("Campo obligatorio")
		.oneOf([yup.ref("email"), null], "Ambos emails deben coincidir."),
	password: yup
		.string()
		.password("Contraseña no válida.")
		.min(8, "¡No tan corta!")
		.max(15, "¡No tan larga!")
		.required("Campo obligatorio."),
});

const ForgotPasswordForm = () => {
	const history = useHistory()
	return (<div>
		<h1>Cambio de email</h1>
		<Formik
			initialValues={{
				username: "",
				email: "",
				password: "",
			}}
			validationSchema={schema}
			onSubmit={(values) => {
				console.log(values);
			}}
		>
			{({ errors, touched }) => (
				<Form>
					<Field name="username" />
					{errors.username && touched.username ? (
						<div>{errors.username}</div>
					) : null}
					<Field name="email" type="email" />
					{errors.email && touched.email ? (
						<div>{errors.email}</div>
					) : null}
					<Field name="password" type="password" />
					{errors.password && touched.password ? (
						<div>{errors.password}</div>
					) : null}
					<div spacing={4}>
						<Button type="reset" text="Cancelar"/>
						<Button type="submit" text="Confirmar" onSubmit={() => history.push("/login")}/>
					</div>
				</Form>
			)}
		</Formik>
	</div>)
};
export default ForgotPasswordForm;
