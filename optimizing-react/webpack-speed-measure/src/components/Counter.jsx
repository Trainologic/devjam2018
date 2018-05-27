import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incDec = (delta) => {
    this.setState({
      count: this.state.count + delta,
    })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.incDec(-1)}>-</button>
        <span> {this.state.count} </span>
        <button onClick={() => this.incDec(1)}>+</button>
      </div>
    )
  }
}

export default Counter;
