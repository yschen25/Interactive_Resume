import React from 'react';
import {connect} from 'react-redux';
import {changeStatus, click} from "../../action";

class ConnectDisplay extends React.Component {

    click(e) {

        let data_name = e.target.getAttribute('data-name');
        let name = data_name.split('-')[1];

        console.log('display.js / close', name);

        const {dispatchChangeStatus} = this.props;

        // Close popup
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
                <div key={`show-${val[0]}`}>
                    {val[1].show ? <div className="mask" data-name={`show-${val[0]}`} onClick={this.click.bind(this)}></div> : ""}
                    {val[1].show ? <div className={`show-${val[0]}`} data-name={`show-${val[0]}`} onClick={this.click.bind(this)}></div> : ""}
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