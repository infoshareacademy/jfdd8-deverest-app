import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import persistState from 'redux-localstorage'
import thunk from 'redux-thunk';
import setupFirebase from './setupFirebase'
import searching from './state/searching'

setupFirebase();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  persistState([], { key: 'jfdd8-app-v3'})
);

const reducer = combineReducers({
  searching
});

const store = createStore(
  reducer,
  enhancer
);

// store.dispatch(enableSync());

export default store