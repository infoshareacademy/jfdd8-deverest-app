import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import Details from "./Details";
import {Button, Modal} from 'semantic-ui-react'
// import events from "./EventArray";

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

class Calendar extends Component {

  state = {
    modalOpen: false
  };

  handleOpenDetails = (event) => this.setState({modalOpen: true, selectedEvent: event});

  handleCloseDetails = () => this.setState({modalOpen: false, selectedEvent: undefined});


  render() {
    return (
      <div style={{height: 600}}>
        <div className='detail'>
          <Modal
            closeIcon
            closeOnDimmerClick={false}
            open={this.state.modalOpen}
            onClose={this.handleCloseDetails}
            size='small'>
            <Details event={this.state.selectedEvent}/>
          </Modal>
        </div>

        <BigCalendar
          {...this.props}
          events={this.props.events}
          defaultDate={new Date()}
          views={['month', 'day']}
          onSelectEvent={event => this.handleOpenDetails(event)}
        />
      </div>
    )

  }
}

export default Calendar;