import {RESET_SCORES} from "../actions/match";

const initialState = {
    player1: {
        id: 0,
        gameScore: 0,
        setScore: []
    },
    player2: {
        id: 0,
        gameScore: 0,
        setScore: []
    }
};

export function match(state = initialState, action) {

    switch (action.type) {
        case RESET_SCORES:
            let copy = {...state};
            copy.player1.gameScore = 0;
            copy.player2.gameScore = 0;
            return copy;
        default:
            return state;
    }
}
