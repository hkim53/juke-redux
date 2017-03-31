import {createStore, applyMiddleware, combineReducers} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import lyricsReducer from './reducers/lyrics-reducer';
import playerReducer from './reducers/player-reducer';

const reducer = combineReducers({
  lyrics: lyricsReducer,
  player: playerReducer
});

const store = createStore(reducer, applyMiddleware(createLogger, thunkMiddleware));

export default store;
