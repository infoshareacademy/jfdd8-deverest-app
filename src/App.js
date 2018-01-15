import React, { Component } from 'react';
import SearchBar from './SearchBar';
import { Button } from 'semantic-ui-react'
import './App.css';
import EventsManager from "./EventsManager";
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { search, reset } from './state/searching'

class App extends Component {


  onSearch = (text) => {
    this.props.search(text)
  };
  handleClearTerm = () => {
    this.props.reset()
  };

  render() {
    return (
      <div className="App"><br/>

        <SearchBar
          onSearch={this.onSearch} />
        <Button className="Search-button"
          onClick={this.handleClearTerm}>Clear search</Button>
          <EventsManager
            searchPhrase={this.props.searchPhrase}
          />
      </div>
    );
  }
}

// export default App;
export default connect(
  state => ({
    searchPhrase: state.searching.searchPhrase
  }),
  { search, reset }
)(App);