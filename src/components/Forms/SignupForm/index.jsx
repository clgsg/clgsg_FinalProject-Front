import Button from "components/Button";
import { Formik, Form, Field, useField } from "formik";

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


const MyCheckbox = ({ children, ...props }) => {
	const [field, meta] = useField({ ...props, type: "checkbox" });
	return (
		<>
			<label className="checkbox">
				<input {...field} {...props} type="checkbox" />
				{children}
			</label>
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</>
	);
};

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
					<Field name="email" type="email" />
					{errors.email && touched.email ? (
						<div>{errors.email}</div>
					) : null}
					<Field name="password" type="password" />
					{errors.password && touched.password ? (
						<div>{errors.password}</div>
					) : null}
				<MyCheckbox name="acceptedTerms">
					Acepto las condiciones de uso y el tratamiento de mis datos
				</MyCheckbox>
					<Button type="submit">Registrarme</Button>
				</Form>
			)}
		</Formik>
	</div>
);
