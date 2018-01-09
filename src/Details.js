import React from 'react'
import './Details.css'
import { Button, Header, Modal } from 'semantic-ui-react'



class Details extends React.Component {
  render() {
    return (
        <div className='main'>

          <div className='edit'>
            <Button color='black'>Edit</Button>
          </div>
          <div className='data'>
            <h1>{this.props.event.title}</h1>
            <h2>Starts at: <span className='dateView'>{
              this.props.event.start.toLocaleString()
            }</span></h2>
            <div className='modal'>
              <Modal closeIcon closeOnDimmerClick={false} trigger={<Button color='black'>Show Guests</Button>}>
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
              </Modal>
            </div>
          </div>

        </div>
    )
  }
}

export default Details;