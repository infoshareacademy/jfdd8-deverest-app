import React, { Component } from 'react';
import SearchBar from './SearchBar';
import { Button } from 'semantic-ui-react'
import './App.css';
import EventsManager from "./EventsManager";

class App extends Component {
  state={
    searchPhrase: ''
  }

  onSearch = (text) => {
    this.setState({
      searchPhrase: text
    })
  }
  handleClearTerm = () => {
    this.setState({
      searchPhrase: ''
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar
          onSearch={this.onSearch}/>
        <Button basic
          onClick={this.handleClearTerm}>X</Button>
        <Button basic color='blue'>Add Event</Button>
          <EventsManager
            searchPhrase={this.state.searchPhrase}
          />
      </div>
    );
  }
}

export default App;
