export const RESET_GAME_SCORES = 'RESET_GAME_SCORES';
export const HANDLE_GAME_POINT = 'HANDLE_GAME_POINT';
export const ADD_SET_SCORE = 'ADD_SET_SCORE';
export const ADD_NEW_SETS = 'ADD_NEW_SET';

export const resetGameScoresActionCreator = () => ({
    type: RESET_GAME_SCORES,
});

export const handleGamePointActionCreator = (playerOrder, increment) => ({
    type: HANDLE_GAME_POINT,
    playerOrder,
    increment
});

export const addSetScoreActionCreator = (playerOrder) => ({
    type: ADD_SET_SCORE,
    playerOrder
});

export const addNewSetsActionCreator = () => ({
    type: ADD_NEW_SETS,
});
