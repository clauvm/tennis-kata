import React from 'react';

import {shallow} from 'enzyme'
import {App} from "./App"; // Notice that we import the unconnected component

it('Displays the correct title', () => {
    // We use wrapper to denote a react component that is being wrapped
    const wrapper = shallow(<App/>);
    const title = wrapper.find('h1').text();
    expect(title).toEqual("Tennis Game")
});
