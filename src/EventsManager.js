import React from 'react'
import { Button } from 'semantic-ui-react'

class EventsManager extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Button attached='left'>Calendar</Button>
          <Button attached='right'>List</Button>
        </div>
      </div>
    )
  }
}

export default EventsManager;