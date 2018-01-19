import React from 'react'
import './Details.css'
import {Button, Header, Modal} from 'semantic-ui-react'
import EditScreen from './EditScreen'


class Details extends React.Component {

  render() {
    return (
      <div>
        <Modal.Description>
          <Header>Starts at: <span className='dateView'>
              {this.props.event.start.toLocaleString()}
            </span>
          </Header>
        </Modal.Description>
          <ol>{
            this.props.event.guestList.map(guest => (
              <li>{guest.guestName}</li>
            ))
          }
          </ol>
        {/*</div>*/}
      </div>
    )
  }
}

export default Details;