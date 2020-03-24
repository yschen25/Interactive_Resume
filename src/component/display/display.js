import React from 'react';
import FlipPage from "react-flip-page";
import {connect} from 'react-redux';
import {changeStatus, submit} from "../../action";

class ConnectDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {textInput: ''};
        this.changeText = this.changeText.bind(this);
        this.submit = this.submit.bind(this);
    }

    changeStatus(e) {

        let data_name = e.target.getAttribute('data-name');
        let name = data_name.split('-')[1];

        const {dispatchChangeStatus} = this.props;

        // Close popup
        dispatchChangeStatus({
            name,
            show: false
        });
    }

    changeText(e) {
        this.setState({textInput: e.target.value});
    }

    submit(e) {

        e.preventDefault();

        let inputValue = this.state.textInput ? parseInt(this.state.textInput.trim()) : '';
        const {dispatchSubmit} = this.props;

        console.log(e.target.getAttribute('data-name'));
        console.log(inputValue);

        let displayArr = ['pwd', 'youtube', 'portfolio', 'uiuxDesign'];
        if (inputValue === 418) {

            displayArr.map( val => {
                dispatchSubmit({
                    name: [val],
                    show: false
                });
            });

            dispatchSubmit({
                name: [e.target.getAttribute('data-name')],
                show: true
            });

        } else {
            alert('You enter the wrong password, plz see the tip.');
        }
    }

    render() {

        const {data} = this.props;

        return Object.entries(data.clicked).map((val) => {

            let mask = '';
            let display = '';
            let pwdDisplay = '';
            let menuDisplay = '';
            let youtubeDisplay = '';
            let portfolioDisplay = '';
            let uiuxDesignDisplay = '';
            let bottomDisplay = '';

            let isTabShow = false;
            let isBottomShow = false;
            if (val[1].show) {

                // Display other objects
                display = <div className={`show show-${val[0]}`} data-name={`show-${val[0]}`}
                               onClick={this.changeStatus.bind(this)}></div>;

                if (val[0] === 'computer' && val[1].show) {

                    Object.entries(data.tab).map((val) => {

                        // Password tab
                        if (val[0] === 'pwd' && val[1].show) {
                            pwdDisplay = <div className="pwdTab">
                                <form autoComplete="off">
                                    <div className="pwdInput">
                                        <input className="textInput" name="textInput" autoFocus
                                               placeholder="Please enter the password"
                                               value={this.state.textInput} onChange={this.changeText}/>
                                        <p>Tip : I am a teapot</p>
                                        <input className="submitInput" type='submit' value='Submit'
                                               data-name='youtube' onClick={this.submit}/>
                                    </div>
                                </form>
                            </div>
                        }

                        // Tabs menu
                        menuDisplay = <div>
                            <div className="active trigger youtubeTrigger" data-name='youtube' onClick={this.submit}>YouTube</div>
                            <div className="trigger portfolioTrigger" data-name='portfolio' onClick={this.submit}>Portfolio</div>
                            <div className="trigger uiuxDesignTrigger" data-name='uiuxDesign' onClick={this.submit}>UI Design</div>
                        </div>;

                        // Software menu
                        bottomDisplay = <div className="bottom">
                            <div className="obj windows"></div>
                            <div className="obj illustrator"></div>
                            <div className="obj steam"></div>
                            <div className="obj chrome">Life Is Str...</div>
                            <div className="obj phpstorm">Interactiv...</div>
                            <div className="obj photoshop">photoshop</div>
                            <div className="obj gitbash">MINGW64 : ..</div>
                        </div>;

                        // Youtube tab
                        if (val[0] === 'youtube' && val[1].show) {

                            // Show tha tabs menu and software menu
                            isTabShow = isBottomShow = true;
                            youtubeDisplay = <div className="tab youtubeTab">
                                <div className="youtubeBg">
                                    <iframe width="490" height="260" src="https://www.youtube.com/embed/t3v25rt-DYA" frameBorder="0"></iframe>
                                </div>
                            </div>
                        }

                        // Portfolio tab
                        if (val[0] === 'portfolio' && val[1].show) {

                            // Show tha tabs menu and software menu
                            isTabShow = isBottomShow = true;
                            portfolioDisplay = <div className="tab portfolioTab">
                                <iframe width="736" height="405" src="http://www.yschen25.com/portfolio/messageBoard/"/>
                            </div>
                        }

                        // UI/UX design tab
                        if (val[0] === 'uiuxDesign' && val[1].show) {

                            // Show tha tabs menu and software menu
                            isTabShow = isBottomShow = true;
                            uiuxDesignDisplay = <div className="tab uiuxDesignTab"></div>
                        }
                    });

                    display = <div className='show show-computer' data-name='show-computer'>
                        {pwdDisplay}
                        {isTabShow ? menuDisplay : ''}
                        {youtubeDisplay}
                        {portfolioDisplay}
                        {uiuxDesignDisplay}
                        {isBottomShow ? bottomDisplay : ''}
                    </div>;
                }

                // Show notebooks
                // if (val[0] === 'notebooks' && val[1].show) {
                //
                //     display = <FlipPage showSwipeHint showTouchHint loopForever className="show-notebooks">
                //         {Object.entries(data.messages).map((val) => <article><h1>{val[0]}</h1><p>{val[1].text}</p>
                //         </article>)}
                //     </FlipPage>
                // }

                mask = <div className="mask " data-name={`show-${val[0]}`} onClick={this.changeStatus.bind(this)}></div>;
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
        data: state.room
    }
};

const mapDispatchToProps = dispatch => {
    return {
        dispatchChangeStatus: selected => {
            dispatch(changeStatus(selected))
        },
        dispatchSubmit: value => {
            dispatch(submit(value))
        }
    }
};

export const Display = connect(mapStateToProps, mapDispatchToProps)(ConnectDisplay);