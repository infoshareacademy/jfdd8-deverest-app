import React, { Component } from 'react'
import firebase from 'firebase'

class SignUpForm extends Component {

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

    firebase.auth().createUserWithEmailAndPassword(
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
              onChange={this.handleChange()Change}
              value={username}
              placeholder="Username"
              fluid
            />
            <br/>
            <br/>
            <Input
              name="password"
              onChange={this.handleChange}
              value={password}
              type="password"
              placeholder="Password"
              fluid
            />
            <br/>
            <br/>
            <Button onClick={this.handleSubmit}>Create account</Button>
            <br/><br/>
          </Container>
        </div>
      </div>
    )
  }
}

export default SignUpForm