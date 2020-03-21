import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux'
import './App.css';
import PlayersContainer from "../../components/players_container/PlayersContainer";
import * as playersActions from '../../actions/players'


function App(props) {
    const {players} = props;
    return (
        <div className="list-players">
            <div className="list-players-title">
                <h1>Tennis Game</h1>
            </div>
            <div className="list-players-content">
                <div>
                    <PlayersContainer title={"Players"} isMatch={false} players={players}/>
                </div>

                <div>
                    <PlayersContainer title={"Match"} isMatch={true} players={[]}/>
                </div>
            </div>

        </div>
    );
}

function mapStateToProps(state) {
    console.log(state.players.players);
    return {
        players: state.players.players
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(playersActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
