import Button from "components/Button";

const UserPreferences = () => {
	return (
		<>
			<div>
				<div>
					<div>
						<div>
							<div>
								<h3>Qué</h3>
							</div>
							<div>
								3x3
								<br />
								Baloncesto
								<br />
								Fútbol 7<br />
								Pádel
							</div>
						</div>
						<div>
							<div>
								<h3>Deporte adaptado</h3>
							</div>
							<div>Indiferente</div>
						</div>
						<div>
							<div>
								<h3>Hombres/Mujeres/Mixto</h3>
							</div>
							<div>
								Hombres
								<br />
								Mixto
							</div>
						</div>
					</div>
				</div>
				<Button
					className="FormButton"
					text="Cambiar preferencias"
					to="users/:userid/preferencesForm"
				/>
			</div>
		</>
	);
};

export default UserPreferences;
