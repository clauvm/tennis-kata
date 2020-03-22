import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux'
import './App.css';
import PlayersContainer from "../../components/players_container/PlayersContainer";
import * as playersActions from '../../actions/players'
import Link from "react-router-dom/Link";

export class App extends Component {

    render() {
        const {players} = this.props;
        const playersForMatch = players ? players.filter((player) => player.isInMatch) : [];

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

                        <PlayersContainer title={"Match"} isMatch={true} players={playersForMatch}/>
                        {
                            playersForMatch.length > 1 && (
                                <div className="open-start-match">
                                    <Link
                                        to="/match"
                                        className="open-start-match"
                                    >Add a player</Link>
                                </div>
                            )
                        }

                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        players: state.players.players
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(playersActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
