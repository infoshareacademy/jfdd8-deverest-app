import React from 'react'
import {Button, Form, Input} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import './AddScreen.css'


class AddScreen extends React.Component {
  state = {
    partyInputValue: '',
    guestsInputValue: '',
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
        content: this.state.partyInputValue + ' ' + this.state.guestsInputValue
      }),
      partyInputValue: '',
      guestsInputValue: '',
    });
  };

  addGuestsNames = () => {
    this.setState({
      guestsNames: this.state.guestsNames.concat({
        id: this.state.guestsNames.map(
          item => item.id
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

  handlePartyNameChange = event => {
    this.setState({
      partyInputValue: event.target.value
    })
  };

  handleGuestsNumberChange = event => {
    this.setState({
      guestsInputValue: event.target.value
    })
  };

  handleGuestsNamesChange = event => {
    this.setState({
      namesInputValue: event.target.value
    })
  };

  render() {
    return (
      /* Adding party title and guests number */
      <div>
        <Form onSubmit={this.addEvent}>
          <Form.Group widths='equal'>

            <Form.Field>
              <label>Name your party</label>
              <Input size='small'
                     value={this.state.partyInputValue}
                     onChange={this.handlePartyNameChange}
                     placeholder='Write party name here...'/>
            </Form.Field>

            <Form.Field>
              <label>Number of guests</label>
              <Input size='small'
                     value={this.state.guestsInputValue}
                     onChange={this.handleGuestsNumberChange}
                     placeholder='Write number of guests here...'/>
            </Form.Field>
          </Form.Group>
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

          <Button
            type='submit'>Save
          </Button>
        </Form>



        <Form onSubmit={this.addGuestsNames}>

          <Form.Field>
            <label>Add your guest here</label>
            <Input
              size='small'
              value={this.state.namesInputValue}
              onChange={this.handleGuestsNamesChange}
              placeholder='Write your guest name...'/>
          </Form.Field>
          <Button
            type='submit'>Add
          </Button>

          <ul>
            {
              this.state.guestsNames.map(
                item => (
                  <li key={item.id}>
                    {item.content}
                  </li>
                )
              )
            }
          </ul>
        </Form>

      </div>
    )
  }
}

export default AddScreen;