import Button from "components/Button";

const UserProfile = () => {
	return (
		<>
			<div className="tableWrapper">
			<table width="100%">
				<tr>
				<td><h3>Usuario: </h3>
				</td>
				<td>username</td>
				</tr>
							<div>
								<h3>Nombre</h3>
							</div>
							<div>firstName</div>
							<div>
								<h3>Hombres/Mujeres/Mixto</h3>
							</div>
							<div>
								Hombres
								<br />
								Mixto
							</div>


				<Button
					className="FormButton"
					text="Cambiar email"
					to="users/email/update"
				/>
				<Button
					className="FormButton"
					text="Cambiar contraseña"
					to="users/pwd/update"
				/>
			</table>
		</div>
		</>
	);
};

export default UserProfile;
