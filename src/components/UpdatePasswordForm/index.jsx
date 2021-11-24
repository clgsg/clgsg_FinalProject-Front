import { Formik, Form, Field, resetForm } from "formik";
import Button from "components/Button";
import "components/index.scss";
import { updatePassword } from "services/auth";

import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);

const schema = yup.object().shape({
	password: yup.string().password().required("Campo obligatorio"),
	newPassword: yup
		.string()
		.password("Contraseña no válida")
		.min(8, "¡No tan corta!")
		.max(15, "¡No tan larga!")
		.required("Campo obligatorio"),
	confirmPassword: yup
		.string()
		.password()
		.required("Campo obligatorio")
		.oneOf([yup.ref("newPassword"), null], "Las contraseñas no coinciden"),
});

export const UpdatePasswordForm = () => (
	<div>
		<h1>Cambio de contraseña</h1>
		<Formik
			initialValues={{
				password: "",
				newPassword: "",
				confirmPassword: "",
			}}
			validationSchema={schema}
			onSubmit={(values) => {
				console.log(values);
			}}
		>
			{({ errors, touched }) => (
				<Form>
					<Field name="password" />
					{errors.password && touched.password ? (
						<div>{errors.password}</div>
					) : null}
					<Field name="newPassword" type="newPassword" />
					{errors.newPassword && touched.newPassword ? (
						<div>{errors.newPassword}</div>
					) : null}
					<Field name="confirmPassword" type="confirmPassword" />
					{errors.confirmPassword && touched.confirmPassword ? (
						<div>{errors.confirmPassword}</div>
					) : null}
					<Button type="reset" onClick={resetForm}>Cancelar</Button>
					<Button type="submit" onClick={updatePassword}>Confirmar</Button>
				</Form>
			)}
		</Formik>
	</div>
);
