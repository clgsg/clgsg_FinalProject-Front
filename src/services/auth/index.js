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
	({ post }) =>
	async() => {
		try {
			return (await post(`/auth/login`));
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
	async ({ put }) =>{
			try {
			return (await put(`/auth/pwd/update`)).data;
		} catch (error) {
			console.info("¡Vaya! Parece que hay un problema para actualizar tu contraseña.");
			return false;
		}
}

export const forgottenPwd =
	async ({ post }) => {
			try {
				return (await post(`/auth/pwd/forgotten`)).data;
			} catch (error) {
				console.info("¡Vaya! Parece que hay un problema para crear una nueva contraseña");
				return false;
			};
	}
