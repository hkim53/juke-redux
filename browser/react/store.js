import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/root-reducer';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(createLogger, thunkMiddleware));
export default store;
