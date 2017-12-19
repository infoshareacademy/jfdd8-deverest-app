import React from 'react'
import './Details.css'
import { Button, Header, Modal } from 'semantic-ui-react'
class Details extends React.Component {
  render() {
    return (
        <div className='main'>

          <div className='edit'>
            <Button color='orange'>Edit</Button>
          </div>
          <div className='data'>
            <h1>John's House Warming Party With Hookers</h1>
            <h2>Starts at: ............................</h2>
            <div className='modal'>
              <Modal closeIcon closeOnDimmerClick={false} trigger={<Button color='orange'>Show Guests</Button>}>
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
                        <li>osoba 6</li>
                        <li>osoba 7</li>
                        <li>osoba 8</li>
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