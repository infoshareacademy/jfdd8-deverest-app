import React, {Component} from 'react'
import {Button, Input, Container, Message} from 'semantic-ui-react';
import { signIn } from "../state/auth";
import { connect } from 'react-redux'

import Logo from '../picture/logo.png';
import './WelcomeScreen.css'

class SignInForm extends Component {

  state = {
    email: '',
    password: '',
    error: null
  };

  handleChange = (event, { name, value }) => {
    this.setState({
      [event.target.name || name]: event.target.value || value
    })
  };

  handleSubmit = event => {
    event.preventDefault();

    const { email, password } = this.state;

    this.props.signIn(
      email,
      password,
    ).catch(
      error => this.setState({
        error: error.message
      })
    )
  };

  render() {
    return (
      <div className="WelcomeScreen-container">
        <div className="WelcomeScreen-gradient">
          <img src={Logo} alt="logo" className="logo-responsive"/>
          <Container text>
            <Message negative hidden={this.state.error === null}>
              <p>{this.state.error}</p>
            </Message>
            <form
              onSubmit={this.handleSubmit}
            >
              <Input
                name="email"
                onChange={this.handleChange}
                placeholder="Your e-mail"
                fluid
              />
              <br/>
              <br/>
              <Input
                name="password"
                onChange={this.handleChange}
                type="password"
                placeholder="Your password"
                fluid
              />
              <br/>
              <br/>
              <Button>Get Started</Button>
              <br/><br/>
            </form>
          </Container>
          <a className="WelcomeScreen-CreateAccount" onClick={this.props.toggleView}>Create account</a>
        </div>
      </div>
    )
  }
}

export default connect(
  null,
  { signIn }
)(SignInForm)