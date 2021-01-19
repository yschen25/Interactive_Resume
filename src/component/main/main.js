import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {addMessages, closeIntro} from '../../action';
import {Display} from '../display/display';
import {Wall} from '../wall/wall';
import {Desk} from '../desk/desk';
import Text from '../text/text'
import Certificate from "../certificate/certificate";

class ConnectRoom extends React.Component {

    componentDidMount() {

        // Adjust zoom
        let width = screen.width;

        if (1280 < width && width < 1920) {
            document.body.style.zoom = '0.8';
        }

        if (width <= 1280) {
            document.body.style.zoom = '0.65';
        }

        const {dispatchAddMessages} = this.props;

        const config = {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json'
            }
        };

        // Get message
        axios.get('./api/queryMessage.php', config)
            .then(response => {

                if (response.data.status) {
                    dispatchAddMessages(response.data)
                }

            })
            .catch(error => console.log(error));
    }

    // Close intro popup
    closePopUp() {
        const {dispatchCloseIntro} = this.props;
        dispatchCloseIntro(false);
    }

    render() {

        const {data} = this.props;

        // Show intro popup
        let introDisplay = '';
        if (data.intro) {
            introDisplay = <div className="introMask" onClick={this.closePopUp.bind(this)}><p>Welcome !!!<br/>You can know me deeper by <span>interacting with the object on the website</span>, not only knowing me by texts. there are also a lock you can solve by the hint, you also can find lots of programmer's easter eggs, wish all of you have fun here.</p></div>;
        }

        return (
            <div>
                {introDisplay}
                <Display/>
                <div className="wrapper">
                    <Wall/>
                    <Desk/>
                    <Text/>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        data: state.room
    }
};

const mapDispatchToProps = (dispatch) => ({
    dispatchCloseIntro: value => {
        dispatch(closeIntro(value))
    },
    dispatchAddMessages: (text) => {
        dispatch(addMessages(text));
    }
});

export const Room = connect(mapStateToProps, mapDispatchToProps)(ConnectRoom);