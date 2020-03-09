import React from 'react';
import {connect} from 'react-redux';

class ConnectDisplay extends React.Component {

    render() {

        const { clicked } = this.props;

        return Object.entries(clicked).map((val) => {

            console.log('display.js/', val);

            return (
                <div>
                    {val[1].show ? <div className="mask"></div> : ""}
                    {val[1].show ? <div className={`show-${val[0]}`} ></div> : ""}
                </div>
            )
        })

    }
}


ConnectDisplay.defaultProps = {
    clicked: {}
};

const mapStateToProps = state => {
    return {
        clicked: state.room.clicked
    }
};

export const Display = connect(mapStateToProps)(ConnectDisplay);