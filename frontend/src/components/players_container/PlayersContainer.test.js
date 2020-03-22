import React from 'react'
// In this case the component will not be fully rendered into the DOM, but it is converted into a JSON representation
import {mount, shallow} from 'enzyme'
import {PlayersContainer} from "./PlayersContainer";
import Player from "../player/Player";

describe('Players Container Component', () => {
    const dummyPlayer = {
        id: 3,
        name: "Novak Djokovic",
        ranking: 3,
        weight: 78,
        height: 110,
        country: "Serbia",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Paris-FR-75-open_de_tennis-31-5-17-Roland_Garros-Novak_Djokovic-13.jpg/1024px-Paris-FR-75-open_de_tennis-31-5-17-Roland_Garros-Novak_Djokovic-13.jpg",
        isInMatch: false
    };
    const dummyPlayerInMatch = {
        id: 3,
        name: "Novak Djokovic",
        ranking: 3,
        weight: 78,
        height: 110,
        country: "Serbia",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Paris-FR-75-open_de_tennis-31-5-17-Roland_Garros-Novak_Djokovic-13.jpg/1024px-Paris-FR-75-open_de_tennis-31-5-17-Roland_Garros-Novak_Djokovic-13.jpg",
        isInMatch: true
    };

    it("Displays the correct title", () => {
        const props = {
            dispatch: jest.fn(),
            isMatch: false,
            title: "Match",
            players: []
        };
        const wrapper = shallow(<PlayersContainer {...props}/>);
        expect(wrapper.find("h2").text()).toEqual("Match")
    });

    it("Displays correct message when there are no players selected for a match", () => {
        const props = {
            dispatch: jest.fn(),
            isMatch: true,
            title: "Match",
            players: []
        };
        const wrapper = shallow(<PlayersContainer {...props}/>);
        expect(wrapper.find("div.players-grid").text()).toEqual("Please select two players to start a match")
    });

    it("Displays correct message when there are no players selected to choose from", () => {
        const props = {
            dispatch: jest.fn(),
            isMatch: false,
            title: "Match",
            players: []
        };
        const wrapper = shallow(<PlayersContainer {...props}/>);
        expect(wrapper.find("div.players-grid").text()).toEqual("Add players")
    });

    it("Calls function to add player for match with correct id", () => {
        const props = {
            dispatch: jest.fn(),
            changePlayerStatusMatchActionCreator: jest.fn(),
            isMatch: false,
            title: "Match",
            players: [dummyPlayer]
        };

        const wrapper = mount(<PlayersContainer {...props}/>);
        // console.log('Mount html: ', wrapper.debug()); // Mount wrappers can go all the way down
        wrapper.find("div.player").simulate('click');
        expect(props.changePlayerStatusMatchActionCreator).toHaveBeenCalledWith(3)
    });

    it("Renders correctly a player when is selected for a match", () => {
        const props = {
            dispatch: jest.fn(),
            changePlayerStatusMatchActionCreator: jest.fn(),
            isMatch: true,
            title: "Match",
            players: [dummyPlayer]
        };

        const wrapper = shallow(<PlayersContainer {...props}/>);
        // console.log('Mount html: ', wrapper.debug()); // Mount wrappers can go all the way down
        const playersSelectedForMatch = wrapper.find(Player);
        // console.log(playersSelectedForMatch.debug());
        // console.log(playersSelectedForMatch.first());
        expect(playersSelectedForMatch.length).toBeGreaterThan(0);
        expect(playersSelectedForMatch.prop('isInMatch')).toBe(false);
    });

    it("Sets blur opacity of player when selected to play match", () => {
        const props = {
            dispatch: jest.fn(),
            changePlayerStatusMatchActionCreator: jest.fn(),
            isMatch: false,
            title: "Match",
            players: [dummyPlayerInMatch]
        };

        const wrapper = shallow(<PlayersContainer {...props}/>);
        const playersSelectedForMatch = wrapper.find("li");
        const containerStyle = playersSelectedForMatch.get(0).props.style;
        expect(containerStyle).toHaveProperty('opacity', 0.5);
    });

    it("Sets normal opacity of player when deselected to play match", () => {
        const props = {
            dispatch: jest.fn(),
            changePlayerStatusMatchActionCreator: jest.fn(),
            isMatch: false,
            title: "Match",
            players: [dummyPlayer]
        };

        const wrapper = shallow(<PlayersContainer {...props}/>);
        const playersSelectedForMatch = wrapper.find("li");
        const containerStyle = playersSelectedForMatch.get(0).props.style;
        expect(containerStyle).toHaveProperty('opacity', 1);
    });

    it("Does not allow to add a player when there are already two players added in a match", () => {
        const props = {
            dispatch: jest.fn(),
            changePlayerStatusMatchActionCreator: jest.fn(),
            isMatch: false,
            title: "Match",
            players: [dummyPlayerInMatch, dummyPlayerInMatch]
        };
        const wrapper = shallow(<PlayersContainer {...props}/>);
        const playersSelectedForMatch = wrapper.find("li");
        const containerStyle = playersSelectedForMatch.get(0).props.style;
        expect(wrapper.instance().checkIfPlayerMatchStatusShouldBeUpdated(true, true, props.players)).toBe(false);
    })

});

