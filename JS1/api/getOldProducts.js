// import { oldApiUrl } from "../constants.js";

// export async function getOldGames() {
//     const response = await fetch(oldApiUrl);
//     const games = await response.json();
//     if (!response.ok) {
//         throw new Error("Unable to access list of movies.")
//     }
//     return games;
// };

// export async function getOldGame(id) {
//     const response = await fetch(oldApiUrl + id);
//     const game = await response.json();
//     if (!response.ok) {
//         throw new Error("Unable to access game with the id: " + id);
//     }
//     return game;
// };