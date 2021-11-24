import { Box } from "@mui/system";
import Button from "components/Button";
import "components/index.scss";
import { Formik, Form, Field, useField } from "formik";
import { signup } from "services/auth";

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

const SignupForm = () => (
	<div>
		<h1>Formulario de registro</h1>
		<Formik
			initialValues={{
				username: "",
				email: "",
				password: "",
			}}
			validationSchema={schema}
			onSubmit={(values) => {
				console.log("signup form data:", values);
			}}
		>
			{({ errors, touched }) => (
				<Form>
					<Box className="forms">
						<Field name="username" placeholder="Usuario"/>
						{errors.username && touched.username ? (
							<div>{errors.username}</div>
						) : null}
						<Field name="email" type="email" placeholder="Email"/>
						{errors.email && touched.email ? (
							<div>{errors.email}</div>
						) : null}
						<Field name="password" type="password" placeholder="Contraseña"/>
						{errors.password && touched.password ? (
							<div>{errors.password}</div>
							) : null}
					</Box>
					<MyCheckbox name="acceptedTerms" required>
						Acepto las condiciones de uso y el tratamiento de mis
						datos
					</MyCheckbox>
					<Button type="submit" onClick={()=>signup()} text="Registrarme" to="users/games/:userid"/>
				</Form>
			)}
		</Formik>
	</div>
);

export default SignupForm;
