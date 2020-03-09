import React from 'react';
import { connect } from 'react-redux';
import { click, changeStatus } from '../../action';

import pic1 from '../../img/pic1.png';
import pic2 from '../../img/pic2.png';
import pic3 from '../../img/pic3.png';
import leftBooks from '../../img/left_books.png';
import lamp from '../../img/lamp.png';
import duck from '../../img/duck.png';
import computer from '../../img/computer.png';
import stick1 from '../../img/stick1.png';
import stick2 from '../../img/stick2.png';
import stick3 from '../../img/stick3.png';
import calender from '../../img/calender.png';
import rightBooks from '../../img/right_books.png';

class ConnectWall extends React.Component {

    click(name) {
        console.log('wall.js / click', name);

        const {dispatchClick, dispatchChangeStatus} = this.props;
        dispatchClick(name);

        // Change status
        dispatchChangeStatus({
            name,
            show: true
        });

    }

    render() {
        return (
            <div className="wall">
                <img className="pic" src={pic1} onClick={this.click.bind(this, 'pic1')} />
                <img className="pic pic2" src={pic2}/>
                <img className="pic pic3" src={pic3}/>
                <img className="leftBooks" src={leftBooks}/>
                <img className="lamp" src={lamp}/>
                <img className="duck" src={duck} onClick={this.click.bind(this, 'duck')} />
                <img className="computer" src={computer}/>
                <img className="stick" src={stick1}/>
                <img className="stick stick2" src={stick2}/>
                <img className="stick stick3" src={stick3}/>
                <img className="calender" src={calender}/>
                <img className="rightBooks" src={rightBooks}/>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        dispatchClick : name => {
            dispatch(click(name))
        },
        dispatchChangeStatus : selected => {
            dispatch(changeStatus(selected))
        }
    }
};

export const Wall = connect(null, mapDispatchToProps)(ConnectWall);
