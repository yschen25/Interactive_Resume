import React from "react";
import { changePhoneStatus } from "../../action";
import { connect } from "react-redux";

class ConnectPhone extends React.Component {
  constructor(props) {
    super(props);
    this.sendMessage = this.sendMessage.bind(this);
    this.chatRoom = React.createRef();
    this.chatList = React.createRef();
  }

  sendMessage(e) {
    let type = e.target.getAttribute("data-name");
    let text = e.target.textContent;
    let chatList = document.getElementById("chatList");

    // Show the questions on the screen
    chatList.innerHTML += `<li class="userInput"><span>${text}</span></li>`;

    let height = this.chatList.current.offsetHeight;
    
    this.chatRoom.current.scrollTo({
      top: height,
      behavior: "smooth",
    });

    let response = this.transferType(type);

    const { dispatchChangePhoneStatus } = this.props;

    dispatchChangePhoneStatus({
      name: "isTextDisable",
      show: true,
    });

    dispatchChangePhoneStatus({
      name: "isInputSending",
      show: true,
    });

    setTimeout(function () {
      dispatchChangePhoneStatus({
        name: "isInputSending",
        show: false,
      });
    }, 500);

    setTimeout(function () {
      chatList.innerHTML += `<li class="content"><span>${response}</span></li>`;

      dispatchChangePhoneStatus({
        name: "isTextDisable",
        show: false,
      });
    }, 1000);
  }

  transferType(type) {
    let response = "";
    switch (type) {
      case 'intro':
        response =
          "An enthusiastic software engineer with 4 years of experience in web development. " +
          "I'm also an interviewer and mentor for junior engineers, helping engineers to get a job in the UK. ";
        break;
      case 'skills':
        response =
          'I using JavaScript, PHP, Python ans SQL, ' +
          'for the framework is React and Redux, ' +
          'and I am familiar with Docker, AWS, RESTful API, TDD and scrum.';
        break;
      case 'job':
        response =
          "I'm the first engineer in this company, collaborated with London, Russian, China team, also Dominica government. " +
          'I Imported React, typescript and Redux to implement an interactive page, ' +
          "and optimized performance for both our official website and Dominica government's from E to A ranking.";
        break;
      case 'habit':
        response =
          "That's correct, I like to share my own experiences as a software engineer to others, " +
          'so I writing articles about technical and job seeking and the blog reached average 5,000 views/month. ' +
          'Welcome to visit my blog: https://yschen25.blogspot.com.';
        break;
      case 'portfolio':
        response =
          'Please check https://www.yschen25.com/ or https://github.com/yschen25.';
        break;
      case 'visa':
        response = 'Yes, I need a skilled worker visa sponsorship and currently I base in the UK now.';
        break;
      default:
        response = 'The line is busy, please wait.';
        break;
    }
    return response;
  }

  render() {
    let isTextDisable = false;
    let isInputSending = false;

    // The animation and movement during typing
    const { data } = this.props;
    Object.entries(data.phone).map((val) => {
      if (val[0] === "isTextDisable" && val[1].show) {
        isTextDisable = true;
      }

      if (val[0] === "isInputSending" && val[1].show) {
        isInputSending = true;
      }
    });

    return (
      <div className="show-phone">
        <div className="phoneCamera"></div>
        <div className="chatBlock">
          <div className="chatRoom" ref={this.chatRoom}>
            <ol id="chatList" className="chatList" ref={this.chatList}>
              <li>
                <span>Hello !</span>
              </li>
              <li>
                <span>I am Yi-Shiuan Chen</span>
              </li>
            </ol>
          </div>
          <div className="chatFoo">
            <div className="icons camera">
              <i className="fa fa-camera-retro"></i>
            </div>
            <div className="inputBlock">
              <input
                id="msgInput"
                type="text"
                placeholder="Type a message"
                disabled
              />
              <p className={`${isInputSending ? 'act' : ''} inputSending send`}>
                Text sending...
              </p>
            </div>
            <div
              className={`${isTextDisable ? 'act sending' : ''} icons plane`}
            >
              <i className="fa fa-paper-plane"></i>
            </div>
          </div>
        </div>
        <div
          className={`${isTextDisable ? 'disable' : ''} text`}
          data-name="intro"
          onClick={this.sendMessage.bind(this)}
        >
          Tell Me About Yourself.
        </div>
        <div
          className={`${isTextDisable ? 'disable' : ''} text text3`}
          data-name="visa"
          onClick={this.sendMessage.bind(this)}
        >
          Do You Need Visa?
        </div>
        <div
          className={`${isTextDisable ? 'disable' : ''} text text2`}
          data-name="skills"
          onClick={this.sendMessage.bind(this)}
        >
          What Are Your Skills?
        </div>
        <div
          className={`${isTextDisable ? 'disable' : ''} text text3`}
          data-name="job"
          onClick={this.sendMessage.bind(this)}
        >
          What Do You Responsible For?
        </div>
        <div
          className={`${isTextDisable ? 'disable' : ''} text`}
          data-name="habit"
          onClick={this.sendMessage.bind(this)}
        >
          I Heard You Like To Share Things?
        </div>
        <div
          className={`${isTextDisable ? 'disable' : ''} text text2`}
          data-name="portfolio"
          onClick={this.sendMessage.bind(this)}
        >
          Do You Have Other Portfolios?
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.room,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchChangePhoneStatus: (value) => {
      dispatch(changePhoneStatus(value));
    },
  };
};

export const Phone = connect(mapStateToProps, mapDispatchToProps)(ConnectPhone);
