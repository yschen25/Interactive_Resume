import React from 'react';
import {connect} from 'react-redux';
import {changeStatus, click} from "../../action";

class ConnectDisplay extends React.Component {

    click(e) {

        let data_name = e.target.getAttribute('data-name');
        let name = data_name.split('-')[1];

        console.log('display.js / close', name);

        const {dispatchChangeStatus} = this.props;

        // Close popup
        dispatchChangeStatus({
            name,
            show: false
        });

    }

    render() {

        const {clicked} = this.props;
        return Object.entries(clicked).map((val) => {

            console.log('display.js/', val);

            let mask = '';
            let display = '';
            if (val[1].show) {

                display = <div className={`show show-${val[0]}`} data-name={`show-${val[0]}`} onClick={this.click.bind(this)}></div>;

                if (val[0] === 'computer') {
                    console.log('COMPUTER');

                    display = <div className='show show-computer' data-name='show-computer'>
                        {/*<div className="pwdTab">*/}
                            {/*<div className="pwdInput">*/}
                                {/*<input className="textInput" autoFocus placeholder="Please enter the password"/>*/}
                                {/*<p>Tip : I am a teapot</p>*/}
                                {/*<input className="submitInput" type='submit' value='submit' />*/}
                            {/*</div>*/}
                        {/*</div>*/}

                        <div className="trigger youtubeTrigger">YouTube</div>
                        <div className="trigger portfolioTrigger">Portfolio</div>

                        {/*<div className="tab youtubeTab">*/}
                            {/*<div className="youtubeBg">*/}
                                {/*<iframe width="490" height="260" src="https://www.youtube.com/embed/t3v25rt-DYA"*/}
                                        {/*frameBorder="0"></iframe>*/}
                            {/*</div>*/}
                        {/*</div>*/}

                        <div className="tab portfolioTab">
                            <iframe width="736" height="410" src="https://www.yschen25.com/" />
                        </div>

                    </div>;
                }

                mask = <div className="mask" data-name={`show-${val[0]}`} onClick={this.click.bind(this)}></div>;
            }

            return (
                <div key={`show-${val[0]}`}>
                    {mask}
                    {display}
                </div>
            )
        })

    }
}

ConnectDisplay.defaultProps = {
    clicked: {}
};

const mapStateToProps = state => {
    return {
        clicked: state.room.clicked
    }
};

const mapDispatchToProps = dispatch => {
    return {
        dispatchChangeStatus: selected => {
            dispatch(changeStatus(selected))
        }
    }
};

export const Display = connect(mapStateToProps, mapDispatchToProps)(ConnectDisplay);