export const getUsersGames =
	({ get }) =>
	async (userid) => {
		try {
			return (await get(`/users/games/${userid}`)).data;
		} catch (error) {
			console.info(
				"⛔ Error at getUsersGames service: ",
				error.message
			);
			return false;
		}
	};

export const getUserData =
	({ get }) =>
	async (userid) => {
		try {
			return (await get(`/users/${userid}`)).data;
		} catch (error) {
			console.info("⛔ Error at addParticipant service: ", error.message);
			return false;
		}
	};
