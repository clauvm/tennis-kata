import {combineReducers} from 'redux'
import {players} from "./players";
import {match} from "./match";

const rootReducer = combineReducers({
    players: players,
    match : match
});
export default rootReducer;
