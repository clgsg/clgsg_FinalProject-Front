import {useState} from "react";

// import {DatePicker} from "react-datepicker/DayPickerInput";
// import { DateUtils } from "react-datepicker";
// import "react-day-picker/lib/style.css";




function Calendar() {
	// function parseDate(str, format, locale) {
	// 	const parsed = dateFnsParse(str, format, new Date(), { locale });
	// 	if (DateUtils.isDate(parsed)) {
	// 		return parsed;
	// 	}
	// 	return undefined;
	// }
	const [startDate, setStartDate] = useState(new Date());
		return (
			<>
				{/* <DatePicker */}
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
				{/* /> */}
			</>
		);
}
export default Calendar