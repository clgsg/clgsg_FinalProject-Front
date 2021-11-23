import Button from "components/Button";
import "components/index.scss";
function UserProfileForm() {
	return (
		<>
			<img alt="user"></img>
			<h2>Nombre</h2>
			{/* <ShortText /> */}
			<h2>Apellidos</h2>
			{/* <ShortText /> */}
			<h2>Usuario</h2>
			{/* <ShortText /> */}
			<h2>Email</h2>
			{/* <ShortText /> */}
			<Button text={"Cambiar email"} />
			<h2>Contraseña</h2>
			<Button text={"Cambiar contraseña"} />
			<h2>Fecha de nacimiento (dd-mm-aaaa)</h2>
			{/* <ShortText /> */}
			<h2>Eres</h2>
			{/* <RadioButton label={"Hombre"} /> */}
			{/* <RadioButton label={"Mujer"} /> */}

			<Button text={"Acceder"} />
		</>
	);
}

export default UserProfileForm;
