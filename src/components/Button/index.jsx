import { useHistory } from "react-router-dom";
import "components/index.scss";

function Button(props) {
	const history = useHistory();
	const handleOnSubmit = () => {
		history.push(`/${props.to}`);
	};
	return (
		<button className="button" onClick={handleOnSubmit}>
			{props.text}
		</button>
	);
}
export default Button;
