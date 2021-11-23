import Button from "components/Button";
import "components/index.scss";
import UpdateEmailForm from "components/UpdateEmailForm";

const updateEmail = () => {
	return (
		<>
			<UpdateEmailForm />
			<div>
				<Button
					className="CancelButton"
					text="Cancelar"
					// onClick={}
					to="profile"
				/>
				<Button
					className="UpdateEmailButton"
					text="Confirmar"
					// onClick={}
					to="profile"
				/>
			</div>
			<h3>
				¿Aún no tienes cuenta? ¡Regístrate
				<div href={`signup`}>aquí!</div>
			</h3>
		</>
	);
};

export default updateEmail;
