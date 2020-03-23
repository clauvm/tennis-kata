import React from 'react';

import {shallow} from 'enzyme'
import {Match} from "./Match";
import {dummyPlayerInMatch} from "../../utils";


describe('Match', () => {
    const player1 = {
        id: 0,
        gameScore: 0,
        setScore: [0]
    };
    const player2 = {
        id: 0,
        gameScore: 0,
        setScore: [0]
    };
    it("Displays the correct title", () => {
        const props = {
            dispatch: jest.fn(),
            player1: player1,
            player2: player2,
            showPlayers: [dummyPlayerInMatch, dummyPlayerInMatch]
        };
        const wrapper = shallow(<Match {...props}/>);
        // console.log('shallow html: ', wrapper.debug()); // Mount wrappers can go all the way down
        expect(wrapper.find("h1.title-match").text()).toEqual("Match!")
    });

    it("Displays two players", () => {
        const props = {
            dispatch: jest.fn(),
            player1: player1,
            player2: player2,
            showPlayers: [dummyPlayerInMatch, dummyPlayerInMatch]
        };
        const wrapper = shallow(<Match {...props}/>);
        // console.log('shallow html: ', wrapper.debug()); // Mount wrappers can go all the way down
        expect(wrapper.find("Player").length).toEqual(2)
    });

    it("Displays player counters in love at beginning of match", () => {
        const props = {
            dispatch: jest.fn(),
            player1: player1,
            player2: player2,
            showPlayers: [dummyPlayerInMatch, dummyPlayerInMatch]
        };
        const wrapper = shallow(<Match {...props}/>);
        console.log('shallow html: ', wrapper.debug()); // Mount wrappers can go all the way down
        const counters = wrapper.find("span.counter-game");
        console.log(counters.first().text());
        expect(counters.at(0).text()).toEqual("0");
        expect(counters.at(1).text()).toEqual("0");
    });

    it("Calls correct function and action creator when a player wins a point", () => {
        const props = {
            handleGamePointActionCreator: jest.fn(),
            player1: player1,
            player2: player2,
            showPlayers: [dummyPlayerInMatch, dummyPlayerInMatch]
        };
        const wrapper = shallow(<Match {...props}/>);
        // console.log('shallow html: ', wrapper.debug()); // Mount wrappers can go all the way down
        const addPointsButton = wrapper.find("button.win-point-button").at(0);
        const spy = jest.spyOn(wrapper.instance(), "winPoint");
        addPointsButton.simulate("click");
        expect(spy).toHaveBeenCalledWith(1);
        expect(props.handleGamePointActionCreator.mock.calls.length).toBe(1);
        const counters = wrapper.find("span.counter-game").at(0);
    });

});


