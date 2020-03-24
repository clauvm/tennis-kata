import React from 'react';
import PropTypes from 'prop-types'
import './Card.css';

class Card extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string.isRequired,
        subTitle: PropTypes.string,
    };

    render() {
        const {name, imgSrc, subTitle} = this.props;
        return (
            <div className="card">
                <img
                    src={imgSrc}
                    alt="Avatar" width={150}
                    height={100}/>
                <div className="container">
                    <h4><b>{name}</b></h4>
                    <p>{subTitle}</p>
                </div>
            </div>
        )
    }
}

export default Card
