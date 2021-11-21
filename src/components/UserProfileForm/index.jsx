
import Bttn from "components/Button";


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
			<Bttn text={"Cambiar email"} />
			<h2>Contraseña</h2>
			<Bttn text={"Cambiar contraseña"} />
			<h2>Fecha de nacimiento (dd-mm-aaaa)</h2>
			{/* <ShortText /> */}
			<h2>Eres</h2>
			{/* <RadioBttn label={"Hombre"} /> */}
			{/* <RadioBttn label={"Mujer"} /> */}

			<Bttn text={"Acceder"} />
		</>
	);
}

export default UserProfileForm;
