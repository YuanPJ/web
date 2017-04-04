import React, { Component } from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    // Bind handler here!
    this.tick = this.tick.bind(this);
  }

  tick() {
    // 只用 setState 去改變 state
    // 直接修改 this.state 是無法自動觸發變更的
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <div onClick={this.tick}>
        Clicks: {this.state.count}
      </div>
    );
  }
}