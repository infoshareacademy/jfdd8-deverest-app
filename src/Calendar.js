import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

class Calendar extends React.Component {
    render() {
        return (
              <BigCalendar
            {...this.props}


            events={events}
            views={allViews}
            step={60}
            defaultDate={new Date(2015, 3, 1)}
            />
        )

    }
}

export default Calendar;