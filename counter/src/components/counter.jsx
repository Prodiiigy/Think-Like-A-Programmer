import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, pevState) {}

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn. btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let Classes = "badge m-2 badge-";
    Classes += this.props.counter.value === 0 ? "warning" : "primary";
    return Classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

/**
 * renderTag() {
    if (this.state.tags.length === 0) return <p>Out of Stock!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
 */
