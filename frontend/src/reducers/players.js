import {GET_PLAYERS} from "../actions/players";

export function players(state = [], action) {
    const {players} = action;
    switch (action.type) {
        case GET_PLAYERS:
            return {...state, players};
        default:
            return state;
    }
}
