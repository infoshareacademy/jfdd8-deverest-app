import React, { Component } from 'react'
import firebase from 'firebase'
import { Button, Input, Container } from 'semantic-ui-react';
import Logo from '../picture/logo.png';
import './WelcomeScreen.css'

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
        return (
            <div className="WelcomeScreen-container">
                <div className="WelcomeScreen-gradient">
                    <img src={Logo} alt="logo" className="logo-responsive"/>
                    <Container text>
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

export default SignUpForm