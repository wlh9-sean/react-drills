import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
    constructor(){
    super();

    this.state = {
      food: ['spagetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
  }

  render() {
    let foodsToDisplay = this.state.food.map((e, i) => {
      return <h2 key = {i}>{e}</h2>
    })
    return (
      <div className="App">
        {foodsToDisplay}
      </div>
    );
  }
}

export default App;
