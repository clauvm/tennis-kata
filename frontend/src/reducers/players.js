import {CHANGE_PLAYER_STATUS_FOR_MATCH, GET_PLAYERS} from "../actions/players";

/**
 * Initial state for the players reducer
 * @type {{players: *[]}}
 */
const initialState = {
    players: [
        {
            id: 1,
            name: "Roger Federer",
            ranking: 1,
            weight: 80,
            height: 184,
            country: "Switzerland",
            img: "https://www.tennisworldusa.org/imgb/89749/is-wimbledon-2020-the-last-slamchance-for-roger-federer.jpg",
            isInMatch: false
        },
        {
            id: 2,
            name: "Rafael Nadal",
            ranking: 2,
            weight: 85,
            height: 186,
            country: "Spain",
            img: "https://img.bleacherreport.net/img/images/photos/003/826/651/hi-res-7feb9feca6ff85280c5faebebb9ed3dc_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top",
            isInMatch: false
        },
        {
            id: 3,
            name: "Novak Djokovic",
            ranking: 3,
            weight: 78,
            height: 179,
            country: "Serbia",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Paris-FR-75-open_de_tennis-31-5-17-Roland_Garros-Novak_Djokovic-13.jpg/1024px-Paris-FR-75-open_de_tennis-31-5-17-Roland_Garros-Novak_Djokovic-13.jpg",
            isInMatch: false
        },
        {
            id: 4,
            name: "Andy Murray",
            ranking: 4,
            weight: 75,
            height: 167,
            country: "Scotland",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Andy_Murray_%2844087043305%29.jpg/440px-Andy_Murray_%2844087043305%29.jpg",
            isInMatch: false
        },
        {
            id: 5,
            name: "John Isner",
            ranking: 5,
            weight: 85,
            height: 190,
            country: "US",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Isner_US16_%2821%29_%2829862971805%29.jpg/490px-Isner_US16_%2821%29_%2829862971805%29.jpg",
            isInMatch: false
        }
    ]
};

export function players(state = initialState, action) {
    const {players, playerId} = action;
    switch (action.type) {
        case GET_PLAYERS:
            return {...state, players};
        case CHANGE_PLAYER_STATUS_FOR_MATCH:
            let copy = JSON.parse(JSON.stringify(state));
            let findPlayerIndex = copy.players.findIndex((player) => player.id === playerId);
            copy.players[findPlayerIndex].isInMatch = !copy.players[findPlayerIndex].isInMatch;
            return copy;
        default:
            return state;
    }
}
