import React from 'react'
import { Button, Form} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import moment from 'moment';



class AddScreen extends React.Component {

  state = {
    startDate: moment()
  };

  handleChange = (date) => {
    this.setState({
      startDate: date
    });
  };
  render() {
    return (
      <div>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>

        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
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