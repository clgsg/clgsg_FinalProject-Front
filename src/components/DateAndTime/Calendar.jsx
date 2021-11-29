import {useState} from "react";
import MobileDatePicker from '@mui/lab/MobileDatePicker';

function Calendar() {

	const [startDate, setStartDate] = useState(new Date());
		return (
			<>
				<MobileDatePicker
					selected={startDate}
					onChange={(date) => setStartDate(date)}
					locale="es-ES"
					showTimeSelect
					timeFormat="H:mm"
					timeIntervals={15}
					dateFormat="dd-MMM-yyyy    🕐 H:mm"
					placeholderText="Selecciona fecha y hora"
					withPortal
					calendarStartDay={1}
			 />
			</>
		);
}
export default Calendar