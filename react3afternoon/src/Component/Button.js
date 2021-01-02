import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div className="buttons-container">
        <button className="shifters" onClick={this.props.shiftBack}>
          {"<"} Previous
        </button>
        <div className="center-buttons-container">
          <button
            className="center-buttons"
            onClick={this.props.centerButtonHandler}
          >
            Edit
          </button>
          <button
            className="center-buttons"
            onClick={this.props.centerButtonHandler}
          >
            Delete
          </button>
          <button
            className="center-buttons"
            onClick={this.props.centerButtonHandler}
          >
            New
          </button>
        </div>
        <button className="shifters" onClick={this.props.shiftNext}>
          Next {">"}
        </button>
      </div>
    );
  }
}

export default Button;
