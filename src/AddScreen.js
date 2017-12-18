import React from 'react'
import {Button, Form, Input} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import './AddScreen.css'


class AddScreen extends React.Component {
  state = {
    partyInputValue: '',
    namesInputValue: '',
    events: [],
    guestsNames: [],
    startDate: moment()
  };

  addEvent = () => {
    this.setState({
      events: this.state.events.concat({
        id: this.state.events.map(
          item => item.id
        ).reduce(
          (biggest, next) => Math.max(biggest, next),
          0
        ) + 1,
        content: this.state.partyInputValue
      }),
      partyInputValue: '',
    });
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
        content: this.state.namesInputValue
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

  render() {
    return (
      /* Adding party title and guests number */
      <div>
        <Form onSubmit={this.addEvent}>
          <label>Name your party</label>
          <Input size='medium'
                 value={this.state.partyInputValue}
                 onChange={this.handlePartyNameChange}
                 placeholder='Write party name here...'
          />

          <ul>
            {
              this.state.events.map(
                item => (
                  <li key={item.id}>
                    {item.content}
                  </li>
                )
              )
            }
          </ul>

          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleTimeChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="LLL"
          /><br/>

          <label>Add your guest here</label>
          <Input
            size='medium'
            value={this.state.namesInputValue}
            onChange={this.handleGuestsNamesChange}
            placeholder='Write your guest name...'
          />

          <Input onClick={this.addGuestsNames}
                 type="button"
                 value="Add"
          />

          <ul>
            {
              this.state.guestsNames.map(
                task => (
                  <li key={task.id}>
                    {task.content}
                    <button type="button"
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
            type='submit'>Save
          </Button>
        </Form>


      </div>
    )
  }
}

export default AddScreen;