import axios from "axios";
import { login, signup, updatePassword, forgottenPwd} from "./auth"
import { createGame, getUpcomingGames } from "./games";
import { getParticipants, addParticipant, removeParticipant } from "./participants"
import { getUsersGames, getUserData } from "./users"

const client = axios.create({
	baseURL: "http://localhost:3000/",
	// baseURL: process.env.REACT_APP_BACK_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

const auth ={
	login: login(client),
	signup: signup(client),
	updatePassword: updatePassword(client),
	forgottenPwd: forgottenPwd(client),
}

const games = {
	createGame: createGame(client),
	getUpcomingGames: getUpcomingGames(client),
};

const participants = {
	getParticipants: getParticipants(client),
	addParticipant: addParticipant(client),
	removeParticipant: removeParticipant(client),
}

const users = {
	getUsersGames: getUsersGames(client),
	getUserData: getUserData(client),
}

export {
	auth,
	games,
	participants,
	users,
};
