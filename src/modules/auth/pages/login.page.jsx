import React from 'react';
import Context from '../store/';

class LoginPage extends React.Component{
    render () {
        return (
            <Context.Consumer>
                {
                    state => state.auth ? <p>User logged in!</p> : <p>not logged in!</p>
                }
            </Context.Consumer>
        )
    }
}

export default LoginPage;