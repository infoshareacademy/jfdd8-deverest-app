import React, { Component } from 'react'
import firebase from 'firebase'
import { Button, Input, Container } from 'semantic-ui-react';

import Logo from '../logo.png';
import '../WelcomeScreen.css'

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
                                placeholder="E-mail"
                                fluid
                            />
                            <br/>
                            <br/>
                            <Input
                                name="password"
                                onChange={this.handleChange}
                                type="password"
                                placeholder="Password"
                                fluid
                            />
                            <br/>
                            <br/>
                            <Button>Get Started</Button>
                            <br/><br/>
                        </form>
                    </Container>
                    <a href="#" className="WelcomeScreen-CreateAccount">Create account</a>
                </div>
            </div>
        )
    }
}

export default SignInForm