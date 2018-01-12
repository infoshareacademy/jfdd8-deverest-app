import React from 'react'
import './Details.css'
import {Button, Header, Modal} from 'semantic-ui-react'
import EditScreen from './EditScreen'


class Details extends React.Component {
  render() {
    return (
      <div className='main'>

        <div className='edit'>
          <Modal size='tiny' closeIcon closeOnDimmerClick={false}
                 trigger={<Button color='black'>EDIT</Button>}>
            <Modal.Description>
              <div className='modal-body'>
                <EditScreen event={this.props.event}/>
              </div>
            </Modal.Description>
          </Modal>
        </div>


            <div className='data'>
          <h1>{this.props.event.title}</h1>
          <h2>Starts at: <span className='dateView'>
              {this.props.event.start.toLocaleString()}
            </span></h2>
          <div className='modal'>
            <Modal size='tiny' closeIcon closeOnDimmerClick={false}
                   trigger={<Button color='black'>Show Guests</Button>}>
              <Modal.Description>
                <div className='modal-body'>
                  <ul>
                    {Object.entries(this.props.event.guestList).map(
                      ([id, value]) => ({
                        id, ...value
                      })
                    ).map(
                      guest => (
                        <li>{guest.guestName}</li>
                      )
                    )}
                  </ul>
                </div>
              </Modal.Description>
            </Modal>
          </div>
        </div>z

      </div>
    )
  }
}

export default Details;