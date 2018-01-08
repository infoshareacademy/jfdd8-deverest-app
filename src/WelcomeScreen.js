import React, {Component} from 'react';
import { Button, Input, Container, Icon } from 'semantic-ui-react';

import Logo from './logo.png';

import './WelcomeScreen.css'

class WelcomeScreen extends Component {
  state = {
    username: '',
    email: '',
    password: '',
  };

  onSubmit = async () => {
    const response = await this.props.mutate({
      variables: this.state,
    });

    console.log(response);
  };

  onChange = e => {
    const { name, value } = e.target;
    // name = "email";
    this.setState({ [name]: value });
  };

  render() {
    const { username, email, password } = this.state;
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
            <Button onClick={this.onSubmit}>Get Started</Button>
            <br/><br/>
          </Container>
          <a href="#" className="WelcomeScreen-CreateAccount">Create account</a>
        </div>
      </div>
    )
  }
}
export default WelcomeScreen;