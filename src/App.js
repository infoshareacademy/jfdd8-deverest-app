import React, { Component } from 'react';
import SearchBar from './SearchBar';
import { Button } from 'semantic-ui-react'
import './App.css';
import EventsManager from "./EventsManager";
import { BrowserRouter as Router, Link } from 'react-router-dom'

class App extends Component {
  state={
    searchPhrase: ''
  };

  onSearch = (text) => {
    this.setState({
      searchPhrase: text
    })
  };
  handleClearTerm = () => {
    this.setState({
      searchPhrase: ''
    })
  };

  render() {
    return (
      <div className="App"><br/>

        <SearchBar
          onSearch={this.onSearch} />
        <Button className="Search-button"
          onClick={this.handleClearTerm}>Clear search</Button>
          <EventsManager
            searchPhrase={this.state.searchPhrase}
          />
      </div>
    );
  }
}

export default App;
