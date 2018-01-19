import React from 'react'
import { connect } from 'react-redux'

import {BrowserRouter as Router, Link} from 'react-router-dom'
import {Tab, Modal, Button, Icon, Header, List, Image} from 'semantic-ui-react'
import Details from './Details'
import firebase from 'firebase'
import EditScreen from "./EditScreen";

class EventList extends React.Component {

  state = {
    editModalOpen: false,
    tasks: []
  };

  handleOpenEdit = () => this.setState({editModalOpen: true});

  handleCloseEdit = () => this.setState({editModalOpen: false});

  componentDidMount() {
    const uid = firebase.auth().currentUser.uid;
    firebase.database().ref('/events/' + uid).on(
      'value',
      snapshot => {
        const snapshotValue = snapshot.val();
        const tasks = Object.entries(snapshotValue || {}).map(
          ([id, value]) => ({id, ...value})
        );

        this.setState({
          tasks
        })
      }
    )
  }

  handleRemoveClick = event => {
    const taskId = event.currentTarget.dataset.taskId;
    const uid = firebase.auth().currentUser.uid;
    firebase.database().ref('/events/' + uid + '/' + taskId).remove()
  };

  render() {
    return (
      <div>
        {
          this.props.searchPhrase && <p style={{padding: '5px 0 0 10px'}}>Searched phrase:  <span style={{color: 'green', padding: '5px'}}>"{this.props.searchPhrase}"</span></p>
        }

        <List divided verticalAlign='middle'>
          {this.props.events.map(
            event => {
              const matches = event.title.match(/#(\w+)/);
              const imageName = (matches && matches[1]) || 'default';
              return (
                <List.Item key={event.id}>
                  <List.Content floated='right'>

                    <Modal closeIcon closeOnDimmerClick={false} trigger={<Button>Details</Button>} size='small'>
                      <Modal.Header>
                        {event.title}
                      </Modal.Header>
                      <Modal.Content scrolling>
                        <Details event={event}/>
                      </Modal.Content>
                      <Modal.Actions>
                        <Modal
                          closeIcon
                          closeOnDimmerClick={false}
                          open={this.state.editModalOpen}
                          onClose={this.handleCloseEdit}
                          trigger={<Button onClick={this.handleOpenEdit}>EDIT</Button>}
                          size='small'>
                          <EditScreen
                            event={event}
                            onAddDone={this.handleCloseEdit}
                          />
                        </Modal>
                      </Modal.Actions>

                    </Modal>
                    <Button

                      data-task-id={event.id}
                      onClick={this.handleRemoveClick}
                      icon='trash'

                    >

                    </Button>

                  </List.Content>
                  <Image avatar src={process.env.PUBLIC_URL + '/images/' + imageName + '.png'}/>
                  <List.Content>
                    {event.title}
                  </List.Content>
                </List.Item>
              )
            }

          )}
        </List>
      </div>
    )
  }
}

export default connect(
  state => ({
    searchPhrase: state.searching.searchPhrase
  })
)(EventList)