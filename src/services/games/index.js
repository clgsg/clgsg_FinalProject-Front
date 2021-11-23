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


export const getGameInfo =
	({get}) => async (gameid) => {
		try {
			return (await get(`games/${gameid}`))
		} catch (error) {
			console.info("⛔ Error at getGameInfo service: ",
				error.message
			);
			return false;
		}
	}

export const getUpcomingGames =
	 ({get}) => async () => {
	try {
		return (await get(`games/upcoming`))
	} catch (error) {
		console.info("⛔ Error at getUpcomingGames service: ", error.message);
		return false;
	}
}