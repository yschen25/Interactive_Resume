import React from 'react';
import {connect} from 'react-redux';
import {changeStatus, click} from "../../action";

class ConnectDisplay extends React.Component {

    click(e) {
        console.log('display.js / close', e);

        const {dispatchChangeStatus} = this.props;

        // Change status to
        dispatchChangeStatus({
            name,
            show: false
        });

    }

    render() {

        const { clicked } = this.props;
        return Object.entries(clicked).map((val) => {

            console.log('display.js/', val);

            return (
                <div>
                    {val[1].show ? <div className="mask" onClick={this.click.bind(this)}></div> : ""}
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

const mapDispatchToProps = dispatch => {
    return {
        dispatchChangeStatus : selected => {
            dispatch(changeStatus(selected))
        }
    }
};

export const Display = connect(mapStateToProps, mapDispatchToProps)(ConnectDisplay);