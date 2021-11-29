import {useEffect, useState} from "react"
import Button from "components/Button";
import "index.scss";
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

				{data && data.map((trx) => (
				<form>
					<div name="select_pic" type="text" />
					<img alt="user"></img>
					<h3>Nombre</h3>
					<div name="firstName" placeholder="Nombre" />
					<h3>Apellidos</h3>
					<div name="familyName" placeholder="Apellido" />
					<h3>Usuario</h3>
					<div name="username" value={trx.username} />
					<h3>Email</h3>
					<div name="email" value={trx.email}/>
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
					<div name="" placeholder="" />

					<div id="my-radio-group"><h3>Eres</h3>
					<div role="group" aria-labelledby="my-radio-group">
						<label>
							<div type="radio" name="gender" value="Hombre" />
							Hombre
						</label>
						<label>
							<div type="radio" name="gender" value="Mujer" />
							Mujer
						</label>
					</div>
					</div>
				</form>))}
			</>
	);
}


export default UserProfileForm;
