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
	async (userid, gameid) => {
		try {
			return (await post(`participants/:gameid/new/:userid`)).data;
		} catch (error) {
			console.info("⛔ Error at addParticipant service: ", error.message);
			return false;
		}
	};

export const removeParticipant = ({ post }) => async (userid, gameid) => {
	try {
		return (await post(`participants/:gameid/remove/:userid`)).data;
	} catch (error) {
		console.info("⛔ Error at removeParticipant service: ", error.message);
		return false;
	}
}