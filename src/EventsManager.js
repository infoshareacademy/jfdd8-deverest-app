import React from 'react'
import { Button } from 'semantic-ui-react'
import Calendar from "./Calendar";
import EventList from "./EventList";



class EventsManager extends React.Component {
  render() {
    return (
      <div>
          <Button
            size='mini' color ='blue'
            onClick={this.showCalendar}
          >Calendar
          </Button>
          <Button
            size='mini' color='blue'
          >List
          </Button>

          <div>
              {/*<Calendar/>*/}
              {/*<EventList/>*/}
          </div>
      </div>
    )
  }
}

export default EventsManager;