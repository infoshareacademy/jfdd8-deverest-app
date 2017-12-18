import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from "./EventArray";

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

class Calendar extends Component {
    render() {
        return (
          <div style={{ height: 600 }}>
              <BigCalendar
            {...this.props}
           // event={zupa.map(event => ({ ...event, date: new Date(event.date)}))}
            events={events}
            defaultDate={new Date()}
            />
          </div>
        )

    }
}

export default Calendar;