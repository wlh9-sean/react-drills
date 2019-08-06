import React, { Component } from "react";
import NewTask from './components/NewTask'
import List from './components/List'
import Todo from './components/Todo'


class App extends Component {
  constructor(){
    super();

    this.state = {
      list: []
    }
  }

  handleAddTask = (task) => {
    this.setState({list: [...this.state.list, task]})
  }

  render() {
    return (
      <div className="App">
        <h1>My To-Do List:</h1>
        <NewTask add={this.handleAddTask}/>
        <List tasks={this.state.list}/>
      </div>
    );
  }
}

export default App;
