import React from 'react';
import {connect} from "react-redux";
import {changeStatus, changeTabStatus} from "../../action";
import pen from "../../img/pen.png";
import man from "../../img/avatar1.png";
import woman from "../../img/avatar2.png";
import hamster from "../../img/avatar3.png";

class ConnectMessageBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
        this.focus = this.focus.bind(this);
        this.blur = this.blur.bind(this);
        this.typeMessage = this.typeMessage.bind(this);
    }

    focus() {
        // Show the pen when focus on the textarea
        document.getElementById('pen').style.display = 'block';
    }

    blur() {
        // Hide the pen when focus on the textarea
        document.getElementById('pen').style.display = 'none';
    }

    typeMessage(e) {
        let count = parseInt(e.target.getAttribute('data-count')); // Count type how many times
        let penStyle = document.getElementById('pen').style;
        let cursorPosition = document.getElementById('textarea').selectionStart; // Cursor position
        let startPosition = 30 + cursorPosition; // Pen start position (left)
        let topPosition = 278; // Pen start position (top)

        // Pen's initial position
        penStyle.left = startPosition + 'px';
        count += 1;
        this.setState({count: count});

        // Change pen's position
        if (count >= 2) {
            let textPosition = 8 * count;
            let nowPosition = startPosition + textPosition;

            if (nowPosition % 2 === 0) {
                penStyle.transform = 'rotate(-20deg)';
                penStyle.top = (topPosition - 5) + 'px';
                penStyle.left = nowPosition + 'px';
            } else {
                penStyle.transform = 'rotate(0deg)';
                penStyle.top = topPosition + 'px';
                penStyle.left = nowPosition + 'px';
            }

            // New line
            let newLine = 74;
            for (let i = 1; i <= 9; i++) {
                if (cursorPosition >= newLine * i) {
                    this.transferPosition(count, newLine * i, i);
                }
            }
        }
    }

    transferPosition(count, num, topNum) {
        let penStyle = document.getElementById('pen').style;
        let startPosition = 30;
        let topPosition = 278;
        let textPosition = 9 * (count - (num + 1));
        let nowPosition = startPosition + textPosition;

        penStyle.left = startPosition + 'px';
        penStyle.top = (topPosition + 25 * topNum) + 'px';

        if (nowPosition % 2 === 0) {
            penStyle.transform = 'rotate(-20deg)';
            penStyle.left = nowPosition + 'px';
        } else {
            penStyle.transform = 'rotate(0deg)';
            penStyle.left = nowPosition + 'px';
        }
    }

    // Show messageBoard
    showMessages() {
        const {dispatchChangeStatus} = this.props;

        dispatchChangeStatus({
            name: 'notebooks',
            show: true
        });

        dispatchChangeStatus({
            name: 'messageBoard',
            show: false
        });
    }

    render() {
        return (
            <div className="show-messageBoard">
                <h1>Message Board</h1>
                <p className="desc">Welcome all of you here to my interactive resume, wish you have fun here</p>
                <div className="msg">
                    <label htmlFor="name">Name : </label>
                    <input id="name" name="name" autoFocus autoComplete="off" placeholder="Your name here"/>
                    <label htmlFor="avatar">Avatar : </label>
                        <input type="radio" className="avatar" id="man" name="avatar" /><label htmlFor="man"><img src={man} /></label>
                        <input type="radio" className="avatar" id="woman" name="avatar" /><label htmlFor="woman"><img src={woman} /></label>
                        <input type="radio" className="avatar" id="hamster" name="avatar" /><label htmlFor="hamster"><img src={hamster} /></label>
                    <img id="pen" className="pen" src={pen}/>
                    <textarea id="textarea" cols="40" rows="7" data-count={this.state.count}
                              onFocus={this.focus.bind(this)} onBlur={this.blur.bind(this)}
                              onKeyPress={this.typeMessage.bind(this)}></textarea>
                    <div className="msgBtn" onClick={this.showMessages.bind(this)} >See the Messages</div>
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
    return {
        dispatchChangeStatus: selected => {
            dispatch(changeStatus(selected))
        }
    }
};

export const MessageBoard = connect(mapStateToProps, mapDispatchToProps)(ConnectMessageBoard);
