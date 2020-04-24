import React from 'react';
import {changePhoneStatus} from "../../action";
import {connect} from "react-redux";

class ConnectPhone extends React.Component {
    constructor(props) {
        super(props);
        this.sendMessage = this.sendMessage.bind(this);
        this.chatRoom = React.createRef();
        this.chatList = React.createRef();
    }

    sendMessage(e) {
        let type = e.target.getAttribute('data-name');
        let text = e.target.textContent;
        let chatList = document.getElementById('chatList');

        // Show the questions on the screen
        chatList.innerHTML += `<li class="userInput"><span>${text}</span></li>`;

        let height = this.chatList.current.offsetHeight;

        this.chatRoom.current.scrollTo({
            top: height,
            behavior: 'smooth',
        });

        let response = this.transferType(type);

        const {dispatchChangePhoneStatus} = this.props;

        dispatchChangePhoneStatus({
            name: 'isTextDisable',
            show: true
        });

        dispatchChangePhoneStatus({
            name: 'isInputSending',
            show: true
        });

        setTimeout(function () {
            dispatchChangePhoneStatus({
                name: 'isInputSending',
                show: false
            });

        }, 500);

        setTimeout(function () {
            chatList.innerHTML += `<li class="content"><span>${response}</span></li>`;

            dispatchChangePhoneStatus({
                name: 'isTextDisable',
                show: false
            });
        }, 1000);
    }

    transferType(type) {
        let response = '';
        switch (type) {
            case 'intro':
                response = 'I have 3+ years experiences in front-end, back-end and designing websites. ' +
                'I have spearheaded building a new official website from the old one when nobody wanted to take the responsibility, and I cooperate and communicate                   with team members smoothly, finally make website online, the clients are really appreciate my effort. ' +
                'I also proactively improve company work environment such as held a series training classes, write inter message board to help employee can contact to                boss directly. I love to write side-project and review code with my colleagues in my spare time. My supervisors always notes that he impressed my                     strong logic and enthusiasm for the job. ' +
                'I have been be an exchange student in Germany, I need to deal with plenty of things alone, that means I can work under great pressures.';
                break;
            case 'abroad':
                response = 'I am eager to take challenges like how to work abroad, how to communicate with people in a foreign language, ' +
                    'I think what makes life sparkles because there are plenty of challenges are waiting for me and I have chance to make progress, ' +
                    'I wish I can say "What a ride!" In the end of my life.\n';
                break;
            case 'swot':
                response = 'Strengths : I am extremely curious, ambitious and proactive, there are several examples that come to my mind, ' +
                    'I spearheaded revised website actively. held git training courses and wrote technic documents to reduce problem occurs on the work, ' +
                    'I also improved working process by writing gitlab extension, ' +
                    'helped team evaluated story points by writing scrum poker which was wrote by react.' +
                    'Weaknesses : I usually spend too much time check over my work again and again, ' +
                    'for example there are an urgent campaign page needs to be developed' +
                    ' within 4 hours,  I insist to make this issue not only complete and also has clean code before the deadline,  but I were exhausted.' +
                    'There are many functions that I don’t need to develop in this time. ' +
                    'Now I can control myself and realize that "A bird in the hand is worth two in the bush."\n';
                break;
            case 'disagreement':
                response = 'I am shine in front-end & bake-end programing, designing and communicating.';
                break;
            case 'stress':
                response = 'I\'m very skilled at balancing multiple projects and meeting deadlines, ' +
                    'once I had three large things due in the same month, let new official web online, ' +
                    'write campaign pages and deal with bugs on old web, that’s a lots of pressures. ' +
                    'However, Rather than focusing on feeling stressed, I focus on the task first, ' +
                    'I created a schedule that detailed how I split each things into small assignments, ' +
                    'then finish them by their priority. Finally customers are really appreciated me,  and I really enjoy it! \n';
                break;
            case 'hire':
                response = 'I have 3 years experiences in front-end, back-end and design web, ' +
                    'have spearheaded building a new web from the old one for two times, can get ' +
                    'into job soon and get started quickly. I also have excellent communication skills by soho and business trip experience.\n';
                break;
            default:
                response = "The line is busy, please wait.";
                break;
        }
        return response;
    }

    render() {

        let isTextDisable = false;
        let isInputSending = false;

        // The animation and movement during typing
        const {data} = this.props;
        Object.entries(data.phone).map((val) => {

            if (val[0] === 'isTextDisable' && val[1].show) {
                isTextDisable = true;
            }

            if (val[0] === 'isInputSending' && val[1].show) {
                isInputSending = true;
            }

        });

        return (
            <div className="show-phone">
                <div className="phoneCamera"></div>
                <div className="chatBlock">
                    <div className="chatRoom" ref={this.chatRoom}>
                        <ol id="chatList" className="chatList" ref={this.chatList}>
                            <li><span>Hello !</span></li>
                            <li><span>I am Yi-Shiuan Chen</span></li>
                        </ol>
                    </div>
                    <div className="chatFoo">
                        <div className="icons camera"><i className="fa fa-camera-retro"></i></div>
                        <div className="inputBlock">
                            <input id="msgInput" type="text" placeholder="Type a message" disabled/>
                            <p className={`${isInputSending ? 'act' : ''} inputSending send`}>Text sending...</p>
                        </div>
                        <div className={`${isTextDisable ? 'act sending' : ''} icons plane`}><i className="fa fa-paper-plane"></i></div>
                    </div>
                </div>
                <div className={`${isTextDisable ? 'disable' : ''} text`} data-name="intro" onClick={this.sendMessage.bind(this)}>Tell Me About
                    Yourself.
                </div>
                <div className={`${isTextDisable ? 'disable' : ''} text text2`} data-name="abroad" onClick={this.sendMessage.bind(this)}>Why Do You Want to
                    Work Abroad ?
                </div>
                <div className={`${isTextDisable ? 'disable' : ''} text text3`} data-name="swot" onClick={this.sendMessage.bind(this)}>Your Strengths
                    And Weaknesses ?
                </div>
                <div className={`${isTextDisable ? 'disable' : ''} text`} data-name="disagreement" onClick={this.sendMessage.bind(this)}>How Did You Handle The
                    Disagreement ?
                </div>
                <div className={`${isTextDisable ? 'disable' : ''} text text2`} data-name="stress" onClick={this.sendMessage.bind(this)}>How Do You Handle
                    Stress ?
                </div>
                <div className={`${isTextDisable ? 'disable' : ''} text text3`} data-name="hire" onClick={this.sendMessage.bind(this)}>Why Should We Hire
                    You ?
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
        dispatchChangePhoneStatus: value => {
            dispatch(changePhoneStatus(value))
        }
    }
};

export const Phone = connect(mapStateToProps, mapDispatchToProps)(ConnectPhone);
