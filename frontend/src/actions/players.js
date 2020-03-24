export const GET_PLAYERS = 'GET_PLAYERS';
export const CHANGE_PLAYER_STATUS_FOR_MATCH = 'CHANGE_PLAYER_STATUS_FOR_MATCH';

export const getPlayersActionCreator = () => ({
    type: GET_PLAYERS,
});

export const changePlayerStatusMatchActionCreator = (id) => ({
    type: CHANGE_PLAYER_STATUS_FOR_MATCH,
    playerId: id
});
