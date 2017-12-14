import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'
import Calendar from "./Calendar";
import EventList from "./EventList";

const panes = [
    { menuItem: 'Calendar', render: () => <Tab.Pane attached={false}><Calendar/></Tab.Pane> },
    { menuItem: 'List', render: () => <Tab.Pane attached={false}><EventList/></Tab.Pane> },
    ]

class EventsManager extends Component {
    render() {
        return (
          <Tab menu={{ secondary: true }} panes={panes} />
        )
    }
}


export default EventsManager;