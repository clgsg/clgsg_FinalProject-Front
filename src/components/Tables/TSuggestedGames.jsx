import Button from "components/Button";
import "components/index.scss";

const TSuggestedGames = () => {
	return (
		<>
			{/* <h3>Pachangas sugeridas</h3> */}
			< variant="striped" colorScheme="teal">
				<div>
					<div>
						<div>Deporte</div>
						<div>Fecha</div>
						<div>Hora</div>
						<div>Masc./Fem.</div>
						<div>Adaptado</div>
						<div>Lugar</div>
						<div></div>
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
						<Button text={"Apuntarme"} />
						<div>
						<div>
							<Button text={"Ver detalles"} />
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
							<Button text={"Apuntarme"} />
						</div>
						<div>
							<Button text={"Ver detalles"} />
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
							<Button text={"Apuntarme"} />
						</div>
						<div>
							<Button text={"Ver detalles"} />
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
							<Button text={"Apuntarme"} />
						</div>
						<div>
							<Button text={"Ver detalles"} />
						</div>
					</div>
				</div>
			</div>
			</div>
		</>
	);
};

export default TSuggestedGames;
