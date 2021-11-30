import { useState } from "react";
import axios from "axios";
import SecurityContext from "./SecurityContext";
import LoginForm from "components/LoginForm";

const SecurityProvider = (props) => {
	const [loggedIn, setLoggedIn] = useState(true);

	return (
		<SecurityContext.Provider
			value={{
				login: async (username, email, password) => {
					await axios.post('/auth/login', { username, email, password })
					setLoggedIn(true)
				},
				// logout: async () => {
				// 	await axios.post('/auth/logout')
				// 	return setLoggedIn(false)
				// },
				onFailure() {
					return setLoggedIn(false)
				},
				loggedIn,
			}}
			>
			{loggedIn ? props.children : <LoginForm />}
			</SecurityContext.Provider>
  )
}


export default SecurityProvider;
