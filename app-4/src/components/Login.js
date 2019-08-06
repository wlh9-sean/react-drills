import React, {Component} from 'react'

export default class Login extends Component {
    constructor(){
        super();

        this.state = {
            username: '',
            password: ''
        }

    }

    handleUsername = (value) => {
        this.setState ({
            username: value
        })
    }

    handlePassword = (value) => {
        this.setState ({
            password: value
        })
    }

    handleLogin = () => {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render(){
        console.log(this.state)
        return(
            <div>
                <input type='text'  onChange ={(event) => this.handleUsername(event.target.value)}/>
                <input type='text' onChange={(event) => this.handlePassword(event.target.value)}/>
                <button onClick={this.handleLogin}>Login</button>
            </div>

        )
    }
}