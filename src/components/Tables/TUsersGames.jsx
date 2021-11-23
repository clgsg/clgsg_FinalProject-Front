import Button from "components/Button";
import "components/index.scss";

const TUsersGames = () => {
	return (
		<>
			{/* <h2>Estas son tus pachangas</h2> */}
			<div variant="striped" colorScheme="teal">
				<div>
					<div>
						<div>Deporte</div>
						<div>Fecha</div>
						<div>Hora</div>
						<div>Masc./Fem.</div>
						<div>Adaptado</div>
						<div>Lugar</div>
						<div></div>
					</div>
				</div>
				<div>
					<div>
						<div>Baloncesto</div>
						<div>21-12-2021</div>
						<div>12:00</div>
						<div>Masculino</div>
						<div>No</div>
						<div>IDB La Vaguada</div>
						<div>
							<div>
								<Button text={"Ver detalles"} />
								<Button text={"Borrarme"} />
							</div>
						</div>
					</div>
					<div>
						<div>Baloncesto</div>
						<div>21-12-2021</div>
						<div>12:00</div>
						<div>Masculino</div>
						<div>No</div>
						<div>IDB La Vaguada</div>
						<div>
							<div>
								<Button text={"Ver detalles"} />
								<Button text={"Borrarme"} />
							</div>
						</div>
					</div>
					<div>
						<div>Baloncesto</div>
						<div>21-12-2021</div>
						<div>12:00</div>
						<div>Masculino</div>
						<div>No</div>
						<div>IDB La Vaguada</div>
						<div>
							<div>
								<Button text={"Ver detalles"} />
								<Button text={"Borrarme"} />
							</div>
						</div>
					</div>
					<div>
						<div>3x3</div>
						<div>26-12-2021</div>
						<div>12:00</div>
						<div>Masculino</div>
						<div>Sí</div>
						<div>IDB La Vaguada</div>
						<div>
							<div>
								<Button text={"Ver detalles"} />
								<Button text={"Borrarme"} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TUsersGames;
