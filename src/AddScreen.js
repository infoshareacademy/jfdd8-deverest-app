import React from 'react'
import {Button, Form} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import moment from 'moment';


class AddScreen extends React.Component {
  state = {
    taskInputValue: '',
    events: [
      {
        id: 1,
        content: 'Lucy\'s sweet 16th birthday!',
      },
      {
        id: 2,
        content: 'Gary\'s Supprise Party',
      },
      {
        id: 3,
        content: 'My "first" Wedding',
      }
    ],
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
        content: this.state.taskInputValue
      }),
      taskInputValue: ''
    });
  };

  handleTimeChange = (date) => {
    this.setState({
      startDate: date
    });
  };

  handleChange = event => {
    this.setState({
      taskInputValue: event.target.value
    })
  };

  render() {
    return (
      <div>

        <Form onSubmit={this.addEvent}>
          <Form.Field>
            <label>Name your party</label>
            <input
              value={this.state.taskInputValue}
              onChange={this.handleChange}
              placeholder='Put your party name here...'/>
          </Form.Field>

          <Button
            type='submit'
          >Submit</Button>
        </Form>

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
        />
      </div>
    )
  }
}

export default AddScreen;