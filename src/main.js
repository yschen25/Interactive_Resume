import './css/normalize.css';
import './scss/index';

import React from 'react';
import ReactDOM from 'react-dom';
import { Room } from './component/main/main';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(<Provider store={store}><Room /></Provider>, document.getElementById('app'));