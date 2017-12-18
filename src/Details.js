import React from 'react'
import './Details.css'
// import { Button } from 'semantic-ui-react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
class Details extends React.Component {
  render() {
    return (
        <div className='main'>

          <div className='edit'>
            <Button primary>Edit</Button>
          </div>

          <div className='data'>
            <h1>Party Name</h1>
            <div className='modal'>
              <Modal trigger={<Button>Show Guests</Button>}>
                <Modal.Header><span id='modal-header-span'>Guest List</span></Modal.Header>
                <Modal.Content image>
                  <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
                  <Modal.Description>
                    <Header>Default Profile Image</Header>
                    <p>We've found the following gravatar image associated with your e-mail address.</p>
                    <p>Is it okay to use this photo?</p>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </div>
          </div>

        </div>
    )
  }
}

export default Details;