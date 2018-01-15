import React, { Component } from 'react'
import {Button, Icon} from 'semantic-ui-react';

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
                      <Button className='signOut-button' onClick={() => firebase.auth().signOut()} animated='vertical'>
                        <Button.Content hidden>Goodbye!</Button.Content>
                        <Button.Content visible>
                            Sign Out
                        </Button.Content>
                      </Button> : null
                }
            </div>


        )
    }
}

export default SignOut