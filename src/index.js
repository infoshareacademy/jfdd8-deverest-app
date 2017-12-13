import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


import 'semantic-ui-css/semantic.min.css';
import './index.css';


import App from './App';
import AddScreen from './AddScreen';
import Details from './Details';
import EventsManager from './EventsManager'
import registerServiceWorker from './registerServiceWorker';
import Calendar from "./Calendar";
import EventList from "./EventList";

ReactDOM.render(
  <Router>
    <div>
      <EventsManager/>

      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/addscreen" component={AddScreen}/>
        <Route path="/details" component={Details}/>
        {/*<Route path="/calendar" component={Calendar}/>*/}
        {/*<Route path="/eventslist" component={EventList}/>*/}
      </Switch>
    </div>

  </Router>,


  document.getElementById('root'))
registerServiceWorker();
