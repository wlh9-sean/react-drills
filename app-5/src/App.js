import React, { Component } from "react";
import Image from './components/Image'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Image myImage={"https://http.cat/409"}/>
      </div>
    );
  }
}

export default App;
