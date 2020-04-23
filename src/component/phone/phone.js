import React from 'react';
import {changePhoneStatus} from "../../action";
import {connect} from "react-redux";

class ConnectPhone extends React.Component {
    constructor(props) {
        super(props);
        this.sendMessage = this.sendMessage.bind(this);
    }

    sendMessage(e) {
        let type = e.target.getAttribute('data-name');
        let text = e.target.textContent;
        let chatList = document.getElementById('chatList');
        let isTextDisable = true;
        console.log('mobile', type, text);

        // Show the questions on the screen
        chatList.innerHTML += `<li class="userInput"><span>${text}</span></li>`;

        let height = chatList.style.height;

        let response = this.transferType(type);

        console.log('response', response);

        const {dispatchChangePhoneStatus} = this.props;


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
            // isTextDisable = false;

        }, 1000);
    }

    transferType(type) {
        let response = "Please wait";
        switch (type) {
            case 'england':
                response = 'UK is a major economic and technology center, there are plenty of opportunities, ' +
                    'and home to some of the world’s biggest and most dynamic companies. ' +
                    'I have been to United Kingdom before,' +
                    ' people has beautiful accent and good taste in fashion, they are are nicely. ' +
                    'it’s a country make my want to stay, there also many impressed landscape such as London eye, ' +
                    'stonehenge, And the afternoon tea is wonderful!';
                break;
            case 'greeting':
                response = 'I am good, and you?';
                break;
            case 'job':
                response = 'I have 3 years experiences in front-end, back-end and design web, ' +
                    'have spearheaded building a new web from the old one for two times, can get into' +
                    ' job soon and get started quickly. I also have excellent communication skills by ' +
                    'Soho and business trip experience. My supervisors always notes that he impressed ' +
                    'my strong logic and enthusiasm for the job. I have been to an exchange student in Germany, ' +
                    'used to work under pressures and have great adaptability.Proficient in HTML5, CSS3, SCSS, ' +
                    'JavaScript.js, jQuery, React.js, ES6, RWD, Photoshop, Illustrator, Webpack, NPM and I also write PHP, ' +
                    'MySQL, knowing how to use Git.';
                break;
            case 'liquor':
                response = 'Yes, I like it. Especially for Glühwein, Radler and Cocktail.';
                break;
            case 'from':
                response = 'I come from Taiwan where you can find convenience stores everywhere, ' +
                    'we also have night market a place to try out the various tasty snacks, not to mention the bubble tea!';
                break;
            case 'hire':
                response = 'I am shine in front-end & bake-end programing, designing and communicating.';
                break;
            default:
                response = "The line is busy, please wait.";
                break;
        }
        return response;
    }

    render() {

        let isInputSending = false;

        const {data} = this.props;
        Object.entries(data.phone).map((val) => {

            if (val[0] === 'isInputSending' && val[1].show) {
                isInputSending = true;
            }
        })

        return (
            <div className="show-phone">
                <div className="phoneCamera"></div>
                <div className="chatBlock">
                    <div className="chatRoom">
                        <ol id="chatList" className="chatList">
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
                        <div className="icons plane"><i className="fa fa-paper-plane"></i></div>
                    </div>
                </div>
                <div className="text" data-name="england" onClick={this.sendMessage.bind(this)}>Tell Me About
                    Yourself.
                </div>
                <div className="text text2" data-name="from" onClick={this.sendMessage.bind(this)}>Why Do You Want to
                    Work Abroad ?
                </div>
                <div className="text text3" data-name="greeting" onClick={this.sendMessage.bind(this)}>Your Strengths
                    And Weaknesses ?
                </div>
                <div className="text" data-name="job" onClick={this.sendMessage.bind(this)}>How Did You Handle The
                    Disagreement ?
                </div>
                <div className="text2 text" data-name="liquor" onClick={this.sendMessage.bind(this)}>How Do You Handle
                    Stress ?
                </div>
                <div className="text text3" data-name="hire" onClick={this.sendMessage.bind(this)}>Why Should We Hire
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
