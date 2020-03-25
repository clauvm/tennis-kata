import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux'
import '../app/App.css';
import './Match.css'
import Player from "../../components/player/Player";
import * as matchActions from "../../actions/match";
import {
    checkDeuce,
    checkTieBreak,
    getMessage, getPlayersWonSets,
    playerWonGame,
    playerWonMatch,
    playerWonSet,
    points
} from "../../utils";
import ScoreDisp from "../../components/score_disp/ScoreDisp";
import ArrowIcon from 'react-icons/lib/md/arrow-back'

export class Match extends Component {

    /**
     * Go back to main page
     */
    goBack = () => {
        this.props.history.push('/')
    };

    /**
     * Continue with game
     * @param p1Order, current player order (1 or 2)
     * @param p1GameScore, current player Score
     * @param p2Order, opponent order (1 or 3)
     * @param p2GameScore opponent score
     * @param isPlayerInTieBreak, if there is a tie break
     */
    continueGame = (p1Order, p1GameScore, p2Order, p2GameScore, isPlayerInTieBreak) => {
        if (checkDeuce(p1GameScore, p2GameScore) && !isPlayerInTieBreak) {
            this.props.handleGamePointActionCreator(p2Order, -1);
        } else {
            this.props.handleGamePointActionCreator(p1Order, 1);
        }
    };

    /**
     * Continue with set
     * @param order
     */
    continueSet = (order) => {
        this.props.addSetScoreActionCreator(order, 1);
    };

    /**
     * Handles the logic when a player wins a point, if the player has not won the game yet
     * then his or her score and increment. However, if the player has not won the game but it
     * will win the deuce, then the opponent score will decrement (from add to 40)
     * @param order : If it is player 1 or player 2
     */
    winPoint = (order) => {
        const {isMatchOver, maxSetNumber} = this.props; // Check if match is over
        const playerScore = this.props["player" + order]; // Get scores of current player
        const opponent = order === 1 ? 2 : 1; // Get order of oponent (1 or 2)
        const opponentScore = this.props["player" + opponent]; // Get scores of opponent
        const currentSet = playerScore.setScore.length; // Get the number of the current set being played
        const isPlayerInTieBreak = checkTieBreak(playerScore.setScore[currentSet - 1], opponentScore.setScore[currentSet - 1]); //Check if there is a tie break
        const playerName = this.props.showPlayers[order - 1].name; // Current player name
        let message = ""; // Message for comentator
        if (!isMatchOver) {
            if (!playerWonGame(isPlayerInTieBreak ? playerScore.gameScore + 1 : playerScore.gameScore, opponentScore.gameScore, isPlayerInTieBreak)) { //Check if player won current game (normal or tiebreak)
                message = getMessage(playerName);
                this.props.addCommentatorMessageActionCreator(message);
                this.continueGame(order, playerScore.gameScore, opponent, opponentScore.gameScore, isPlayerInTieBreak)
            } else { // Player won the game
                message = playerName + " Won the game!!";
                this.props.addCommentatorMessageActionCreator(message);
                if (!playerWonSet(playerScore.setScore[currentSet - 1] + 1, opponentScore.setScore[currentSet - 1]) && !isPlayerInTieBreak) { // Check if player won the set, if he or she wins a tie break game then the set is won.
                    this.continueSet(order)
                } else { // Player won set
                    message = playerName + " # Won the set " + currentSet + "";
                    this.props.addCommentatorMessageActionCreator(message);
                    const {setsWonP1, setsWonP2} = getPlayersWonSets(playerScore.setScore, opponentScore.setScore, currentSet);
                    if (!playerWonMatch(setsWonP1, setsWonP2, maxSetNumber)) { // Check if player won match
                        this.props.addSetScoreActionCreator(order, 1);
                        this.props.addNewSetsActionCreator();
                    } else { // Player won match
                        message = playerName + " Won the match!!";
                        console.log(message);
                        this.props.addCommentatorMessageActionCreator(message);
                        this.props.addSetScoreActionCreator(order, 1);
                        this.props.endMatchActionCreator();
                    }
                }
                this.props.resetGameScoresActionCreator();

            }
        }
    };

    componentDidMount() {
        this.props.resetMatch()
    }

    render() {
        const {showPlayers, player1, player2, maxSetNumber, isMatchOver} = this.props;
        const showPlayer1 = showPlayers[0] || {};
        const showPlayer2 = showPlayers[1] || {};
        const currentSet = player1.setScore.length;
        const isPlayerInTieBreak = checkTieBreak(player1.setScore[currentSet - 1], player2.setScore[currentSet - 1]);
        const {setsWonP1, setsWonP2} = getPlayersWonSets(player1.setScore, player2.setScore, currentSet);

        const renderPlayer = (player, hasWon, order, isMatchOver) => {
            return (

                <div style={{opacity: !hasWon && isMatchOver ? '0.5' : '1'}}>
                    <Player id={player.id} name={player.name} img={player.img}
                            ranking={player.ranking} isInMatch={player.isInMatch}/>

                    <button className={"win-point-button"} onClick={() => this.winPoint(order)}>Win
                        Point
                    </button>
                </div>
            )
        };


        return (
            <div>
                <div className="list-players">
                    <div className="match-list-players-title">
                        <span><span onClick={this.goBack} className={"back-icon"}><ArrowIcon size={30}/></span><h1
                            className={"title-match"}>Match!</h1></span>
                    </div>
                    {
                        showPlayers.length > 0 && (
                            <div className="match-container">
                                <div className="players">
                                    {
                                        renderPlayer(showPlayer1, playerWonMatch(setsWonP1, setsWonP2, maxSetNumber), 1, isMatchOver)
                                    }

                                    <h1>VS</h1>
                                    {
                                        renderPlayer(showPlayer2, playerWonMatch(setsWonP2, setsWonP1, maxSetNumber), 2, isMatchOver)
                                    }
                                </div>

                            </div>
                        )
                    }

                </div>
                {
                    showPlayers.length > 0 && (
                        <div className={"score-board-container"}>
                            <ScoreDisp name={showPlayer1.name}
                                       gameScore={!isPlayerInTieBreak ? points[player1.gameScore] : player1.gameScore.toString()}
                                       sets={player1.setScore}/>
                            <ScoreDisp name={showPlayer2.name}
                                       gameScore={!isPlayerInTieBreak ? points[player2.gameScore] : player2.gameScore.toString()}
                                       sets={player2.setScore}/>
                        </div>
                    )
                }

                <div className={"commentator"}>
                    {/*<b>Commentator :</b> {this.props.commentatorMessage}*/}
                    <img width={70} height={70}
                         src={"https://www.shropshirestar.com/resizer/zqq449m6kEyRxwev_n_O9oKayRo=/1000x0/filters:quality(100)/arc-anglerfish-arc2-prod-shropshirestar-mna.s3.amazonaws.com/public/STRMTKBX3FBMXNKPJVPECJ6PSM.jpg"}
                         alt=""/> <span
                    className={"commentator-message"}>{showPlayers.length > 0 ? this.props.commentatorMessage : "There are no players selected for the match!"}</span>
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
        isMatchOver: state.match.isMatchOver,
        maxSetNumber: state.match.maxSetNumber,
        commentatorMessage: state.match.commentatorMessage
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Match)
