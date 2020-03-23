import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux'
import '../app/App.css';
import './Match.css'
import Player from "../../components/player/Player";
import * as matchActions from "../../actions/match";

export class Match extends Component {

    winPoint = (playerId, order) => {
        const {player1, player2} = this.props;
        this.props.addSetScoreActionCreator(order);
        this.props.handleGamePointActionCreator(order, 1);

    };

    render() {
        const {showPlayers} = this.props;
        const showPlayer1 = showPlayers[0];
        const showPlayer2 = showPlayers[1];

        return (
            <div className="list-players">
                <div className="list-players-title">
                    <h1>Match!</h1>
                </div>
                <div className="match-container">
                    <div className="players">
                        <div>
                            <Player id={showPlayer1.id} name={showPlayer1.name} img={showPlayer1.img}
                                    ranking={showPlayer1.ranking} isInMatch={showPlayer1.isInMatch}/>

                            <button className={"win-point-button"} onClick={() => this.winPoint(showPlayer1.id, 1)}>Win
                                Point
                            </button>
                        </div>
                        <div>
                            <h1>VS</h1>
                        </div>
                        <div>
                            <Player id={showPlayer2.id} name={showPlayer2.name} img={showPlayer2.img}
                                    ranking={showPlayer2.ranking} isInMatch={showPlayer2.isInMatch}/>
                            <button className={"win-point-button"} onClick={() => this.winPoint(showPlayer2.id, 2)}>Win
                                Point
                            </button>
                        </div>

                    </div>


                </div>

            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(matchActions, dispatch)
}

function mapStateToProps(state) {
    return {
        showPlayers: state.players.players.filter((player) => player.isInMatch),
        player1: state.match.player1,
        player2: state.match.player2,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Match)
