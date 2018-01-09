import React from 'react'
// import { Button } from 'semantic-ui-react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import {Tab, Modal, Button, Icon, Header, List, Image} from 'semantic-ui-react'
import Details from './Details'

class EventList extends React.Component {


  render() {
    return (
      <div>
        <List divided verticalAlign='middle'>
          <List.Item>
            {this.props.events.map(
              event =>
                <List.Content
                key={event.id}>
                  <Image avatar src='/assets/images/avatar/small/lena.png' floated='left'/>
                  <li>{event.title}</li>
                  {/*<Button basic color='teal' as={Link} to={'/details'}>Details</Button>*/}
                  <Modal trigger={<List.Content floated='right'>
                    <Button>Details</Button>
                  </List.Content>} size='large'>
                    <Modal.Content>
                      <Details event={event}/>
                    </Modal.Content>
                    <Modal.Actions>
                      <Button onClick={this.handleClose} color='red' inverted>
                        <Icon name='checkmark'/> CLOSE
                      </Button>
                    </Modal.Actions>
                  </Modal>
                </List.Content>
            )}
          </List.Item>
        </List>
      </div>
    )
  }
}

export default EventList;