import React, { Component } from 'react';
import SearchBar from './SearchBar';
import { Button } from 'semantic-ui-react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar/>
        <Button basic color='blue'>Add Event</Button>
      </div>
    );
  }
}

export default App;
