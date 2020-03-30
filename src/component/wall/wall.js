import React from 'react';
import {connect} from 'react-redux';
import {changeStatus} from '../../action';

import pic1 from '../../img/pic1.png';
import pic2 from '../../img/pic2.png';
import pic3 from '../../img/pic3.png';
import leftBooks from '../../img/left_books.png';
import rose from '../../img/rose.png';
import lock from '../../img/lock.png';
import duck from '../../img/duck.png';
import capoo from '../../img/capoo.png';
import computer from '../../img/computer.png';
import stick1 from '../../img/stick1.png';
import stick2 from '../../img/stick2.png';
import stick3 from '../../img/stick3.png';
import calender from '../../img/calender.png';
import rightBooks from '../../img/right_books.png';

class ConnectWall extends React.Component {

    changeStatus(e) {
        let name = e.target.getAttribute('data-name');
        console.log('wall.js / click', name);

        // Show popup
        if (name !== null) {
            const {dispatchChangeStatus} = this.props;
            dispatchChangeStatus({
                name,
                show: true
            });
        }
    }

    render() {
        return (

            <div className="wall" onClick={this.changeStatus.bind(this)}> {/*<div className="wall" onClick={(e) => this.changeStatus(e)}>*/}
                <img className="pic" data-name="pic1" src={pic1}/>
                <img className="pic pic2" data-name="pic2" src={pic2}/>
                <img className="pic pic3" data-name="pic3" src={pic3}/>
                <img className="leftBooks" data-name="leftBooks" src={leftBooks}/>
                <img className="rose" data-name="rose" src={rose}/>
                <img className="lock" data-name="lock" src={lock}/>
                <img className="duck" data-name="duck" src={duck}/>
                <img className="capoo" data-name="capoo" src={capoo}/>
                <img className="computer" data-name="computer" src={computer}/>
                <img className="stick" data-name="stick1" src={stick1}/>
                <img className="stick stick2" data-name="stick2" src={stick2}/>
                <img className="stick stick3" data-name="stick3" src={stick3}/>
                <img className="calender" data-name="calender" src={calender}/>
                <img className="rightBooks" data-name="rightBooks" src={rightBooks}/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchChangeStatus: selected => {
            dispatch(changeStatus(selected))
        }
    }
};

export const Wall = connect(null, mapDispatchToProps)(ConnectWall);
