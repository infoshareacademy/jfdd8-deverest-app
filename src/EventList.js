import React from 'react'
import { Button } from 'semantic-ui-react'

class EventList extends React.Component {
  render() {
    return (
      <div>
      <ul>
        {this.props.events.map(event=><li>{event.title}</li>)}
      </ul>
      </div>
    )
  }
}

export default EventList;