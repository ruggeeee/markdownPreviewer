import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import  { thunk } from 'redux-thunk';  
import timerSlice from './timerSlice';
import sessionSlice from './sessionSlice'; 

const rootReducer = combineReducers({
  timer: timerSlice,
  session: sessionSlice
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
