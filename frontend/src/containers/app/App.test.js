import React from 'react';

import {shallow} from 'enzyme'
import {App} from "./App";
import {PlayersContainer} from "../../components/players_container/PlayersContainer";
import {dummyPlayerInMatch} from "../../utils"; // Notice that we import the unconnected component

it('Displays the correct title', () => {
    // We use wrapper to denote a react component that is being wrapped
    const wrapper = shallow(<App/>);
    const title = wrapper.find('h1').text();
    expect(title).toEqual("Tennis Game")
});

it('Has two players container component', () => {
    const wrapper = shallow(<App/>);
    // We use wrapper to denote a react component that is being wrapped
    const playersContainerComponentCounter = wrapper.find('Connect(PlayersContainer)'); // It is connected to the redux store
    expect(playersContainerComponentCounter.length).toEqual(2)
});

it("Shows start match button when two players are chosen for a match", () => {
    const props = {
        players: [dummyPlayerInMatch, dummyPlayerInMatch]
    };
    const wrapper = shallow(<App {...props}/>);
    const startMatchButton = wrapper.find("div.open-start-match");
    expect(startMatchButton.length).toEqual(1);
});
