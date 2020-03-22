import React from 'react';

import {shallow} from 'enzyme'
import {App} from "./App"; // Notice that we import the unconnected component

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
