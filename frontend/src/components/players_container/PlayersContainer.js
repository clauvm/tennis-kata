import React from 'react';
import PropTypes from "prop-types";
import Player from "../player/Player";

class PlayersContainer extends React.Component {

    static propTypes = {
        isMatch: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
        players: PropTypes.arrayOf(PropTypes.object),
    };

    render() {
        const {isMatch, title, players} = this.props;
        return (
            <div>
                <div className="players-container">
                    <h2 className="players-container-title">{title}</h2>
                    <div className="players-container-players">
                        <ol className="players-grid">
                            {
                                players.map((player, index) => (
                                    <li key={index}>
                                        <Player name={player.name} img={player.img} ranking={player.ranking}/>
                                    </li>
                                ))
                            }

                        </ol>
                    </div>

                </div>
            </div>
        )
    }
}

export default PlayersContainer
