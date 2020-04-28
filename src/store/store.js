import { combineReducers, createStore, compose } from "redux";
import * as reducers from './reducers';

// Combining all reducers
const allReducers = combineReducers({
    covidReducer: reducers.covidReducer
});

// Setting up composeEnhancers for redux-devtools on chrome devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// creating store for global usage
export const store = createStore(allReducers, composeEnhancers());