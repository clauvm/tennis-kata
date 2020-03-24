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
    getMessage,
    playerWonGame,
    playerWonMatch,
    playerWonSet,
    points
} from "../../utils";
import ScoreDisp from "../../components/score_disp/ScoreDisp";
import ArrowIcon from 'react-icons/lib/md/arrow-back'

export class Match extends Component {

    goBack = ()=>{
        this.props.history.push('/')
    };

    continueGame = (p1Order, p1GameScore, p2Order, p2GameScore) => {
        if (checkDeuce(p1GameScore, p2GameScore)) {
            this.props.handleGamePointActionCreator(p2Order, -1);
        } else {
            this.props.handleGamePointActionCreator(p1Order, 1);
        }
    };

    continueSet = (isPlayerInTieBreak, order) => {
        if (!isPlayerInTieBreak) {
            this.props.addSetScoreActionCreator(order, 1);
        }
    };

    /**
     * Handles the logic when a player wins a point, if the player has not won the game yet
     * then his or her score and increment. However, if the player has not won the game but it
     * will win the deuce, then the opponent score will decrement (from add to 40)
     * @param order : If it is player 1 or player 2
     */
    winPoint = (order) => {
        const {isMatchOver} = this.props;
        const playerScore = this.props["player" + order];
        const opponent = order === 1 ? 2 : 1;
        const opponentScore = this.props["player" + opponent];
        const currentSet = playerScore.setScore.length;
        const isPlayerInTieBreak = checkTieBreak(playerScore.setScore[currentSet - 1], opponentScore.setScore[currentSet - 1]);
        const playerName = this.props.showPlayers[order - 1].name;
        let message = "";
        if (!isMatchOver) {
            if (!playerWonGame(playerScore.gameScore, opponentScore.gameScore)) {
                message = getMessage(playerName);
                console.log(message);
                this.props.addCommentatorMessageActionCreator(message);
                this.continueGame(order, playerScore.gameScore, opponent, opponentScore.gameScore)
            } else {
                message = playerName + " Won the game!!";
                console.log(message);
                this.props.addCommentatorMessageActionCreator(message);
                if (!playerWonSet(playerScore.setScore[currentSet - 1] + 1, opponentScore.setScore[currentSet - 1])) {
                    this.continueSet(isPlayerInTieBreak, order)
                } else {
                    message = playerName + " # Won the set " + currentSet + "";
                    console.log(message);
                    this.props.addCommentatorMessageActionCreator(message);
                    const sp1 = playerScore.setScore.filter((set, index) => index === (currentSet - 1) ? set + 1 : set >= 6).length;
                    const sp2 = opponentScore.setScore.filter(set => set >= 6).length;
                    if (!playerWonMatch(sp1, sp2, 3)) {
                        this.props.addSetScoreActionCreator(order, 1);
                        this.props.addNewSetsActionCreator();
                    } else {
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

    render() {
        const {showPlayers, player1, player2, maxSetNumber, isMatchOver} = this.props;
        const showPlayer1 = showPlayers[0];
        const showPlayer2 = showPlayers[1];
        const sp1 = player1.setScore.filter((set) => set >= 6).length;
        const sp2 = player2.setScore.filter(set => set >= 6).length;

        const renderPlayer = (player, hasWon, order, isMatchOver) => {
            console.log("Has won: ", hasWon);
            return (

                <div style={{opacity: !hasWon && isMatchOver ? '0.5' : 1}}>
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
                        <span><span onClick={this.goBack} className={"back-icon"}><ArrowIcon size={30}/></span><h1 className={"title-match"}>Match!</h1></span>
                    </div>
                    <div className="match-container">
                        <div className="players">
                            {
                                renderPlayer(showPlayer1, playerWonMatch(sp1, sp2, maxSetNumber), 1, isMatchOver)
                            }

                            <h1>VS</h1>
                            {
                                renderPlayer(showPlayer2, playerWonMatch(sp2, sp1, maxSetNumber), 2, isMatchOver)
                            }
                        </div>

                    </div>
                </div>
                <div className={"score-board-container"}>
                    <ScoreDisp name={showPlayer1.name} gameScore={points[player1.gameScore]} sets={player1.setScore}/>
                    <ScoreDisp name={showPlayer2.name} gameScore={points[player2.gameScore]} sets={player2.setScore}/>
                </div>
                <div className={"commentator"}>
                    {/*<b>Commentator :</b> {this.props.commentatorMessage}*/}
                    <img width={70} height={70}
                         src={"https://www.shropshirestar.com/resizer/zqq449m6kEyRxwev_n_O9oKayRo=/1000x0/filters:quality(100)/arc-anglerfish-arc2-prod-shropshirestar-mna.s3.amazonaws.com/public/STRMTKBX3FBMXNKPJVPECJ6PSM.jpg"}
                         alt=""/> <span className={"commentator-message"}>{this.props.commentatorMessage}</span>
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
