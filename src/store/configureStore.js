import { createStore, combineReducers, compose } from 'redux';
import roomReducer from '../reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const app = combineReducers({
    room: roomReducer
});

const store = createStore(app, {}, composeEnhancer());

export default store;
