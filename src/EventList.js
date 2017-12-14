import React from 'react'
import { Button } from 'semantic-ui-react'

class EventList extends React.Component {
  render() {
    return (
      <div>
      <ul>
        <li>Raz</li><Button basic color='teal'>Details</Button>
        <li>Dwa</li><Button basic color='teal'>Details</Button>
        <li>Trzy</li><Button basic color='teal'>Details</Button>
      </ul>
      </div>
    )
  }
}

export default EventList;