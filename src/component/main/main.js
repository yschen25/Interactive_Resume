import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { isMobile } from "react-device-detect";

import { addMessages, closeIntro } from "../../action";
import MobileDisplay from "../mobileDisplay/mobileDisplay";
import { Display } from "../display/display";
import { Wall } from "../wall/wall";
import { Desk } from "../desk/desk";
import Text from "../text/text";

class ConnectRoom extends React.Component {
  componentDidMount() {
    // Adjust the size of windows
    let width = screen.width;

    if (1280 < width && width < 1920) {
      document.body.style.zoom = "0.8";
    }

    if (width <= 1280 && !isMobile) {
      document.body.style.zoom = "0.65";
    }

    // Get the messages
    const { dispatchAddMessages } = this.props;

    const config = {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json",
      },
    };

    axios
      .get("./api/queryMessage.php", config)
      .then((response) => {
        if (response.data.status) {
          dispatchAddMessages(response.data);
        }
      })
      .catch((error) => console.log(error));
  }

  // Close intro popup
  closePopUp() {
    const { dispatchCloseIntro } = this.props;
    dispatchCloseIntro(false);
  }

  render() {
    const { data } = this.props;

    // Show intro popup
    let introDisplay = "";

    if (data.intro && !isMobile) {
      introDisplay = (
        <div className="introMask" onClick={this.closePopUp.bind(this)}>
          <p>
            Welcome! How's going? Hope you are doing well.
            <br />
            <br />
            On this website you can know me on a deeper level by{" "}
            <span>interacting with the objects</span>. Feel free to click
            anythings on the wall and desk, you can also find plenty of easter
            eggs for programmer, wish all of you have fun here : )
          </p>
        </div>
      );
    }

    return (
      <>
        {isMobile ? (
          <div className="mobileWrapper">
            <MobileDisplay />
          </div>
        ) : (
          <>
            {introDisplay}
            <Display />
            <div className="wrapper">
              <Wall />
              <Desk />
              <Text />
            </div>
          </>
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.room,
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatchCloseIntro: (value) => {
    dispatch(closeIntro(value));
  },
  dispatchAddMessages: (text) => {
    dispatch(addMessages(text));
  },
});

export const Room = connect(mapStateToProps, mapDispatchToProps)(ConnectRoom);
