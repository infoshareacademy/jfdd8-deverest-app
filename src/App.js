import React, { Component } from 'react';
import SearchBar from './SearchBar';
import { Button } from 'semantic-ui-react'
import './App.css';
import EventsManager from "./EventsManager";

class App extends Component {
  state={
    searchPhrase: ''
  }

  // onSearch = () => {
  //
  // }


  render() {
    return (
      <div className="App">
        <SearchBar/>
        <Button basic color='blue'>Add Event</Button>
          <EventsManager
            searchPhrase={this.state.searchPhrase}
            // onSearch={this.onSearch}
          />
      </div>
    );
  }
}

export default App;
