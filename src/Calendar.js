import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import Kalendarz from "./Klalendarz.css"

// import events from "./EventArray";

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

class Calendar extends Component {
    render() {
        return (
          <div style={{ height: 600 }}>
              <BigCalendar
            {...this.props}
            events={this.props.events}
            defaultDate={new Date()}
            views={['month', 'week','day',]}
            />
          </div>
        )

    }
}

export default Calendar;