import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {Route} from 'react-router-dom'
import App from "./app/App";
import Switch from "react-router/Switch";
import Match from "./match/Match";


const Root = ({store}) => (
    <Provider store={store}>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/match" render={({history}) => (
                <Match history={history}/>
            )}/>
        </Switch>

    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
};
export default Root
