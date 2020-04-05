import React from 'react';
import lock from '../../img/lock.png';
import rose from '../../img/rose.png';
import papers from '../../img/papers.png';
import phone from '../../img/phone.png';
import keyboard from '../../img/keyboard.png';
import mouse from '../../img/mouse.png';
import coffee from '../../img/coffee.png';
import octocat from '../../img/octocat.png';
import notebooks from '../../img/notebooks.png';
import {connect} from "react-redux";
import {changeStatus} from "../../action";

class ConnectDesk extends React.Component {

    changeStatus(e) {
        let name = e.target.getAttribute('data-name');

        // Show popup
        if(name !== null ){
            const {dispatchChangeStatus} = this.props;
            dispatchChangeStatus({
                name,
                show: true
            });
        }
    }

    render() {
        return (
               <div className="desk" onClick={this.changeStatus.bind(this)}>
                   <img className="lock" data-name="lock" src={lock}/>
                   <img id="rose" className="rose" data-name="rose" src={rose}/>
                   <img className="papers" data-name="papers" src={papers} />
                   <img className="phone" data-name="phone" src={phone} />
                   <img className="keyboard" data-name="keyboard" src={keyboard} />
                   <img className="mouse" data-name="mouse" src={mouse} />
                   <img className="coffee" data-name="coffee" src={coffee} />
                   <img className="octocat" data-name="octocat" src={octocat} />
                   <img className="notebooks" data-name="notebooks" src={notebooks} />
               </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchChangeStatus : selected => {
            dispatch(changeStatus(selected))
        }
    }
};

export const Desk = connect(null, mapDispatchToProps)(ConnectDesk);