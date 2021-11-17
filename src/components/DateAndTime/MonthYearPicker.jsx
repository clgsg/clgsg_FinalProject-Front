import { useState } from "react";

const DatePicker = () => {
	const [startDate, setStartDate] = useState(new Date());
	return (
		<DatePicker
			selected={startDate}
			onChange={(date) => setStartDate(date)}
			showTimeSelect
			showTimeSelectOnly
			timeIntervals={15}
			timeCaption="Time"
			dateFormat="h:mm aa"
		/>
	);
};

export default DatePicker