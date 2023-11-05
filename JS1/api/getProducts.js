import { apiUrl } from "../constants.js";

export async function getGames() {
    const response = await fetch(apiUrl);
    const games = await response.json();
    if (!response.ok) {
        throw new Error("Unable to access list of movies.")
    }
    return games;
};

export async function getGame(id) {
    const response = await fetch(apiUrl + id);
    const game = await response.json();
    if (!response.ok) {
        throw new Error("Unable to access game with the id: " + id);
    }
    return game;
};