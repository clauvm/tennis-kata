import React from 'react';
import PropTypes from "prop-types";
import Player from "../player/Player";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as playersActions from '../../actions/players'

export class PlayersContainer extends React.Component {

    static propTypes = {
        isMatch: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
        players: PropTypes.arrayOf(PropTypes.object).isRequired,
    };

    /**
     * Handles player click
     * @param id
     * @param isInMatch
     */
    handleClick = (id = 0, isInMatch) => {
        const {isMatch, players} = this.props;
        const playersInMatch = players.filter((player) => player.isInMatch).length;

        if (this.checkIfPlayerMatchStatusShouldBeUpdated(isMatch, isInMatch, playersInMatch)) {
            this.props.changePlayerStatusMatchActionCreator(id);
        }

    };

    /**
     * Check if the status of a player regarding a match can change,
     * this will happen if the number of players declared in a match is less than two, in such case, the player
     * will be added to the match, otherwise, he or she will be removed
     * @param isMatch, is player container in match mode
     * @param isInMatch, player already in a match
     * @param players, list of players
     */
    checkIfPlayerMatchStatusShouldBeUpdated = (isMatch, isInMatch, players) => {
        return (!isMatch && players < 2) || (!isMatch && players === 2 && isInMatch)
    };


    render() {
        const {isMatch, title, players} = this.props;
        const renderPlayerGrid = (players) =>
            <ol className="players-grid" style={{justifyContent: isMatch ? "space-evenly" : "center"}}>
                {
                    players.map((player, index) => (
                        <li style={{opacity: player.isInMatch && !isMatch ? 0.5 : 1}} key={index}>
                            <Player id={player.id} name={player.name} img={player.img}
                                    ranking={player.ranking} isInMatch={player.isInMatch}
                                    click={this.handleClick}/>


                        </li>

                    ))
                }
            </ol>;
        const renderEmptyPlayersMessage = (isMatch) => {
            const title = isMatch ? "Please select two players to start a match" : "Add players";
            return <div className="players-grid">{title}</div>
        };
        return (
            <div>
                <div className="players-container">
                    <h2 className="players-container-title">{title}</h2>

                    <div className="players-container-players">
                        {
                            players.length > 0 ?
                                renderPlayerGrid(players) :
                                renderEmptyPlayersMessage(isMatch)
                        }
                    </div>

                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(playersActions, dispatch)
}

export default connect(null, mapDispatchToProps)(PlayersContainer)

