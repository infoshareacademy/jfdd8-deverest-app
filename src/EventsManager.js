import React, {Component} from 'react'
import {Tab, Modal, Button, Icon, Header} from 'semantic-ui-react'
import Calendar from "./Calendar";
import EventList from "./EventList";
import AddScreen from './AddScreen'
import firebase from 'firebase'
import moment from 'moment';



class EventsManager extends Component {
  state = {
    events: [],
    modalOpen: false
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

//ma wylane czy tu jest jakis formularz/input
  addEvent = (title, start) => {
    // this.setState({
    //   events: this.state.events.concat({
    //     id: this.state.events.map(
    //       item => item.id
    //     ).reduce(
    //       (biggest, next) => Math.max(biggest, next),
    //       0
    //     ) + 1,
    //     title: title,
    //     start: start.toDate(),
    //     end: start.toDate()
    //   })
    // });
    const uid = firebase.auth().currentUser.uid;
    firebase.database().ref('/events/' + uid).push({
      title: title,
      start: start.format(),
      end: start.format()
    });
  };

  componentWillMount() {
    // this.setState({
    //   events: JSON.parse(localStorage.getItem('events') || '[]').map(
    //     event => ({...event, start: new Date(event.start), end: new Date(event.end)})
    //   )
    // })
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

  // componentDidUpdate() {
  //   localStorage.setItem('events', JSON.stringify(this.state.events))
  // }
  // nie potrzebujemy bo nie korzystamy z localstorage bo zawsze na koncu sie wywolu

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
          open={this.state.modalOpen}
          onClose={this.handleClose}
          trigger={<Button onClick={this.handleOpen}>Add Event</Button>}
          size='small'>
          <Header icon='archive' content='Archive Old Messages'/>
          <Modal.Content>
            <AddScreen addEvent={this.addEvent} onAddDone={this.handleClose}/>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.handleClose} color='red' inverted>
              <Icon name='checkmark'/> CLOSE
            </Button>
          </Modal.Actions>
        </Modal>
        <Tab menu={{secondary: true}} panes={panes}/>
      </div>
    )
  }
}


export default EventsManager;