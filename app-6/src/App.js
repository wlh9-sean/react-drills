import React, { Component } from "react";
import Todo from './components/Todo'

class App extends Component {
  constructor(){
    super();

    this.state = {
      list: [],
      input: ''
    }
  }

  handleInputChange = (value) => {
    this.setState({
      input: value
    })
  }

  handleAddTask = () => {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    })
  }


  render() {
    let list = this.state.list.map((element, i) => {
      return <Todo key={i} task={element} />
    })
    return (
      <div className="App">
        <input value={this.state.input} placeholder="Enter New Task" onChange={(event) => this.handleInputChange(event.target.value)} />
        <button onClick={this.handleAddTask}>Add</button>
        {list}
      </div>
    );
  }
}

export default App;
