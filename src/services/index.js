import axios from "axios";
const client = axios.create({
	baseURL: "https://pokeapi.co/api/v2",
	headers: { "Content-Type": "application/json" },
});
export default client;
