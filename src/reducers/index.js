import { postsReducer } from './postsReducers';
import { combineReducers } from 'redux';
import { singlePostReducer } from './singlePostReducers';

const Reducers = combineReducers({
  postsReducer,
  singlePostReducer,
});

export default Reducers;
