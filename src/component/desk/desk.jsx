import React from 'react';
import papers from '../../img/papers.png';
import phone from '../../img/phone.png';
import keyboard from '../../img/keyboard.png';
import mouse from '../../img/mouse.png';
import coffee from '../../img/coffee.png';
import octocat from '../../img/octocat.png';
import noteBooks from '../../img/notebooks.png';

class Desk extends React.Component {

    render() {
        return (
               <div className="desk">
                   <img className="papers" src={papers} />
                   <img className="phone" src={phone} />
                   <img className="keyboard" src={keyboard} />
                   <img className="mouse" src={mouse} />
                   <img className="coffee" src={coffee} />
                   <img className="octocat" src={octocat} />
                   <img className="noteBooks" src={noteBooks} />
               </div>
        );
    }
}

export default Desk;