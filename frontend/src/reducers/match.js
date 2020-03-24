import {
    ADD_COMMENTATOR_MESSAGE,
    ADD_NEW_SETS,
    ADD_SET_SCORE, CHANGE_GAME_MODE,
    END_MATCH,
    HANDLE_GAME_POINT,
    RESET_GAME_SCORES
} from "../actions/match";
import {PLAYER1, PLAYER2, points} from "../utils";


const initialState = {
    isMatchOver: false,
    maxSetNumber: 3,
    commentatorMessage: "The Match starts!!!",
    player1: {
        id: 0,
        gameScore: 0,
        setScore: [0]
    },
    player2: {
        id: 0,
        gameScore: 0,
        setScore: [0]
    }
};

/**
 * We increment the game score 1 by 1 making use of the POINTS constant (["0", "15", "30", "40", "add"])
 * @param state
 * @param action
 * @returns {{player1: {id: number, gameScore: number, setScore: [number]}, player2: {id: number, gameScore: number, setScore: [number]}}}
 */
export function match(state = initialState, action) {
    let copy = {};
    const {playerOrder, increment, message} = action;
    const player = "player" + playerOrder;
    switch (action.type) {

        case RESET_GAME_SCORES:
            copy = {...state};
            copy.player1.gameScore = 0;
            copy.player2.gameScore = 0;
            return copy;
        case HANDLE_GAME_POINT:
            copy = {...state};
            copy[player].gameScore += increment;
            return copy;

        case ADD_SET_SCORE:
            copy = JSON.parse(JSON.stringify(state));
            const length = copy[player].setScore.length;
            copy[player].setScore[length - 1] += increment;
            return copy;

        case ADD_NEW_SETS:
            copy = JSON.parse(JSON.stringify(state));
            copy[PLAYER1].setScore.push(0);
            copy[PLAYER2].setScore.push(0);
            return copy;

        case END_MATCH:
            copy = {...state};
            copy.isMatchOver = true;
            return copy;

        case ADD_COMMENTATOR_MESSAGE:
            return {...state, commentatorMessage: message};

        case CHANGE_GAME_MODE:
            copy = {...state};
            if (copy.maxSetNumber === 3) {
                copy.maxSetNumber = 5
            } else if (copy.maxSetNumber === 5) {
                copy.maxSetNumber = 3
            }
            return copy;


        default:
            return state;
    }
}
