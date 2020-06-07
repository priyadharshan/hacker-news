import { combineReducers } from 'redux';
import { reducer as news } from '../domain/news';

const rootReducer = combineReducers({
  news,
});

export default rootReducer;
