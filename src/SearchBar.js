import React from 'react'
import { Input } from 'semantic-ui-react'

class SearchBar extends React.Component {
  state ={
    term: ''
  }

  handleTermChange = (event) => {
    this.setState({
      term: event.target.value
    })
  };

  search= () => {
    // this.onSearch(this.state.term)
    this.setState({
      term: ''
    })
  };

  render() {
    return (
      <div>
        <Input
          icon={{
            name: 'search',
            circular: true,
            link: true,
            onClick:()=>console.log('hello') }}
          placeholder='Search...'
        />
      </div>
  )
  }
}

export default SearchBar;