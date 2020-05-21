import React from 'react';
import {connect} from "react-redux";
import {changeStatus} from "../../action";
import pen from "../../img/pen.png";
import man from "../../img/avatar1.png";
import woman from "../../img/avatar2.png";
import hamster from "../../img/avatar3.png";
import axios from "axios/index";

class ConnectMessageBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            letter: 200
        };
        this.focus = this.focus.bind(this);
        this.blur = this.blur.bind(this);
        this.typeMessage = this.typeMessage.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
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
        let allowLength = 200;
        let textLength = e.target.value.length;
        let leftLength = allowLength - textLength;

        if (leftLength < 0) {
            return;
        }

        // Show how many letters left
        this.setState({letter: leftLength});

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
            for (let i = 1; i <= 10; i++) {
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

    sendMessage() {
        let name = document.getElementById('name').value;
        let sex = document.querySelector('[name=avatar]:checked') ? document.querySelector('[name=avatar]:checked').value : '';
        let textarea = document.getElementById('textarea').value;

        if (name === '') {
            alert('Please enter your name');
            return;
        }

        if (textarea === '') {
            alert('Please enter message');
            return;
        }

        if (textarea.length > 200) {
            alert('Over letters limit');
            return;
        }

        let data = new FormData();
        data.set("name", name);
        data.set("sex", sex);
        data.set("msg", textarea);

        const config = {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        // Send message
        axios.post('./api/sendMessage.php', data, config
        ).then(response => {

            if (response.data.status) {
                alert('Message send success!');
                location.reload();
            }

        }).catch(error => console.log(error));

        // todo Chinese limit
    }

    render() {
        return (
            <div className="show-messageBoard">
                <h1>Message Board</h1>
                <p className="desc">Welcome all of you here to my interactive resume, wish you have fun here</p>
                <div className="msg">
                    <div className="inputItem">
                        <label htmlFor="name">Name : </label>
                        <input id="name" name="name" maxLength="20" autoFocus autoComplete="off" placeholder="Your Name"/>
                    </div>
                    <div className="inputItem">
                        <label htmlFor="avatar">Avatar : </label>
                        <input type="radio" className="avatar" id="man" name="avatar" value="1"/><label htmlFor="man"><img src={man}/></label>
                        <input type="radio" className="avatar" id="woman" name="avatar" value="2"/><label
                        htmlFor="woman"><img src={woman}/></label>
                        <input type="radio" className="avatar" id="hamster" name="avatar" value="3"/><label
                        htmlFor="hamster"><img src={hamster}/></label>
                    </div>
                    <img id="pen" className="pen" src={pen}/>
                    <textarea id="textarea" cols="40" rows="5" maxLength="200" data-count={this.state.count}
                              onFocus={this.focus.bind(this)} onBlur={this.blur.bind(this)}
                              onKeyPress={this.typeMessage.bind(this)}></textarea>
                    <p id="warningText">There are {this.state.letter} letters left</p>
                    <div className="submitBtn" onClick={this.sendMessage.bind(this)}>Submit</div>
                    <div className="msgBtn" onClick={this.showMessages.bind(this)}>See the Messages</div>
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
