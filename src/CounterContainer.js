import React, { Component } from 'react';
import Counter from './Counter';

export default class CounterContainer extends Component {
  state = { counter: 1 };
  increment = () => {
    this.setState(state => {
      return { counter: this.state.counter + 1 };
    });
  };
  decrement = () => {
    this.setState(state => {
      return { counter: this.state.counter - 1 };
    });
  };
  reset = () => {
    this.setState({ counter: 0 });
  };

  render() {
    const { counter } = this.state;
    return <Counter onIncrement={this.increment} onDecrement={this.decrement} onReset={this.reset} counter={counter} />;
  }
}
