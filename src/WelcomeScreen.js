import React, { Component } from 'react';
import Logo from './logo.png';

import './WelcomeScreen.css'

class WelcomeScreen extends Component {
  render() {
    return (
      <div className="WelcomeScreen-container">
        <div className="WelcomeScreen-gradient">
          <img src={Logo} alt="logo" className="img-responsive"/>
          <input
          className="WelcomeScreen-button"
          type="text"
          name=""
          placeholder="Username"
        />
        <input
          className="WelcomeScreen-button"
          type="password"
          name=""
          placeholder="Password"
        />
        <input
          className="WelcomeScreen-GetStarted"
          type="submit"
        />
        <a href="#" className="WelcomeScreen-CreateAccount">Create account</a>
        </div>
      </div>
    )

  }
}

export default WelcomeScreen;