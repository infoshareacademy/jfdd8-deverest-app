import React, {Component} from 'react'
import {Tab, Modal, Button, Icon, Header} from 'semantic-ui-react'
import Calendar from "./Calendar";
import EventList from "./EventList";
import AddScreen from './AddScreen'
import firebase from 'firebase'
import moment from 'moment';
import { connect } from 'react-redux';
import { reset } from './state/searching'


class EventsManager extends Component {
  state = {
    events: [],
    modalOpen: false
  }

  handleOpen = () => {
    this.setState({ modalOpen: true })
    this.props.reset()
  }

  handleClose = () => this.setState({ modalOpen: false })

  addEvent = (title, start, guestList) => {
    const uid = firebase.auth().currentUser.uid;
    firebase.database().ref('/events/' + uid).push({
      title: title,
      start: start.format(),
      end: start.format(),
      guestList: guestList
    });
  };

  componentWillMount() {

    const uid = firebase.auth().currentUser.uid;
    firebase.database().ref('/events/' + uid).on(
      'value',
      snapshot => {
        const snapshotValue = snapshot.val();
        const events = Object.entries(snapshotValue || {}).map(
          ([id, value]) => ({
            id, ...value,
            start: moment(value.start).toDate(),
            end: moment(value.end).toDate()
          })
        );

        this.setState({
          events
        })
      }
    )
  }

  render() {
    const events = this.state.events.filter(
      event =>
        event.title.includes(
          this.props.searchPhrase
        )
    );

    const panes = [
      {
        menuItem: 'List',
        render: () => (
          <Tab.Pane
            attached={false}
          >
            <EventList
              events={events}
            />
          </Tab.Pane>
        )
      },
      {
        menuItem: 'Calendar',
        render: () => <Tab.Pane attached={false}>
          <Calendar
            events={events}/>
        </Tab.Pane>
      },
    ];

    return (
      <div>
        <Modal
            closeIcon
            closeOnDimmerClick={false}
          open={this.state.modalOpen}
          onClose={this.handleClose}
          trigger={<Button onClick={this.handleOpen}>Add Event</Button>}
          size='small'>
            <AddScreen addEvent={this.addEvent} onAddDone={this.handleClose}/>
        </Modal>
        <Tab menu={{secondary: true}} panes={panes}/>
      </div>
    )
  }
}

export default connect(
  null,
  { reset }
)(EventsManager);