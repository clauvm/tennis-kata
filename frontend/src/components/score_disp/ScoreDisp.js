import React from 'react';
import PropTypes from 'prop-types'

class ScoreDisp extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        sets: PropTypes.array.isRequired,
        gameScore: PropTypes.string,
    };

    render() {
        const {name, sets, gameScore} = this.props;
        return (
            <div>
                <table>
                    <tr>
                        <th style={{width: "200px"}}>{name}</th>
                        {
                            sets.map((set, index) => (
                                <th id={index} style={{width: "30px"}}>{set}</th>
                            ))
                        }
                        <th className={"counter-game"} style={{width: "30px",border:"1px solid black"}}>{gameScore}</th>
                    </tr>
                </table>
            </div>
        )
    }
}

export default ScoreDisp
