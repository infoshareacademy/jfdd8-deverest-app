import React from 'react'
import { Input } from 'semantic-ui-react'

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <Input
          icon={{ name: 'search', circular: true, link: true }}
          placeholder='Search...'
        />
      </div>
  )
  }
}

export default SearchBar;