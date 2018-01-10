import React, { Component } from 'react'
import firebase from 'firebase'
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import SignOut from './SignOut';

class Auth extends Component {
    state = {
        user: null,
        showSignInForm: true
    };

    componentDidMount() {
        firebase.auth().onAuthStateChanged(
            user => this.setState({ user })
        )
    }

    toggleView = () => this.setState({ showSignInForm: !this.state.showSignInForm })


    render() {
        return (
            this.state.user
                ? this.props.children
                : (
                    <div>
                      { this.state.showSignInForm ?
                        <SignInForm toggleView={this.toggleView}/> :
                        <SignUpForm toggleView={this.toggleView}/>
                      }

                    </div>
                )


        )
    }
}

export default Auth