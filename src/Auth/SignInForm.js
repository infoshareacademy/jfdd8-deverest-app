import React, { Component } from 'react'
import firebase from 'firebase'

class SignInForm extends Component {

  state = {
    email: '',
    password: ''
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleSubmit = event => {
    event.preventDefault();

    firebase.auth().signInWithEmailAndPassword(
      this.state.email,
      this.state.password
    )
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="WelcomeScreen-container">
        <div className="WelcomeScreen-gradient">
          <img src={Logo} alt="logo" className="logo-responsive"/>
          <Container text>
            <Input
              name="username"
              onChange={this.onChange}
              value={username}
              placeholder="Username"
              fluid
            />
            <br/>
            <br/>
            <Input
              name="password"
              onChange={this.onChange}
              value={password}
              type="password"
              placeholder="Password"
              fluid
            />
            <br/>
            <br/>
            <Button onClick={this.onSubmit}>Get Started</Button>
            <br/><br/>
          </Container>
          <a href="#" className="WelcomeScreen-CreateAccount">Create account</a>
        </div>
      </div>
    )
  }
}

export default SignInForm