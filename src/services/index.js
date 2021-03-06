import axios from "axios";
import { login, signup, updateEmail, updatePassword} from "./auth"
import { getAllGames, createGame, getUpcomingGames } from "./games";
import {getParticipants, addParticipant} from "./participants"
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
	updateEmail: updateEmail(client),
	updatePassword: updatePassword(client),
}

const games = {
	getGames: getAllGames(client),
	createGames: createGame(client),
	getUpcomingGames: getUpcomingGames(client),
};

const participants = {
	getParticipants: getParticipants(client),
	addParticipant: addParticipant(client),
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
