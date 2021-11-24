export const getParticipants =
	({ get }) =>
	async (gameid) => {
		try {
			return (await get(`/participants/${gameid}`)).data;
		} catch (error) {
			console.info("⛔ Error at getParticipants service: ", error.message);
			return false;
		}
	};

export const addParticipant =
	({ post }) =>
	async (username, gameid) => {
		try {
			return (await post(`/games/new`)).data;
		} catch (error) {
			console.info("⛔ Error at addParticipant service: ", error.message);
			return false;
		}
	};
