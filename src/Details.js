import React from 'react'
import './Details.css'
import { Button, Header, Modal } from 'semantic-ui-react'



class Details extends React.Component {
  render() {
    return (
        <div className='main'>

          <div className='edit'>
            <Button style={{borderRadius: '50px', backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white'}}>Edit</Button>
          </div>
          <div className='data'>
            <h1>John's House Warming Party With Hookers</h1>
            <h2>Starts at: <span className='dateView'>{new Date().toLocaleString()}</span></h2>
            <div className='modal'>
              <Modal size='tiny' closeIcon closeOnDimmerClick={false} trigger={<Button style={{borderRadius: '50px', backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white'}}>Show Guests</Button>}>
                {/*<Modal.Header><span id='modal-header-span'>Guest List</span></Modal.Header>*/}
                <Modal.Content image style={{background: 'linear-gradient(to bottom, rgba(255,102,0,0.7), rgba(0,0,0,0.8))'}}>
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