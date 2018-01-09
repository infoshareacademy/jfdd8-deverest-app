import React, { Component } from 'react';
import SearchBar from './SearchBar';
import { Button } from 'semantic-ui-react'
import './App.css';
import EventsManager from "./EventsManager";
import { BrowserRouter as Router, Link } from 'react-router-dom'

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
          onClick={this.handleClearTerm}>clear search</Button>
        {/*<Button basic color='blue' as={Link} to={'/addscreen'}>Add Event</Button>*/}
          <EventsManager
            searchPhrase={this.state.searchPhrase}
          />
      </div>
    );
  }
}

export default App;
