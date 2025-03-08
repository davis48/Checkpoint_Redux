import { combineReducers } from 'redux';
import taskReducer from './taskReducer';

// Combine all reducers into a single root reducer
const rootReducer = combineReducers({
  tasks: taskReducer // Reducer to manage tasks state
});

export default rootReducer;
