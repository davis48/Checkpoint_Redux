import { createStore } from 'redux';
import rootReducer from './reducers';

// Create a Redux store to hold the state of the app
const store = createStore(
  rootReducer, // Root reducer to manage the state
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Enable Redux DevTools extension
);

export default store;
