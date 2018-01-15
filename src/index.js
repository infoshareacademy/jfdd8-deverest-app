import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import './index.css';
import store from './store'

import App from './App';
import AddScreen from './AddScreen';
import Details from './Details';


import registerServiceWorker from './registerServiceWorker';
import Auth from "./Auth/Auth";
import SignOut from "./Auth/SignOut";


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <SignOut/>

        <Switch>
          <Auth>
            <Route exact path="/" component={App}/>
            <Route path="/addscreen" component={AddScreen}/>
            <Route path="/details" component={Details}/>

          </Auth>
        </Switch>

      </div>

    </Router>
  </Provider>,


  document.getElementById('root'));
registerServiceWorker();
