import React from 'react'
import { Button } from 'semantic-ui-react'

class EventList extends React.Component {
  render() {
    return (
      <div>
      <ul>
        {this.props.events.map(event=><div><li>{event.title}</li><Button basic color='teal'>Details</Button></div>)}

      </ul>
      </div>
    )
  }
}

export default EventList;