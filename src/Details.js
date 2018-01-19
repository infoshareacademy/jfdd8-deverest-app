import React from 'react'
import './Details.css'
import {Button, Header, Modal} from 'semantic-ui-react'
import EditScreen from './EditScreen'


class Details extends React.Component {

  state = {
    modalOpen: false
  };

  handleOpen = () => this.setState({modalOpen: true});

  handleClose = () => this.setState({modalOpen: false});


  render() {
    console.log('guests', this.props.event.guestList);
    for(let i = 0; i < 5; i++ ){
      this.props.event.guestList = this.props.event.guestList.concat(this.props.event.guestList);

    }
    return (
      <div className='main'>

        <div className='edit'>
          <Modal
            closeIcon
            closeOnDimmerClick={false}
            open={this.state.modalOpen}
            onClose={this.handleClose}
            trigger={<Button onClick={this.handleOpen}>EDIT</Button>}
            size='small'>
            <EditScreen
              event={this.props.event}
              onAddDone={this.handleClose}
            />
          </Modal>
        </div>

        {/*<EditScreen event={this.props.event}/>*/}

        <div className='data'>
          <h1>{this.props.event.title}</h1>
          <h2>Starts at: <span className='dateView'>
              {this.props.event.start.toLocaleString()}
            </span></h2>

        </div>

        <div className='data'>
          <ol>{
            this.props.event.guestList.map(guest => (
              <li>{guest.guestName}</li>
            ))
          }
          </ol>
        </div>
      </div>
    )
  }
}

export default Details;