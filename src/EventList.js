import React from 'react'
import { Button } from 'semantic-ui-react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

class EventList extends React.Component {
  render() {
    return (
      <div>
      <ul>
        {this.props.events.map(
          event=>
            <div key={event.id}>
              <li>{event.title}</li>
              <Button basic color='teal' as={Link} to={'/details'}>Details</Button>
            </div>
        )}
      </ul>
      </div>
    )
  }
}

export default EventList;