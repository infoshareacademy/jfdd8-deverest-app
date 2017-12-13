import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';



import './index.css';
import 'semantic-ui-css/semantic.min.css';

import App from './App';
import AddScreen from './AddScreen';
import Details from './Details';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <div>

      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/addscreen" component={AddScreen}/>
        <Route path="/details" component={Details}/>
      </Switch>
    </div>

  </Router>,


  document.getElementById('root'))
registerServiceWorker();
