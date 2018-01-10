import React from 'react';
import ReactDOM from 'react-dom';
import setupFirebase from './setupFirebase'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import './index.css';

import App from './App';
import AddScreen from './AddScreen';
import Details from './Details';


import registerServiceWorker from './registerServiceWorker';
import Auth from "./Auth/Auth";
import SignOut from "./Auth/SignOut";

setupFirebase();

ReactDOM.render(
  <Router>
    <div>

          <Switch>
           <Auth>
            <Route exact path="/" component={App}/>
            <Route path="/addscreen" component={AddScreen}/>
            <Route path="/details" component={Details}/>

               <SignOut/>
           </Auth>
          </Switch>

    </div>

  </Router>,


  document.getElementById('root'))
registerServiceWorker();
