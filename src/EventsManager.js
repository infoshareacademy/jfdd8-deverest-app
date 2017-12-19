import React, {Component} from 'react'
import {Tab, Modal, Button, Icon, Header} from 'semantic-ui-react'
import Calendar from "./Calendar";
import EventList from "./EventList";
import AddScreen from './AddScreen'


class EventsManager extends Component {
  state = {
    events: [{
      id: 1,
      title: 'Tytul',
    },
      {
        id: 2,
        title: 'Jeden',
      },
      {
        id: 3,
        title: 'Dwa',
      },
      {
        id: 4,
        title: 'Trzy',
      },

    ]
  }

  componentWillMount (){
    this.setState ({
      tasks: JSON.parse(localStorage.getItem('events') || '[]')
    })
  }

  componentDidUpdate () {localStorage.setItem('events', JSON.stringify(this.state.events))
  }

  render() {
    const events = this.state.events.filter(event => event.title.includes(this.props.searchPhrase));

    const panes = [
      {
        menuItem: 'Calendar',
        render: () => <Tab.Pane attached={false}><Calendar/></Tab.Pane>
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
          <Header icon='archive' content='Archive Old Messages' />
          <Modal.Content>
            <AddScreen/>
          </Modal.Content>
          <Modal.Actions>
            <Button basic color='red' inverted>
              <Icon name='remove' /> No
            </Button>
            <Button color='green' inverted>
              <Icon name='checkmark' /> Yes
            </Button>
          </Modal.Actions>
        </Modal>
      <Tab menu={{secondary: true}} panes={panes}/>
      </div>
    )
  }
}


export default EventsManager;