import React, { Component } from 'react'

import './SignOut.css'
import firebase from 'firebase'

class SignOut extends Component {

    state = {
        user: null
    };

    componentDidMount() {
        firebase.auth().onAuthStateChanged(
            user => this.setState({ user })
        )
    }

    render() {
        return (
            <div>
                {
                    this.state.user ?
                        <button className='signOut-button' onClick={() => firebase.auth().signOut()}>
                          SIGN OUT
                        </button> : null
                }
            </div>


        )
    }
}

export default SignOut