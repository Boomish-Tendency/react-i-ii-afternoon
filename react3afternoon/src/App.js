import React, { Component } from "react";
import "./reset.css";
import "./App.css";
import Container from "./Component/Container";
import Button from "./Component/Button";
import data from "./data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: data,
      userId: 0,
    };
  }

  shiftNext = () => {
    this.setState({
      userId: this.state.userId + 1,
    });
  };

  shiftBack = () => {
    this.setState({
      userId: this.state.userId - 1,
    });
  };

centerButtonHandler = () => {
  alert('This button is non-functional.  Please bear with us as we are under construction.')
}

  render() {
    const { data, userId } = this.state;

    return (
      <div>
        <header>
          <h2>Home</h2>
        </header>
        <body>
          <div className="content">
            <Container dataObject={data[userId]} />
            <Button shiftNext={this.shiftNext} shiftBack={this.shiftBack} centerButtonHandler={this.centerButtonHandler} />
          </div>
        </body>
      </div>
    );
  }
}

export default App;
