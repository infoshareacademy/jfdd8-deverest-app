import React from 'react'

class AddScreen extends React.Component {
  render() {
    return (
      <form class="ui form">
        <div class="field">
          <label>Name your party</label>
          <input placeholder="Name your party" />
        </div>
        <div class="field">
          <label>Number of guests</label>
          <input placeholder="Number of guests" />
        </div>
        <button type="submit" class="ui button" role="button">Save</button>
      </form>
    )
  }
}

export default AddScreen;