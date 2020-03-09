import React from 'react';
import { Display } from '../display/display';
import { Wall } from '../wall/wall';
import Desk from '../desk/desk';
import Text from '../text/text'

class Room extends React.Component {

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

export default Room;