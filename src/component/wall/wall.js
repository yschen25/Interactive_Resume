import React from 'react';
import {connect} from 'react-redux';
import {changeStatus, changeHintStatus} from '../../action';

import pic1 from '../../img/pic1.png';
import pic2 from '../../img/pic2.png';
import pic3 from '../../img/pic3.png';
import leftBooks from '../../img/left_books.png';
import duck from '../../img/duck.png';
import capoo from '../../img/capoo.png';
import hint from '../../img/hint.png';
import computer from '../../img/computer.png';
import stick1 from '../../img/stick1.png';
import stick2 from '../../img/stick2.png';
import stick3 from '../../img/stick3.png';
import calender from '../../img/calender.png';
import rightBooks from '../../img/right_books.png';

class ConnectWall extends React.Component {
    constructor(props) {
        super(props);
        this.countClick = this.countClick.bind(this);
        this.state = {count: 0}
    }

    // Click the specific object on the wall
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

    // Count click capoo how many times
    countClick(e) {
        let count = parseInt(e.target.getAttribute('data-count'));
        count += 1;
        this.setState({count: count});

        if (count >= 3) {
            const {dispatchChangeHintStatus} = this.props;

            dispatchChangeHintStatus({
                name: 'isHintShow',
                show: true
            });
        }
    }

    render() {

        let isHintShow = false;

        // Determine is hint show
        const {data} = this.props;
        Object.entries(data.capoo).map((val) => {

            if (val[0] === 'isHintShow' && val[1].show) {
                isHintShow = true;
            }

        });

        isHintShow = true;

        return (

            <div className="wall"
                 onClick={this.changeStatus.bind(this)}> {/*<div className="wall" onClick={(e) => this.changeStatus(e)}>*/}
                <img className="pic" data-name="pic1" src={pic1}/>
                <img className="pic pic2" data-name="pic2" src={pic2}/>
                <img className="pic pic3" data-name="pic3" src={pic3}/>
                <img className="leftBooks" data-name="leftBooks" src={leftBooks}/>
                <img className="duck" data-name="duck" src={duck}/>
                <img className="capoo" data-name="capoo" src={capoo} data-count={this.state.count}
                     onClick={this.countClick.bind(this)}/>
                {isHintShow ? <div className="hint"><p>3669</p><img src={hint}/></div> : ''}
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


const mapStateToProps = state => {
    return {
        data: state.room
    }
};

const mapDispatchToProps = dispatch => {
    return {
        dispatchChangeStatus: selected => {
            dispatch(changeStatus(selected))
        },
        dispatchChangeHintStatus: selected => {
            dispatch(changeHintStatus(selected))
        }
    }
};

export const Wall = connect(mapStateToProps, mapDispatchToProps)(ConnectWall);
