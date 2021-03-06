export const signup =
	({ post }) =>
	async() => {
		try {
			return (await post(`/auth/signup`)).data;
		} catch (error) {
			console.info("¡Vaya! Parece que hay un problema con el registro.");
			return false;
		}
	};

export const login =
	({ get }) =>
	async() => {
		try {
			return (await get(`/auth/login`)).data;
		} catch (error) {
			console.info("¡Vaya! Parece que hay un problema con el acceso.");
			return false;
		}
	};


export const updateEmail =
	({ put }) =>
	async() => {
		try {
			return (await put(`/auth/email/update`)).data;
		} catch (error) {
			console.info("¡Vaya! Parece que hay un problema para actualizar tu email.");
			return false;
		}
	};


export const updatePassword =
	({ put }) =>
	async() => {
		try {
			return (await put(`/auth/password/update`)).data;
		} catch (error) {
			console.info(
				"¡Vaya! Parece que hay un problema para actualizar tu contraseña."
			);
			return false;
		}
	};