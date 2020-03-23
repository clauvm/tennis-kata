import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux'
import '../app/App.css';
import './Match.css'
import Player from "../../components/player/Player";
import * as matchActions from "../../actions/match";
import {checkDeuce, playerWonGame, points} from "../../utils";

export class Match extends Component {

    /**
     * Handles the logic when a player wins a point, if the player has not won the game yet
     * then his or her score and increment. However, if the player has not won the game but it
     * will win the deuce, then the opponent score will decrement (from add to 40)
     * @param order : If it is player 1 or player 2
     */
    winPoint = (order) => {
        const playerScore = this.props["player" + order];
        const opponent = order === 1 ? 2 : 1;
        const opponentScore = this.props["player" + opponent];
        if (!playerWonGame(playerScore.gameScore, opponentScore.gameScore)) {
            if (checkDeuce(playerScore.gameScore, opponentScore.gameScore)) {
                this.props.handleGamePointActionCreator(opponent, -1);
            } else {
                this.props.handleGamePointActionCreator(order, 1);
            }
        } else {
            console.log("Player " + order + " Won the game!!");
            this.props.resetGameScoresActionCreator();
            this.props.addSetScoreActionCreator(order, 1);
        }

    };

    render() {
        const {showPlayers, player1, player2} = this.props;
        const showPlayer1 = showPlayers[0];
        const showPlayer2 = showPlayers[1];
        const renderPlayer = (player, score, order) => {
            return (

                <div>
                    <Player id={player.id} name={player.name} img={player.img}
                            ranking={player.ranking} isInMatch={player.isInMatch}/>

                    <button className={"win-point-button"} onClick={() => this.winPoint(order)}>Win
                        Point
                    </button>
                    <span className={"counter-game"}>{points[score]}</span>
                </div>
            )
        };


        return (
            <div className="list-players">
                <div className="list-players-title">
                    <h1 className={"title-match"}>Match!</h1>
                </div>
                <div className="match-container">
                    <div className="players">
                        {
                            renderPlayer(showPlayer1, player1.gameScore, 1)
                        }

                        <h1>VS</h1>
                        {
                            renderPlayer(showPlayer2, player2.gameScore, 2)
                        }
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
