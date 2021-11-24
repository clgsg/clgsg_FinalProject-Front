import Button from "components/Button";
import "components/index.scss";
import { Formik, Form, Field } from "formik";

import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);

const schema = yup.object().shape({
	email: yup
		.string()
		.email("Formato de email incorrecto")
		.required("Campo obligatorio"),
	confirmEmail: yup
		.string()
		.email("Formato de email incorrecto")
		.required("Campo obligatorio")
		.oneOf([yup.ref("email"), null], "Los emails no coinciden"),
	password: yup
		.string()
		.password("Contraseña no válida")
		.min(8, "¡No tan corta!")
		.max(15, "¡No tan larga!")
		.required("Campo obligatorio"),
});

const UpdateEmailForm = () => (
	<div>
		<h1>Cambio de email</h1>
		<Formik
			initialValues={{
				email: "",
				confirmEmail: "",
				password: "",
			}}
			validationSchema={schema}
			onSubmit={(values) => {
				console.log("UpdateEmail data:", values);
			}}
		>
			{({ errors, touched }) => (
				<Form>
					<Field name="email" />
					{errors.email && touched.email ? (
						<div>{errors.email}</div>
					) : null}
					<Field name="confirmEmail" type="confirmEmail" />
					{errors.confirmEmail && touched.confirmEmail ? (
						<div>{errors.confirmEmail}</div>
					) : null}
					<Field name="password" type="password" />
					{errors.password && touched.password ? (
						<div>{errors.password}</div>
					) : null}
					<Button>Cancelar</Button>
					<Button type="submit" onClick={console.log("Nueva contraseña enviada")}>Confirmar</Button>
				</Form>
			)}
		</Formik>
	</div>
);

export default UpdateEmailForm;
