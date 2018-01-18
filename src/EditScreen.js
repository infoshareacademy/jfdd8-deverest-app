import React from 'react'
import {Button, Form, Input, Divider} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import firebase from 'firebase'
import './AddScreen.css'


class EditScreen extends React.Component {

  state = {
    partyInputValue: this.props.event.title,
    guestsNames:  this.props.event.guestList || [],
    startDate: moment(this.props.event.end),
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const userUid = firebase.auth().currentUser.uid;
    firebase.database().ref('/events/' + userUid + '/' + this.props.event.id).set({
      title: this.state.partyInputValue,
      start: this.state.startDate.format(),
      end: this.state.startDate.format(),
      guestList: this.state.guestsNames
    });

    this.setState({
      taskInputValue: ''
    });
    this.props.onAddDone()
  };

  addGuestsNames = () => {
    this.setState({
      guestsNames: this.state.guestsNames.concat({
        id: this.state.guestsNames.map(
          event => event.id
        ).reduce(
          (biggest, next) => Math.max(biggest, next),
          0
        ) + 1,
        guestName: this.state.namesInputValue
      }),
      namesInputValue: ''
    });
  };


  handleTimeChange = (date) => {
    this.setState({
      startDate: date
    });
  };

  handlePartyNameChange = item => {
    this.setState({
      partyInputValue: item.target.value
    })
  };

  handleGuestsNamesChange = item => {
    this.setState({
      namesInputValue: item.target.value
    })
  };

  handleDeleteClick = event => {
    console.log(event.target.dataset.taskId);
    this.setState({
      guestsNames: this.state.guestsNames.filter(
        task => task.id !== parseInt(event.target.dataset.taskId, 10)
      )
    })
  };

  render () {
    return (
      <div className="AddScreen-container">
        <div className="dark-theme">
        <Form onSubmit={this.handleSubmit}>

          <div><label className="AddScreen-PartyName">PARTY TITLE</label><br /><br />
            <Input className="AddScreen-PartyInput"
                   size='large'
                   value={this.state.partyInputValue}
                   onChange={this.handlePartyNameChange}
/>



          </div>
          <div><br/><br/>
            <Divider hidden/>
            <label className="AddScreen-PartyName">PICK A DATE</label><br /><br />
            <DatePicker className="AddScreen-DatePicker"
                        selected={this.state.startDate}
                        onChange={this.handleTimeChange}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="LLL"
            /><br/>
          </div>
          <div><br/>
            <Divider hidden/>
            <label className="AddScreen-PartyName">ADD GUEST</label><br /><br />
            <Input className="AddScreen-GuestsInput"
                   size='large'
                   value={this.state.namesInputValue}
                   onChange={this.handleGuestsNamesChange}
                   placeholder='Write your guest name...'
            />
            <div>
            <Input onClick={this.addGuestsNames}
                   className="AddScreen-AddBtn"
                   type="button"
                   value="add"
            />
            </div>
          </div>
          <ul>
            {
              this.state.guestsNames.map(
                task => (
                  <li key={task.id}
                      className="AddScreen-List">
                    {task.guestName}
                    <button
                      className="Delete-Btn"
                      data-task-id={task.id}
                      onClick={this.handleDeleteClick}
                    >
                      delete</button>
                  </li>
                )
              )
            }
          </ul>
          <br/><br/>
          <Button
            color="black"
            type='submit'>Save Event
          </Button>
          <br/><br/>
        </Form>
        </div>
      </div>

    )
  }
}

export default EditScreen;