import './css/normalize.css';
import './scss/index';

import { isMobile } from 'react-device-detect';

import React from 'react';
import ReactDOM from 'react-dom';
import { Room } from './component/main/main';
import store from './store';
import { Provider } from 'react-redux';

// Direct to another resume website if the device is mobile
// if (isMobile) {
//     window.location = 'https://www.yschen25.com/';
// }

ReactDOM.render(<Provider store={store}><Room /></Provider>, document.getElementById('app'));