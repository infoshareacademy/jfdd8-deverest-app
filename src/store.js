import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import persistState from 'redux-localstorage'
import thunk from 'redux-thunk';
import setupFirebase from './setupFirebase'
import searching from './state/searching'
import auth, { enableSync } from './state/auth'


setupFirebase();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  persistState(['auth'], { key: 'wixer-party-planner'})
);

const reducer = combineReducers({
  searching,
  auth
});

const store = createStore(
  reducer,
  enhancer
);

store.dispatch(enableSync());

export default store