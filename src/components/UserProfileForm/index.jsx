import {useEffect, useState} from "react"
import Button from "components/Button";
import "components/index.scss";
import { Formik, Form, Field } from "formik";

import {users} from "services";

const UserProfileForm = () => {
	const [data, dataSet] = useState([]);

	useEffect(() => {
		async function fetchMyAPI() {
			const response = await users.getUserData()
			dataSet(response.data.data);
		}

		fetchMyAPI();
	}, []);
	return (
		<>
			<h2>Datos personales</h2>
			<Formik initialValues={{
					name: "",
					family_name: "",
					birthdate: "",
					gender: "",
				}}
				onSubmit={async (values) => {
					console.log("Datos personales:", values);
					await new Promise((r) => setTimeout(r, 500));
					alert(JSON.stringify(values, null, 2));
			}}>
				{data && data.map((trx) => (
				<Form>
					<Field name="select_pic" type="text" />
					<img alt="user"></img>
					<h3>Nombre</h3>
					<Field name="firstName" placeholder="Nombre" />
					<h3>Apellidos</h3>
					<Field name="familyName" placeholder="Apellido" />
					<h3>Usuario</h3>
					<Field name="username" value={trx.username} />
					<h3>Email</h3>
					<Field name="email" value={trx.email}/>
					<Button
						text={"Cambiar email"}
						to={`auth/email/update`}
					/>
					<h3>Contraseña</h3>
					<Button
						text={"Cambiar contraseña"}
						to={`/auth/pwd/update`}
					/>
					<h3>Fecha de nacimiento (dd-mm-aaaa)</h3>
					<Field name="" placeholder="" />

					<div id="my-radio-group"><h3>Eres</h3>
					<div role="group" aria-labelledby="my-radio-group">
						<label>
							<Field type="radio" name="gender" value="Hombre" />
							Hombre
						</label>
						<label>
							<Field type="radio" name="gender" value="Mujer" />
							Mujer
						</label>
					</div>
					</div>
				</Form>))}
			</Formik>
			</>
	);
}


export default UserProfileForm;
