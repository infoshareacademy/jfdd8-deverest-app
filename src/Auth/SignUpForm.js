import React, {Component} from 'react'
import {Button, Input, Container, Message} from 'semantic-ui-react';
import Logo from '../picture/logo.png';
import './WelcomeScreen.css'
import { signUp } from "../state/auth";
import { connect } from 'react-redux'

class SignUpForm extends Component {

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

    this.props.signUp(
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
                placeholder="E-mail Address"
                fluid
              />
              <br/>
              <br/>
              <Input
                name="password"
                onChange={this.handleChange}
                type="password"
                placeholder="Set A Password"
                fluid
              />
              <br/>
              <br/>
              <Button>Sign Up</Button>
              <br/><br/>
            </form>
          </Container>
          <a className="WelcomeScreen-CreateAccount" onClick={this.props.toggleView}>Login</a>
        </div>
      </div>
    )
  }
}

export default connect(
  null,
  { signUp }
)(SignUpForm)