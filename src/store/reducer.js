import { combineReducers } from 'redux';
import news from '../domain/news';

const rootReducer = combineReducers({
  news,
});

export default rootReducer;
