import Button from "components/Button";
import { Formik, Form, Field } from "formik";
import { login } from "services/auth";
import "components/index.scss";


import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);



const schema = yup.object().shape({
	username_email: yup.string().required("Campo obligatorio"),
	password: yup.string().password("Contraseña no válida"),
});

const LoginForm = () => (

		<Formik
			initialValues={{
				username_email: "",
				password: "",
			}}
			validationSchema={schema}
			onSubmit={(values) => {
				console.log("Login form data:", values);
			}}
		>
			{({ errors, touched }) => (
				<Form>
					<Field name="username_email" />
					{errors.username_email && touched.username_email ? (
						<div>{errors.username_email}</div>
					) : null}
					<Field name="password" type="password" />
					{errors.password && touched.password ? (
						<div>{errors.password}</div>
					) : null}
					<Button type="submit" onClick={login}>Acceder</Button>
				</Form>
			)}
		</Formik>
);

export default LoginForm;
