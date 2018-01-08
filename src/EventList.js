import React from 'react'
// import { Button } from 'semantic-ui-react'
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
              {/*<Button basic color='teal' as={Link} to={'/details'}>Details</Button>*/}
              <Modal trigger={<Button>Details</Button>} size='small'>
                <Header icon='archive' content='Archive Old Messages'/>
                <Modal.Content>
                  <Details event={event}/>
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
            </div>
        )}
      </ul>
      </div>
    )
  }
}

export default EventList;