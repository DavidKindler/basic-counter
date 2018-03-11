import React, { Component } from 'react';

export default class Counter extends Component {
  render() {
    const { onIncrement, onDecrement, onReset, counter } = this.props;
    return (
      <section className="Counter">
        <h1>Count: {counter}</h1>
        <button onClick={onIncrement} className="full-width">
          Increment
        </button>
        <button onClick={onDecrement} className="full-width">
          Decrement
        </button>
        <button onClick={onReset} className="full-width">
          Reset
        </button>
      </section>
    );
  }
}
