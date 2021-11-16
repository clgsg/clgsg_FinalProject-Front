import { useHistory } from "react-router-dom";

import { Link } from "@chakra-ui/layout";
import Button from "components/Button";
import UpdateEmailForm from "components/Forms/UpdateEmail";

const updateEmail = () => {




		const handleClick = () => {
			if (Button.className === "CancelBttn") {
				history.push("/profile");
			}
			if (Button.className === "UpdateEmailBttn") {
				history.push("/profile");
			}
		};


	return (
		<>
			<UpdateEmailForm />
			<Button
				className="CancelBttn"
				text="Cancelar"
				onClick={handleClick}
				to="profile"
			/>
			<Button
				className="UpdateEmailBttn"
				text="Confirmar"
				onClick={handleClick}
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
