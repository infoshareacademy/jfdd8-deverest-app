import React, { Component } from 'react';

import './WelcomeScreen.css'

class WelcomeScreen extends Component {
  render() {
    return (
      <div className="WelcomeScreen-container">
        <div className="WelcomeScreen-gradient">
        <input
          className="WelcomeScreen-button"
          type="text"
          name=""
          placeholder=""
        />
        <input
          className="WelcomeScreen-button"
          type="password"
          name=""
        />
        <input
          className="WelcomeScreen-GetStarted"
          type="submit"
          placeholder="Password"
        />
        <label>Get started</label>
        <a href="#" className="WelcomeScreen-CreateAccount">Create account</a>
        </div>
      </div>
    )

  }
}

export default WelcomeScreen;