import Button from "components/Button";
import "index.scss";
import { auth } from "services";

const UpdatePasswordForm = () =>{
		return (
			<>
			<form>
				<Button
					type="submit"
					text="Actualizar contraseña"
					onSubmit={auth}
					to="users/${userid}/profile"/>

				</form>

			</>
	)
};

export default UpdatePasswordForm