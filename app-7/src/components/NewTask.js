import React, {Component} from 'react'

export default class NewTask extends Component {
    constructor(){
        super();

        this.state = {
            input: ''
        }
    }

    handleInputChange = (value) => {
        this.setState({input: value})
    }

    handleAdd = () => {
        this.props.add(this.state.input)
        this.setState({input: ''})
    }

    render(){
        return(
            <div>
                <input value={this.state.input} placeholder="Enter New Task" onChange={(event) => this.handleInputChange(event.target.value)} />
                <button onClick={this.handleAdd}>Add</button>
            </div>
        )
    }
}