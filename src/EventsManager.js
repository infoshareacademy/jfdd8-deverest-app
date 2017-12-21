import React, {Component} from 'react'
import {Tab, Modal, Button, Icon, Header} from 'semantic-ui-react'
import Calendar from "./Calendar";
import EventList from "./EventList";
import AddScreen from './AddScreen'


class EventsManager extends Component {
  state = {
    events: [],
    modalOpen: false
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

//ma wylane czy tu jest jakis formularz/input
  addEvent = (title, start) => {
    this.setState({
      events: this.state.events.concat({
        id: this.state.events.map(
          item => item.id
        ).reduce(
          (biggest, next) => Math.max(biggest, next),
          0
        ) + 1,
        title: title,
        start: start.toDate(),
        end: start.toDate()
      })
    });
  };

  componentWillMount() {
    this.setState({
      events: JSON.parse(localStorage.getItem('events') || '[]').map(
        event => ({...event, start: new Date(event.start), end: new Date(event.end)})
      )
    })
  }

  componentDidUpdate() {
    localStorage.setItem('events', JSON.stringify(this.state.events))
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
          open={this.state.modalOpen}
          onClose={this.handleClose}
          trigger={<Button onClick={this.handleOpen}>Add Event</Button>}
          size='small'>
          <Header icon='archive' content='Archive Old Messages'/>
          <Modal.Content>
            <AddScreen addEvent={this.addEvent} onAddDone={this.handleClose}/>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.handleOpen} color='red' inverted>
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