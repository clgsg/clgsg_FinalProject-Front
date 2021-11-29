import Button from "components/Button";
import "index.scss";
import { updateEmail } from "services/auth";

const UpdateEmailForm = () => (
	<div>
		<h1>Cambio de email</h1>

					<Button
						type="reset"
						text="Cancelar"
						to="users/:userid/profile"/>
					<Button
						type="submit"
						onClick={updateEmail}
						text="Confirmar"
						to="users/:userid/profile"/>
	</div>
);

export default UpdateEmailForm;
