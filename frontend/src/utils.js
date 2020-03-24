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
export const DEUCE_MESSAGE = "There is a Deuce!!";

/**
 * Check if there exists a deuce between a player and the opponent
 * @param p1GameScore
 * @param p2GameScore
 * @returns {boolean}
 */
export const checkDeuce = (p1GameScore, p2GameScore) => {
    return p1GameScore === 3 && p2GameScore === 4
};

export const checkTieBreak = (p1SetScore, p2SetScore) => {
    return p1SetScore === 6 && p2SetScore === 6
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

/**
 * Checks if a player has one a set
 * @param p1SetsWon Number of sets won by player 1
 * @param p2SetsWon Number of sets won by player 2
 * @returns {boolean}
 */
export const playerWonSet = (p1SetsWon, p2SetsWon) => {
    let result = false;
    if ((p1SetsWon === 6 && p2SetsWon <= 4) || ((p1SetsWon === 7 && p2SetsWon <= 5))) {
        result = true
    }
    return result
};

/**
 * Checks if a player has one a match
 * @param p1SetsWon Number of sets won by player 1
 * @param p2SetsWon Number of sets won by player 2
 * @param maxSets Maximum number of sets
 * @returns {boolean}
 */
export const playerWonMatch = (p1SetsWon, p2SetsWon, maxSets) => {
    let response = false;
    if (maxSets === 3) {
        response = ((p1SetsWon === 2 && p2SetsWon === 0) || (p1SetsWon === 2 && p2SetsWon === 1))
    } else if (maxSets === 5) {
        response = ((p1SetsWon === 3 && p2SetsWon === 0) || (p1SetsWon === 4 && p2SetsWon === 1) || (p1SetsWon === 3 && p2SetsWon === 2))
    }
    return response
};

/**
 * Get message when a player wins a game
 * @param name, Player's name
 * @returns {*}
 */
export const getMessage = (name) => {
    const message1 = "Great shot by " + name + "!!!";
    const message2 = "Amazing right hand by " + name + "!!!";
    const message3 = "" + name + " is on fire!";
    const message4 = "" + name + "'s backhand is remarkable!";
    const messages = [message1, message2, message3, message4];
    return messages[Math.floor(Math.random() * messages.length)]
};
