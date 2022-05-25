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
      case "intro":
        response =
          "Enthusiastic software engineer with 4 years’ experience in web development for e-commerce and fintech industry. " +
          "An interviewer and mentor for junior engineers. " +
          "Have experiences on collaboration with people from various countries including Dominica government while working for an international company. ";
        break;
      case "quit":
        response =
          "Because I want to join a large-scale and well-organized company which has excellent engineers. " +
          "My previous company asked me to maintain more than 10 websites and build the servers, " +
          "be an interviewer and mentor to lead the junior engineer, " +
          "I am really appreciate the company gave me the chance to gain these experiences, " +
          "but it limited me to archive my working goal, and it makes me too busy to have time interviewing, " +
          "so I quit the job and focusing on finding my ideally company. ";
        break;
      case "job":
        response =
          "I’m the first engineer in this company, collaborated with London, Russian, China team, also Dominica government. " +
          "I Imported React, typescript and Redux to implement an interactive page, " +
          "and optimized performance for both our official website and Dominica government’s from E to A ranking.";
        break;
      case "habit":
        response =
          "That's correct, I like to share my own experiences as a software engineer to others, " +
          'so I writing articles about technical and job seeking and the blog reached average 5,000 views/month, ' +
          "there are also two articles were posted on two social media platforms. Welcome to visit my blog: https://yschen25.blogspot.com/";
        break;
      case "github":
        response = "Please check https://github.com/yschen25.";
        break;
      case "visa":
        response =
          "Yes, I have a working holiday visa but it only valids until 07/09/2022 so I need the skilled worker visa sponsorship.";
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
              <p className={`${isInputSending ? "act" : ""} inputSending send`}>
                Text sending...
              </p>
            </div>
            <div
              className={`${isTextDisable ? "act sending" : ""} icons plane`}
            >
              <i className="fa fa-paper-plane"></i>
            </div>
          </div>
        </div>
        <div
          className={`${isTextDisable ? "disable" : ""} text`}
          data-name="intro"
          onClick={this.sendMessage.bind(this)}
        >
          Tell Me About Yourself.
        </div>
        <div
          className={`${isTextDisable ? "disable" : ""} text text3`}
          data-name="visa"
          onClick={this.sendMessage.bind(this)}
        >
          Do You Have Visa?
        </div>
        <div
          className={`${isTextDisable ? "disable" : ""} text text2`}
          data-name="quit"
          onClick={this.sendMessage.bind(this)}
        >
          Why Do You Open To A New Job?
        </div>
        <div
          className={`${isTextDisable ? "disable" : ""} text text3`}
          data-name="job"
          onClick={this.sendMessage.bind(this)}
        >
          What Do You Responsible For?
        </div>
        <div
          className={`${isTextDisable ? "disable" : ""} text`}
          data-name="habit"
          onClick={this.sendMessage.bind(this)}
        >
          I Heard You Like To Share Things?
        </div>
        <div
          className={`${isTextDisable ? "disable" : ""} text text2`}
          data-name="github"
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
