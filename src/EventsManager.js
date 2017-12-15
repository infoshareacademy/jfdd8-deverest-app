import React, {Component} from 'react'
import {Tab} from 'semantic-ui-react'
import Calendar from "./Calendar";
import EventList from "./EventList";


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

  // search = (searchedPhrase) => {
  //   this.setState({
  //
  //   })
  // }

  render() {
    const events = this.state.events.filter(event => event.title.includes(this.props.searchPhrase))

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
      <Tab menu={{secondary: true}} panes={panes}/>
    )
  }
}


export default EventsManager;