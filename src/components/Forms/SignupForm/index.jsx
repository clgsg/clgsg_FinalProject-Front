import Button from "components/Button";
import { Formik, Form, Field } from "formik";

import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);

const schema = yup.object().shape({
	username: yup
		.string()
		.min(8, "¡No tan corto!")
		.max(15, "¡No tan largo!")
		.required("Campo obligatorio"),
	email: yup.string().email("Email no válido").required("Campo obligatorio"),
	password: yup
		.string()
		.password("Contraseña no válida")
		.min(8, "¡No tan corta!")
		.max(15, "¡No tan larga!")
		.required("Campo obligatorio"),
});

export const SignupForm = () => (
	<div>
		<h1>Regístrate</h1>
		<Formik
			initialValues={{
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
					<Field name="email" type="email" />
					{errors.email && touched.email ? (
						<div>{errors.email}</div>
					) : null}
					<Field name="password" type="password" />
					{errors.password && touched.password ? (
						<div>{errors.password}</div>
					) : null}
					<Button type="submit">Registrarse</Button>
				</Form>
			)}
		</Formik>
	</div>
);
