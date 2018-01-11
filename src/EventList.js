import React from 'react'

import { BrowserRouter as Router, Link } from 'react-router-dom'
import {Tab, Modal, Button, Icon, Header, List, Image} from 'semantic-ui-react'
import Details from './Details'

class EventList extends React.Component {


  render() {
    return (
      <div>
      <ul>
        {this.props.events.map(
          event=>
            <div key={event.id}>

              {/*<List divided verticalAlign='middle'>*/}
                {/*<List.Item>*/}
                  {/*<List.Content floated='right'>*/}
                    {/*<Button>*/}
                      {/*Add*/}
                      {/*/!*<Modal closeIcon closeOnDimmerClick={false} trigger={<Button>Details</Button>} size='small'>*!/*/}
                        {/*/!*<Details event={event}/>*!/*/}
                      {/*/!*</Modal>*!/*/}
                    {/*</Button>*/}
                  {/*</List.Content>*/}
                  {/*<Image avatar src='/assets/images/avatar/small/lena.png' />*/}
                  {/*<List.Content>*/}
                    {/*{event.title}*/}
                  {/*</List.Content>*/}
                {/*</List.Item>*/}
              {/*</List>*/}
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