import React, {Component} from 'react'
import {Tab} from 'semantic-ui-react'
import Calendar from "./Calendar";
import EventList from "./EventList";


class EventsManager extends Component {
  state={
    events: [{
      title: 'Tytul',
    },
      {
        title: 'Jeden',
      },
      {
        title: 'Dwa',
      },
      {
        title: 'Trzy',
      },

    ]
  }

  render() {
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
              events={this.state.events}
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