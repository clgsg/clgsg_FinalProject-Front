import { Redirect } from "react-router";
import Routes from "routes";
import { useHistory } from "react-router-dom";

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