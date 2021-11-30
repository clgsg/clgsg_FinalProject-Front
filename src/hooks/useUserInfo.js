import { useEffect, useState } from "react";
import axios from "axios";
import useSecurity from "context/useSecurity";

const useUserInfo = () => {
	const security = useSecurity();
	const [info, setInfo] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const result = await axios.get("/users/:userid/profile");
				setInfo(result.data);
			} catch (err) {
				const status = err.response && err.response.status;
				if (status === 401) {
					security.onFailure();
				}
			}
		})();
	}, []);

	return { data: info };
};

export default useUserInfo;
