import React, {Component} from 'react'
import {Tab, Modal, Button, Icon, Header} from 'semantic-ui-react'
import Calendar from "./Calendar";
import EventList from "./EventList";
import AddScreen from './AddScreen'


class EventsManager extends Component {
  state = {
    events: [
      {
        id: 1,
        'title': 'Impreza u Rafała',
        'start': new Date(2017, 11, 15),
        'end': new Date(2017, 11, 17),
        desc: 'Nauka Reacta',
      },
      {
        id: 2,
        'title': 'Impreza u Kuby',
        'start': new Date(2017, 11, 19),
        'end': new Date(2017, 11, 20),
      },
      {
        id: 3,
        'title': 'Impreza u Roberta',
        'start': new Date(2017, 11, 22),
        'end': new Date(2017, 11, 22),
      },


    ]
  }
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
      events: JSON.parse(localStorage.getItem('events') || '[]')
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
        menuItem: 'Calendar',
        render: () => <Tab.Pane attached={false}>
          <Calendar events={this.state.events}/>
        </Tab.Pane>
      },
      {
        menuItem: 'List',
        render: () => (
          <Tab.Pane
            attached={false}
            // searchPhrase={this.props.searchPhrase}
            // events={events}
          >
            <EventList
              searchPhrase={this.props.searchPhrase}
              events={events}
            />
          </Tab.Pane>
        )
      },
    ];

    return (
      <div>
        <Modal trigger={<Button>Basic Modal</Button>} size='small'>
          <Header icon='archive' content='Archive Old Messages'/>
          <Modal.Content>
            <AddScreen addEvent={this.addEvent}/>
          </Modal.Content>
          <Modal.Actions>
            <Button basic color='red' inverted>
              <Icon name='remove'/> No
            </Button>
            <Button color='green' inverted>
              <Icon name='checkmark'/> Yes
            </Button>
          </Modal.Actions>
        </Modal>
        <Tab menu={{secondary: true}} panes={panes}/>
      </div>
    )
  }
}


export default EventsManager;