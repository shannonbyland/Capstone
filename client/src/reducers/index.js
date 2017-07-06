import { combineReducers } from 'redux';
import user from './user';
import journal from './journal';
import topFive from './topFive';

const rootReducer = combineReducers({
  user,
  journal,
  topFive
});

export default rootReducer;
