import {ADD_NEW_SETS, ADD_SET_SCORE, HANDLE_GAME_POINT, RESET_GAME_SCORES} from "../actions/match";

const initialState = {
    player1: {
        id: 0,
        gameScore: 0,
        setScore: ["0"]
    },
    player2: {
        id: 0,
        gameScore: 0,
        setScore: ["0"]
    }
};

export function match(state = initialState, action) {
    let copy = {};
    const {playerOrder, increment} = action;
    switch (action.type) {

        case RESET_GAME_SCORES:
            copy = {...state};
            copy.player1.gameScore = 0;
            copy.player2.gameScore = 0;
            return copy;
        case HANDLE_GAME_POINT:
            copy = {...state};
            copy["player" + playerOrder].gameScore += increment;
            return copy;

        case ADD_SET_SCORE:
            const points = ["15", "30", "40", "add"];
            copy = JSON.parse(JSON.stringify(state));

            const length = copy["player" + playerOrder].setScore.length;
            const counter = copy["player" + playerOrder].gameScore;
            copy["player" + playerOrder].setScore[length - 1] = points[counter];
            return copy;

        case ADD_NEW_SETS:
            copy = JSON.parse(JSON.stringify(state));
            copy["player1"].setScore.push("0");
            copy["player2"].setScore.push("0");
            return copy;

        default:
            return state;
    }
}
