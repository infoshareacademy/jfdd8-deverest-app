import React, { Component } from 'react';

import './WelcomeScreen.css'

class WelcomeScreen extends Component {
  render() {
    return (
      <div className="WelcomeScreen-container">
        <div className="WelcomeScreen-gradient">
        <button className="WelcomeScreen-button">Username</button>
        <button className="WelcomeScreen-button">Password</button>
        <button className="WelcomeScreen-GetStarted">Get started</button>

        <a href="#" className="WelcomeScreen-CreateAccount">Create account</a>
        </div>
      </div>
    )

  }
}

export default WelcomeScreen;