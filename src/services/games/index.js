export const getAllGames =
	({ get }) =>
	async (page, perpage) => {
		try {
			return (await get(`/games?page=${page}&perPage=${perpage}`))
				.data;
		} catch (error) {
			console.info("⛔ Error at getAllGames service: ", error.message);
			return false;
		}
	};

export const createGame =
	({ get }) =>
	async () => {
		try {
			return (await get(`/games/new`))
				.data;
		} catch (error) {
			console.info(
				"⛔ Error at createGame service: ",
				error.message
			);
			return false;
		}
	};
