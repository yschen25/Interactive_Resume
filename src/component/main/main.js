import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addMessages } from '../../action';
import { Display } from '../display/display';
import { Wall } from '../wall/wall';
import { Desk } from '../desk/desk';
import Text from '../text/text'

class ConnectRoom extends React.Component {

    componentDidMount(){
        const { dispatchAddMessages } = this.props;

        // todo Get message
        axios.get('./../api/queryMessage.php')
            .then(response => dispatchAddMessages(response.data))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <Display />
                <div className="wrapper">
                    <Wall />
                    <Desk />
                    <Text />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    dispatchAddMessages: (text) =>{
        dispatch(addMessages(text));
    }
});

export const Room = connect(null, mapDispatchToProps)(ConnectRoom);