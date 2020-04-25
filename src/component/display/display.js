import React from 'react';
import FlipPage from "react-flip-page";
import {connect} from 'react-redux';
import {changeStatus, changeTabStatus} from "../../action";
import {Rose} from "../rose/rose";
import Lock from "../lock/lock";
import {Phone} from "../phone/phone";
import test from '../../img/avatar.png';

class ConnectDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {textInput: ''};
        this.state = {time: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()};
        this.changeText = this.changeText.bind(this);
        this.submit = this.submit.bind(this);
    }

    // Time
    componentDidMount() {
        const upTime = () => {
            this.setState({time: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()})
        };
        setInterval(upTime, 1000);
    }

    changeStatus(e) {

        // Close popup
        let data_name = e.target.getAttribute('data-name');
        let name = data_name.split('-')[1];

        const {dispatchChangeStatus} = this.props;

        dispatchChangeStatus({
            name,
            show: false
        });
    }

    // Password
    changeText(e) {
        this.setState({textInput: e.target.value});
    }

    submit(e) {

        e.preventDefault();

        let inputValue = this.state.textInput ? parseInt(this.state.textInput.trim()) : '';
        const {dispatchChangeTabStatus} = this.props;

        let name = e.target.getAttribute('data-name');
        let displayArr = ['youtube', 'portfolio', 'uiuxDesign', 'phpstorm', 'photoshop', 'gitBash'];
        if (inputValue === 418) {

            dispatchChangeTabStatus({
                name: 'pwd',
                show: false
            });

            let pre = localStorage.getItem('pre') !== '' ? localStorage.getItem('pre') : ''; // Record what tabs or software did you choose
            let web = localStorage.getItem('web') !== '' ? localStorage.getItem('web') : ''; // Record the specific tab when change tabs to software
            if (pre === 'youtube' || pre === 'portfolio' || pre === 'uiuxDesign') {
                if (name === 'phpstorm' || name === 'photoshop' || name === 'gitBash') {
                    localStorage.setItem('web', pre);
                }
            }

            if (name === 'youtube' || name === 'portfolio' || name === 'uiuxDesign') {
                if (pre === 'phpstorm' || pre === 'photoshop' || pre === 'gitBash') {

                    displayArr.map(val => {
                        dispatchChangeTabStatus({
                            name: [val],
                            show: false
                        });
                    });

                    if (web === 'youtube') {
                        dispatchChangeTabStatus({
                            name: [name],
                            show: true
                        });

                        localStorage.setItem('pre', name);
                        return;
                    }

                    dispatchChangeTabStatus({
                        name: [web],
                        show: true
                    });

                    localStorage.setItem('pre', name);
                    return;
                }
            }

            displayArr.map(val => {
                dispatchChangeTabStatus({
                    name: [val],
                    show: false
                });
            });

            dispatchChangeTabStatus({
                name: [name],
                show: true
            });

            localStorage.setItem('pre', name);

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
            let phpstormDisplay = '';
            let photoshopDisplay = '';
            let gitBashDisplay = '';
            let bottomDisplay = '';

            let isTabShow = true;
            let isBottomShow = true;
            if (val[1].show) {

                // Display other objects
                display = <div className={`show show-${val[0]}`} data-name={`show-${val[0]}`}
                               onClick={this.changeStatus.bind(this)}></div>;

                if (val[0] === 'computer' && val[1].show) {

                    Object.entries(data.tab).map((val) => {

                        // Password tab
                        if (val[0] === 'pwd' && val[1].show) {

                            // Hide the tabs menu and bottom menu
                            isTabShow = isBottomShow = false;

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

                        // Youtube tab
                        if (val[0] === 'youtube' && val[1].show) {

                            youtubeDisplay = <div className="tab youtubeTab">
                                <div className="youtubeBg">
                                    <iframe width="490" height="260" src="https://www.youtube.com/embed/t3v25rt-DYA"
                                            frameBorder="0"></iframe>
                                </div>
                            </div>;

                            if (document.getElementById("web") !== null) document.getElementById("web").innerHTML = "Life Is Str...";
                        }

                        // Portfolio tab
                        if (val[0] === 'portfolio' && val[1].show) {

                            portfolioDisplay = <div className="tab portfolioTab">
                                <iframe width="736" height="400" src="http://www.yschen25.com/portfolio/messageBoard/"/>
                            </div>;

                            if (document.getElementById("web") !== null) document.getElementById("web").innerHTML = "Message..."
                        }

                        // UI/UX design tab
                        if (val[0] === 'uiuxDesign' && val[1].show) {
                            uiuxDesignDisplay = <div className="tab uiuxDesignTab"></div>

                            if (document.getElementById("web") !== null) document.getElementById("web").innerHTML = "8 UI/UX..."
                        }

                        // Phpstorm tab
                        if (val[0] === 'phpstorm' && val[1].show) {
                            phpstormDisplay = <div className="item phpstormItem"></div>
                        }

                        // Photoshop tab
                        if (val[0] === 'photoshop' && val[1].show) {
                            photoshopDisplay = <div className="item photoshopItem"></div>
                        }

                        // Git bash tab
                        if (val[0] === 'gitBash' && val[1].show) {
                            gitBashDisplay = <div className="item gitBashItem"></div>
                        }
                    });

                    // Tabs menu
                    menuDisplay = <div>
                        <div className={`${youtubeDisplay !== '' ? 'triggerActive' : ''} trigger youtubeTrigger`}
                             data-name='youtube' onClick={this.submit}>YouTube
                        </div>
                        <div className={`${portfolioDisplay !== '' ? 'triggerActive' : ''} trigger portfolioTrigger`}
                             data-name='portfolio' onClick={this.submit}>Portfolio
                        </div>
                        <div className={`${uiuxDesignDisplay !== '' ? 'triggerActive' : ''} trigger uiuxDesignTrigger`}
                             data-name='uiuxDesign' onClick={this.submit}>UI Design
                        </div>
                    </div>;

                    // Software menu
                    bottomDisplay = <div className="bottom">
                        <div className="obj windowsObj"></div>
                        <div className="obj illustratorObj"></div>
                        <div className="obj steamObj"></div>
                        <div id="web"
                             className={`${youtubeDisplay !== '' || portfolioDisplay !== '' || uiuxDesignDisplay !== '' ? 'objActive' : ''} obj chromeObj`}
                             data-name='youtube'
                             onClick={this.submit}>Life Is Str...
                        </div>
                        <div className={`${phpstormDisplay !== '' ? 'objActive' : ''} obj phpstormObj`}
                             data-name='phpstorm' onClick={this.submit}>Interactiv...
                        </div>
                        <div className={`${photoshopDisplay !== '' ? 'objActive' : ''} obj photoshopObj`}
                             data-name='photoshop' onClick={this.submit}>Web Desig...
                        </div>
                        <div className={`${gitBashDisplay !== '' ? 'objActive' : ''} obj gitbashObj`}
                             data-name='gitBash' onClick={this.submit}>MINGW64 : ..
                        </div>
                        <div className="obj timeObj">{this.state.time}</div>
                    </div>;

                    // Computer display
                    display = <div className='show show-computer' data-name='show-computer'>
                        {pwdDisplay}
                        {isTabShow ? menuDisplay : ''}
                        {youtubeDisplay}
                        {portfolioDisplay}
                        {uiuxDesignDisplay}
                        {phpstormDisplay}
                        {photoshopDisplay}
                        {gitBashDisplay}
                        {isBottomShow ? bottomDisplay : ''}
                    </div>;
                }

                // Rose
                if (val[0] === 'rose' && val[1].show) {
                    display = <Rose/>
                }

                // Lock
                if (val[0] === 'lock' && val[1].show) {
                    display = <Lock/>
                }

                // Phone
                if (val[0] === 'phone' && val[1].show) {
                    display = <Phone/>
                }
                // Show notebooks
                if (val[0] === 'notebooks' && val[1].show) {

                    display = <FlipPage showSwipeHint showTouchHint loopForever pageBackground="#ffebeb" className="show-notebooks">
                        {Object.entries(data.messages).map((val) => <article key={val[0]}>
                            <img className="msgPic" src={test} />
                            <h1>Name : {val[0]}</h1>
                            <p>{val[1].text}</p>
                        </article>)}
                    </FlipPage>
                }

                mask =
                    <div className="mask " data-name={`show-${val[0]}`} onClick={this.changeStatus.bind(this)}></div>;
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
        dispatchChangeTabStatus: value => {
            dispatch(changeTabStatus(value))
        }
    }
};

export const Display = connect(mapStateToProps, mapDispatchToProps)(ConnectDisplay);