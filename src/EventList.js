import React from 'react'
// import { Button } from 'semantic-ui-react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import {Tab, Modal, Button, Icon, Header} from 'semantic-ui-react'
import Details from './Details'
import './EventList.css'

class EventList extends React.Component {
  render() {
    return (
      <div>
      <ul>
        {this.props.events.map(
          event=>
            <div key={event.id}>
              <li>{event.title}</li>
              <div className='modal2'>
              <Modal trigger={<Button color='orange'>Details</Button>} size='small'>
                <Modal.Content style={{background: 'linear-gradient(to bottom, rgba(255,102,0,0.7), rgba(0,0,0,0.8))'}}>
                  <Details/>
                </Modal.Content>
              </Modal>
              </div>
            </div>
        )}
      </ul>
      </div>
    )
  }
}

export default EventList;