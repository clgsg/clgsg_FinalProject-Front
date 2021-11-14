import { Button } from "components/Buttons";
import { Password } from "components/Forms/elements/Password";
import { ShortText } from "components/Forms/elements/ShortText";

function SignupForm() {
	return (
		<>
			<h2>Email</h2>
			<ShortText />
			<h2>Usuario</h2>
			<ShortText />
			<h2>Contraseña</h2>
			<Password />
			<Button type="Submit" text={"Registrarse"}></Button>
		</>
	);
}

export default SignupForm;



// import React from "react";
// import { useFormik } from "formik";

// const SignupForm = () => {
// 	// Pass the useFormik() hook initial form values and a submit function that will
// 	// be called when the form is submitted
// 	const formik = useFormik({
// 		initialValues: {
// 			email: "",
// 		} || {
// 			username: "",
// 		},
// 		onSubmit: (values) => {
// 			alert(JSON.stringify(values, null, 2));
// 		},
// 	});
// 	return (
// 		<form onSubmit={formik.handleSubmit}>
// 			<label htmlFor="email">Email o usuario</label>
// 			<input
// 				id="email"
// 				name="email"
// 				type="email"
// 				onChange={formik.handleChange}
// 				value={formik.values.email}
// 			/>
// 			<label htmlFor="email">Email o usuario</label>
// 			<input
// 				id="email"
// 				name="email"
// 				type="email"
// 				onChange={formik.handleChange}
// 				value={formik.values.email}
// 			/>

// 			<button type="submit">Submit</button>
// 		</form>
// 	);
// };
