// import { useHistory } from "react-router";
import "components/index.scss";
import Button from "components/Button";
import UpdateEmailForm from "components/UpdateEmailForm";

const updateEmail = () => {
	// const history = useHistory();

	return (
		<>
			<UpdateEmailForm />
			<div>
				<Button
					text="Cancelar"
					// onSubmit={() => history.push("/login")}
					type="reset"
				/>
				<Button
					text="Confirmar"
					// onClick={}
					type="submit"
				/>
			</div>
			<h3>
				¿Aún no tienes cuenta? ¡Regístrate
				<div href={`signup`}>aquí!</div>
			</h3>
		</>
	);
};
export default updateEmail