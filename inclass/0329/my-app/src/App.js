import React, { Component } from 'react';
//import logo from './logo.svg';
import HelloWorld from './HelloWorld';
import Counter from './counter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld />
        <HelloWorld text={true} />
        <HelloWorld text='B' />
        <Counter />
      </div>
    );
  }
}

export default App;
