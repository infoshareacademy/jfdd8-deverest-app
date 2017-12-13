import React from 'react'
import { Button } from 'semantic-ui-react'
import Calendar from "./Calendar";
import EventList from "./EventList";



class EventsManager extends React.Component {
  render() {
    return (
      <div>
          <Button attached='left' >Calendar</Button>
          <Button attached='right'>List</Button>
          <div>
              <Calendar/>
              <EventList/>
          </div>
      </div>
    )
  }
}

export default EventsManager;