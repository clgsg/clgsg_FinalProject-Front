
import { Link } from "@chakra-ui/layout";
import Bttn from "components/Button";
import UpdateEmailForm from "components/UpdateEmailForm";

const updateEmail = () => {


	return (
		<>
			<UpdateEmailForm />
			<Bttn
				className="CancelBttn"
				text="Cancelar"
				// onClick={}
				to="profile"
			/>
			<Bttn
				className="UpdateEmailBttn"
				text="Confirmar"
				// onClick={}
				to="profile"
			/>

			<h3>
				¿Aún no tienes cuenta? ¡Regístrate
				<Link href={`signup`}>aquí!</Link>
			</h3>
		</>
	);
};

export default updateEmail;
