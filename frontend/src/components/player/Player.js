import React from 'react';
import PropTypes from 'prop-types'
import Card from "../card/Card";


class Player extends React.Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        ranking: PropTypes.number.isRequired,
        isInMatch: PropTypes.bool.isRequired,
        click: PropTypes.func,
    };

    render() {
        const {id, name, img, ranking, isInMatch, click} = this.props;
        return (
            <div onClick={() => click ? click(id, isInMatch):null} className="player">
                <div className="player-top">
                    <Card name={name} imgSrc={img} subTitle={"#" + ranking}/>
                </div>
            </div>
        )
    }
}

export default Player
