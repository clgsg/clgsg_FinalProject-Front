import Bttn from "components/Button";

export default function TopHeader() {
	return (
		<div>
			<h1> Este es el encabezado </h1>
			<Bttn to="/auth/login"/>
			<Bttn to="/auth/signup" text={"Quiero registrarme"}/>
		</div>
	);
}
