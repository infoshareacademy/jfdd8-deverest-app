import React from 'react'
import {Button, Form, Input} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import './AddScreen.css'


class EditScreen extends React.Component {

  state = {
    partyInputValue: this.props.event.title,
    guestsNames:  this.props.event.guestList,
    // startDate: this.props.event.end,



  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addEvent(
      this.state.partyInputValue,
      this.state.startDate,
      this.state.guestsNames
    );
    this.setState({
      taskInputValue: ''
    })
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
        <Form onSubmit={this.handleSubmit}>
          <div><label className="AddScreen-PartyName">PARTY TITLE</label><br /><br />
            <Input className="AddScreen-PartyInput"
                   size='large'
                   value={this.state.partyInputValue}
                   onChange={this.handlePartyNameChange}
/>



          </div>
          <div><label className="AddScreen-PartyName">PICK A DATE</label><br /><br />
            <DatePicker className="AddScreen-DatePicker"
                        selected={this.state.startDate}
                        onChange={this.handleTimeChange}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="LLL"
            /><br/>
          </div>
          <div><label className="AddScreen-PartyName">ADD GUEST</label><br /><br />
            <Input className="AddScreen-GuestsInput"
                   size='large'
                   value={this.state.namesInputValue}
                   onChange={this.handleGuestsNamesChange}
                   placeholder='Write your guest name...'
            />

            <Input onClick={this.addGuestsNames}
                   type="button"
                   value="+"
            />
          </div>
          <ul>
            {
              this.state.guestsNames.map(
                task => (
                  <li key={task.id}
                      className="AddScreen-List">
                    {task.guestName}
                    <button
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
          <Button color="black"
                  type='submit'>Save
          </Button>
        </Form>
      </div>

    )
  }
}

export default EditScreen;