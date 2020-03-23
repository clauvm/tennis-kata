export const dummyPlayer = {
    id: 3,
    name: "Novak Djokovic",
    ranking: 3,
    weight: 78,
    height: 110,
    country: "Serbia",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Paris-FR-75-open_de_tennis-31-5-17-Roland_Garros-Novak_Djokovic-13.jpg/1024px-Paris-FR-75-open_de_tennis-31-5-17-Roland_Garros-Novak_Djokovic-13.jpg",
    isInMatch: false
};
export const dummyPlayerInMatch = {
    id: 3,
    name: "Novak Djokovic",
    ranking: 3,
    weight: 78,
    height: 110,
    country: "Serbia",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Paris-FR-75-open_de_tennis-31-5-17-Roland_Garros-Novak_Djokovic-13.jpg/1024px-Paris-FR-75-open_de_tennis-31-5-17-Roland_Garros-Novak_Djokovic-13.jpg",
    isInMatch: true
};

/**
 * We use this constant as reference of what the current value of the game should be,
 * For instance, if game score = 1, then "15" will be displayed.
 * @type {*[]}
 */
export const points = ["0", "15", "30", "40", "add"];

export const PLAYER1 = "player1";
export const PLAYER2 = "player2";

/**
 * Check if there exists a deuce between a player and the opponent
 * @param p1GameScore
 * @param p2GameScore
 * @returns {boolean}
 */
export const checkDeuce = (p1GameScore, p2GameScore) => {
    return p1GameScore === 3 && p2GameScore === 4
};


/**
 * Check if a player has won a game, this happens when the player reaches 40 points or wins a deuce
 * @param p1GameScore
 * @param p2GameScore
 * @returns {boolean}
 */
export const playerWonGame = (p1GameScore, p2GameScore) => {
    let result = false;
    if (p1GameScore === 3 && p2GameScore < 3) {
        result = true
    } else if (checkDeuce(p2GameScore, p1GameScore)) {
        result = true
    }
    return result
};
