import React from 'react';
import PropTypes from 'prop-types'
import Card from "../card/Card";


class Player extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        ranking: PropTypes.number.isRequired,
    };

    render() {
        const {name, img, ranking} = this.props;
        return (
            <div className="player">
                <div className="player-top">
                    <Card name={name} imgSrc={img} subTitle={"#"+ranking}/>
                </div>
            </div>
        )
    }
}

export default Player
