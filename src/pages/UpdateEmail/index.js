
import { Link } from "@chakra-ui/layout";
import {Button, ButtonGroup} from "@chakra-ui/react";
import UpdateEmailForm from "components/UpdateEmailForm";

const updateEmail = () => {
	return (
		<>
			<UpdateEmailForm />
			<ButtonGroup>
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
			</ButtonGroup>
			<h3>
				¿Aún no tienes cuenta? ¡Regístrate
				<Link href={`signup`}>aquí!</Link>
			</h3>
		</>
	);
};

export default updateEmail;
