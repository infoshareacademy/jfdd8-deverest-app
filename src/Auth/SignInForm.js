import React, { Component } from 'react'
import firebase from 'firebase'
import { Button, Input, Container } from 'semantic-ui-react';

import Logo from '../picture/logo.png';
import './WelcomeScreen.css'

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

export default SignInForm