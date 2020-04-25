import React from 'react';
import {connect} from "react-redux";
import pen from "../../img/pen.png";

class ConnectMessageBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
        this.typeMessage = this.typeMessage.bind(this);
    }

    typeMessage(e) {
        let count = parseInt(e.target.getAttribute('data-count'));
        let cursorPosition = document.getElementById('textarea').selectionStart;
        let startPosition = 30 + cursorPosition;

        // Pen's initial position
        document.getElementById('pen').style.left = startPosition + 'px';
        count += 1;
        this.setState({count: count});

        console.log('cursorPosition', cursorPosition);

        // Change pen's position
        if (count >= 2) {
            let textPosition = 8 * count;
            let nowPosition = startPosition + textPosition;

            console.log('count', count);
            console.log('nowPosition', nowPosition);
            console.log('nowPosition % 2', nowPosition % 2);

            if (nowPosition % 2 === 0) {
                document.getElementById("pen").style.transform = "rotate(-20deg)";
                document.getElementById("pen").style.top = "270px";
                document.getElementById('pen').style.left = nowPosition + 'px';
            } else {
                document.getElementById("pen").style.transform = "rotate(0deg)";
                document.getElementById("pen").style.top = "275px";
                document.getElementById('pen').style.left = nowPosition + 'px';
            }
        }

        // break line
        if (cursorPosition === 74) {
            document.getElementById('pen').style.left = startPosition + 'px';
            document.getElementById('pen').style.top = 295 + 'px';
        }
    }

    render() {
        return (
            <div className="show-messageBoard">
                <h1>Message Board</h1>
                <p className="desc">Welcome all of you here to my interactive resume, wish you have fun here</p>
                <div className="msg">
                    <label htmlFor="name">Name : </label>
                    <input id="name" name="name" autoComplete="off" placeholder="Your name here"/>
                    <img id="pen" className="pen" src={pen}/>
                    <textarea id="textarea" cols="40" rows="7" data-count={this.state.count}
                              placeholder="Enter the message"
                              onKeyPress={this.typeMessage.bind(this)}></textarea>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.room
    }
};

const mapDispatchToProps = dispatch => {

};

export const MessageBoard = connect(mapStateToProps, null)(ConnectMessageBoard);
