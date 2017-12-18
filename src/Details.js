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
                  <Modal.Description>
                    <div className='modal-body'>
                      <ul>
                        <li>osoba 1</li>
                        <li>osoba 2</li>
                        <li>osoba 3</li>
                        <li>osoba 4</li>
                        <li>osoba 5</li>
                      </ul>
                    </div>
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