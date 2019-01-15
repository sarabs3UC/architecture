import React from 'react';
import Context from '../store/';
import { Message } from "../components/";

class RegisterPage extends React.PureComponent{
    constructor (props) {
        super(props);
        // update auth
        this.updateAuth = () => {
            this.setState(state => ({
                auth: !state.auth,
                message: !state.auth ? "User registerd!" : "User not registerd!"
            }))
        }

        this.state = {
            auth: false,
            updateAuth: this.updateAuth,
            message: "User not registerd!"
        }
    }
    render () {
            return (
                <Context.Provider value={this.state}>
                    <Context.Consumer>
                        {
                            state => <Message message={state.message} onClick={state.updateAuth} />
                        }
                    </Context.Consumer>
                </Context.Provider>
            )
    }
}

export default RegisterPage;