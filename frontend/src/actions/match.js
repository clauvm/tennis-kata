export const RESET_GAME_SCORES = 'RESET_GAME_SCORES';
export const HANDLE_GAME_POINT = 'HANDLE_GAME_POINT';
export const ADD_SET_SCORE = 'ADD_SET_SCORE';
export const ADD_NEW_SETS = 'ADD_NEW_SET';
export const END_MATCH = 'END_MATCH';
export const ADD_COMMENTATOR_MESSAGE = 'ADD_COMMENTATOR_MESSAGE';
export const CHANGE_GAME_MODE = 'CHANGE_GAME_MODE';

export const resetGameScoresActionCreator = () => ({
    type: RESET_GAME_SCORES,
});

export const handleGamePointActionCreator = (playerOrder, increment) => ({
    type: HANDLE_GAME_POINT,
    playerOrder,
    increment
});

export const addSetScoreActionCreator = (playerOrder, increment) => ({
    type: ADD_SET_SCORE,
    playerOrder,
    increment
});

export const addNewSetsActionCreator = () => ({
    type: ADD_NEW_SETS,
});

export const endMatchActionCreator = () => ({
    type: END_MATCH,
});

export const addCommentatorMessageActionCreator = (message) => ({
    type: ADD_COMMENTATOR_MESSAGE,
    message
});

export const changeGameMode = () => ({
    type: CHANGE_GAME_MODE
});
