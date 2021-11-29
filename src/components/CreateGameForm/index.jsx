import Button from "components/Button";
import "components/index.scss";
import Calendar from "components/DateAndTime/Calendar.jsx";

function CreateGameForm() {
	return (
		<>
			<h2>Qué</h2>
			<div
				variant="outline"
				size="sm"
				borderColor="teal"
				placeholder="Selecciona el deporte"
			>
				<option value="option1">3x3</option>
				<option value="option2">Baloncesto</option>
				<option value="option3">Fútbol</option>
				<option value="option4">Fútbol sala</option>
				<option value="option5">Fútbol 7</option>
				<option value="option6">Pádel</option>
				<option value="option7">Tenis</option>
				<option value="option8">Otro</option>
			</div>
			<h2>Fecha</h2>
			<Calendar></Calendar>
			<h2>A partir de las</h2>
			<h2>Deporte adaptado</h2>

			<h2>Hombres/Mujeres/Mixto</h2>

			<div
				variant="outline"
				size="sm"
				borderColor="teal"
				placeholder="Selecciona el lugar"
			>
				<option value="option1">IDB 2.100 PAU</option>
				<option value="option2">IDB 2.75 PAU</option>
				<option value="option3">IDB 3.16 PAU</option>
				<option value="option4">IDB Ademo (Arroyo Fontarrón)</option>
				<option value="option5">IDB Alameda de Osuna I</option>
				<option value="option6">IDB Alameda de Osuna II</option>
				<option value="option7">IDB Alas</option>
				<option value="option8">IDB Albaicín</option>
				<option value="option9">IDB Albaida</option>
				<option value="option10">IDB Alcalde Martín de Alzaga</option>
				<option value="option11">IDB Alerce</option>
				<option value="option12">IDB Alfonso XIII</option>
				<option value="option13">IDB Alhaurín</option>
				<option value="option14">IDB Alicún</option>
				<option value="option15">IDB Aliseda</option>
				<option value="option16">IDB Almudena</option>
				<option value="option17">IDB Ambulatorio (El Paraíso)</option>
				<option value="option18">IDB Americio</option>
			</div>
			<div spacing={4}>
				<Button text="Borrar" />
				<Button	text="Buscar"/>
			</div>
		</>
	);
}

export default CreateGameForm;
