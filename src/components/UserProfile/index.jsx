import Button from "components/Button";
import useUserInfo from "hooks/useUserInfo"
import {updateEmail, updatePassword} from "services/auth"

const UserProfile = () => {
	const {data: info} = useUserInfo()
	return (
		<>
			<div>
				<main>
					<div>
						<div>
							{info &&
								info.map((trx) => (
								<><div>
										<div><h3>Usuario</h3></div>
										<div>{trx.username}</div>
									</div><div>
											<div><h3>Email</h3></div>
											<div>{trx.email}
												<Button
													className="FormButton"
													text="Cambiar"
													to="users/email/update"
													onClick={updateEmail} />
											</div>
										</div><div>
											<div>
												<h3>Condivaseña</h3>
											</div>
											<div>
												<Button
													className="FormButton"
													text="Cambiar"
													to="users/pwd/update"
													onClick={updatePassword} />
											</div>
										</div>
										<div>
											<div><h3>Nombre</h3></div>
											<div>{trx.first_name}</div>
										</div>
										<div>
											<div><h3>Apellido</h3></div>
											<div>{trx.family_name}</div>
										</div>
										<div>
											<div><h3>Fecha de nacimiento</h3></div>
											<div>{trx.user_birthdate}</div>
										</div>
										<div>
											<div><h3>Sexo</h3></div>
											<div>{trx.user_gender}</div>
										</div></>
								))}
						</div>
					</div>
				</main>
			</div>

			{/* <div className="divWrapper">
				<div width="70%">
					<div>
						<div>
							<h3>Usuario: </h3>
						</div>
						<div>username</div>
					</div>
					<div>
						<div>
							<h3>Email: </h3>
						</div>
						<div>user_email</div>
						<Button
							className="FormButton"
							text="Cambiar"
							to="users/email/update"
						/>
					</div>
					<div>
						<div>
							<h3>Condivaseña: </h3>
						</div>
						<div>************</div>
						<Button
							className="FormButton"
							text="Cambiar"
							to="users/pwd/update"
						/>
					</div>
					<div>
						<div>
							<h3>Nombre: </h3>
						</div>
						<div>user_name</div>
					</div>
					<div>
						<div>
							<h3>Apellido: </h3>
						</div>
						<div>family_name</div>
					</div>
					<div>
						<div>
							<h3>Edad: </h3>
						</div>
						<div>user_age</div>
					</div>
					<div>
						<div>
							<h3>Sexo: </h3>
						</div>
						<div>user_gender</div>
					</div>
				</div>
			</div> */}
		</>
	);
};

export default UserProfile;
