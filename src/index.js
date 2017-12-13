import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
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

  </Router>



  <App />,


  document.getElementById('root'));
registerServiceWorker();
