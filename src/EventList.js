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
              <Modal closeIcon closeOnDimmerClick={false} trigger={<Button>Details</Button>} size='small'>
                <Modal.Content>
                  <Details event={event}/>
                </Modal.Content>
                {/*<Modal.Actions>*/}
                  {/*<Button onClick={this.handleClose} color='red' inverted>*/}
                    {/*<Icon name='checkmark'/> CLOSE*/}
                  {/*</Button>*/}
                {/*</Modal.Actions>*/}
              </Modal>
            </div>
        )}
      </ul>
      </div>
    )
  }
}

export default EventList;