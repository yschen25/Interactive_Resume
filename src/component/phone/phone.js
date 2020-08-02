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
                response = 'I have 3 years experiences in front-end, back-end, and I have spearheaded revising website to make it online, ' +
                    'hold courses training, write technical documents and review code to enhance efficiency of work, revised ' +
                    'webpack config of official website to reduce the bundle time to half, and import ESLint, SonarLint and using ' +
                    'Git Pre-commit to maintain the quantity of code and avoid the debt.';
                break;
            case 'abroad':
                response = 'I am eager to take challenges like how to work abroad, how to communicate with people in a foreign language, ' +
                    'I think what makes life sparkles because there are plenty of challenges are waiting for me and I have chance to make progress, ' +
                    'I wish I can say "What a ride!" In the end of my life.';
                break;
            case 'swot':
                response = 'I am extremely proactive, I spearheaded revised website actively. ' +
                    'held git training courses and wrote technical documents to reduce problem occurs on the work,  ' +
                    'revised webpack config of official website to reduce the bundle time to half, and import ESLint, ' +
                    'SonarLint and using Git Pre-commit to maintain the quantity of code and avoid the debt.'
                break;
            case 'disagreement':
                response = 'I will listen to the opposite opinion first, try to understand the reason why he think at that way, ' +
                    'the I explain to he my opinion and reason. once company ask us to use phpstorm instead of sublime, so I ask ' +
                    'the promoter to demonstrate how to use phpstorm, it convince me, then I became a phpstorm promoter, too, ' +
                    'finally make whole depart start to use phpstorm.';
                break;
            case 'stress':
                response = 'I\'m very skilled at balancing multiple projects and meeting deadlines. once I have to let new official ' +
                    'web online, write campaign pages and maintain old web, that’s tons of pressures. However, Rather than focusing on ' +
                    'feeling stressed, I focus on the task first. I created a schedule that I split each things into small assignments, ' +
                    'then finish them by their priority.';
                break;
            case 'visa':
                response = 'Yes, I have Tier 5 visa, from 2020/11/15 to 2022/11/15';
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
                        <div className={`${isTextDisable ? 'act sending' : ''} icons plane`}><i
                            className="fa fa-paper-plane"></i></div>
                    </div>
                </div>
                <div className={`${isTextDisable ? 'disable' : ''} text`} data-name="intro"
                     onClick={this.sendMessage.bind(this)}>Tell Me About
                    Yourself.
                </div>
                <div className={`${isTextDisable ? 'disable' : ''} text text3`} data-name="visa"
                     onClick={this.sendMessage.bind(this)}>Do You Have Visa ?
                </div>
                <div className={`${isTextDisable ? 'disable' : ''} text text2`} data-name="abroad"
                     onClick={this.sendMessage.bind(this)}>Why Do You Want to
                    Work Abroad ?
                </div>
                <div className={`${isTextDisable ? 'disable' : ''} text text3`} data-name="swot"
                     onClick={this.sendMessage.bind(this)}>What Is Your Strengths ?
                </div>
                <div className={`${isTextDisable ? 'disable' : ''} text`} data-name="disagreement"
                     onClick={this.sendMessage.bind(this)}>How Do You Handle The Conflict ?
                </div>
                <div className={`${isTextDisable ? 'disable' : ''} text text2`} data-name="stress"
                     onClick={this.sendMessage.bind(this)}>How Do You Handle Stress ?
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
