import React from 'react'

import { BrowserRouter as Router, Link } from 'react-router-dom'
import {Tab, Modal, Button, Icon, Header} from 'semantic-ui-react'
import Details from './Details'

class EventList extends React.Component {


  render() {
    return (
      <div>
      <ul>
        {this.props.events.map(
          event=>
            <div key={event.id}>
              <li>{event.title}</li>
              <Modal closeIcon closeOnDimmerClick={false} trigger={<Button>Details</Button>} size='small'>
                  <Details event={event}/>
              </Modal>
            </div>
        )}
      </ul>
      </div>
    )
  }
}

export default EventList;