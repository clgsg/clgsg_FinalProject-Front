import Button from "components/Button";
import { Formik, Form, Field } from "formik";

import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);

const schema = yup.object().shape({
	username: yup.string()
		.min(8, "¡No tan corto!")
		.max(15, "¡No tan largo!")
		.required("Obligatorio"),
	email: yup.string().email("Email no válido").required("Obligatorio"),
	password: yup.string().password("Invalid password").required("Obligatorio"),
});

export const LoginForm = () => (
	<div>
		<h1>Acceder</h1>
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
					<Field name="email" type="email"/>
					{errors.email && touched.email ? (
						<div>{errors.email}</div>
					) : null}
					<Field name="password" type="password" />
					{errors.password && touched.password ? (
						<div>{errors.password}</div>
					) : null}
					<Button type="submit">Submit</Button>
				</Form>
			)}
		</Formik>
	</div>
);