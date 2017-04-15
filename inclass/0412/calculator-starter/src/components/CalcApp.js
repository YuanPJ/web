import React from 'react';

import CalcButton from './CalcButton';
// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO
      display: 0,
      num: 0,
      mode: '+',
      lastmode: '+',
      lastinput: 0,
      renum: true,
    };
    // this.handleNum = this.handleNum.bind(this);
    // this.handleOperator = this.handleOperator.bind(this);
    // this.resetState = this.resetState.bind(this);
  }

  resetState() {
    // TODO
    this.setState({
      display: 0,
      num: 0,
      mode: '+',
      lastmode: '+',
      lastinput: 0,
      renum: true,
    });
  }

  showNotImplemented() {
    console.warn('This function is not implemented yet.');
  }

  handleNum(n) {
    const d = this.state.display;
    if (this.state.mode === '=' && this.state.renum) {
      this.setState({
        num: 0,
        display: n,
        renum: false,
      });
    }
    if (this.state.renum) {
      this.setState({
        display: n,
        renum: false,
      });
    }
    else {
      this.setState({
        display: d*10 + n,
      });
    }
  }

  handleOperator(o) {
    let d = this.state.display;
    let re = this.state.renum;
    let m = this.state.mode;
    let n = this.state.num;
    if (m === '=') {
      n = this.state.display;
      if (o === '=') {
        d = this.state.lastinput;
        re = false;
        m = this.state.lastmode;
      }
    }
    if (!re) {
      switch (m) {
        case '+':
          n += d;
          break;
        case '-':
          n -= d;
          break;
        case '*':
          n *= d;
          break;
        case '/':
          n /= d;
          break;
        default:
          break;
      }
      this.setState({
        display: n,
        num: n,
        mode: o,
        lastmode: m,
        lastinput: d,
        renum: true,
      });
    }
    else {
      this.setState({
        mode: o,
      });
    }
  }

  render() {
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display">{this.state.display}</div>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.resetState.bind(this)}>AC</CalcButton>
            <CalcButton onClick={this.showNotImplemented.bind(this)}>+/-</CalcButton>
            <CalcButton onClick={this.showNotImplemented.bind(this)}>%</CalcButton>
            <CalcButton
              className="calc-operator"
              onClick={() => this.handleOperator('/')}
            >÷</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton
              className="calc-number"
              onClick={() => this.handleNum(7)}
            >7</CalcButton>
            <CalcButton
              className="calc-number"
              onClick={() => this.handleNum(8)}
            >8</CalcButton>
            <CalcButton
              className="calc-number"
              onClick={() => this.handleNum(9)}
            >9</CalcButton>
            <CalcButton
              className="calc-operator"
              onClick={() => this.handleOperator('*')}
            >x</CalcButton>
            <CalcButton className="calc-number">?</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton
              className="calc-number"
              onClick={() => this.handleNum(4)}
            >4</CalcButton>
            <CalcButton
              className="calc-number"
              onClick={() => this.handleNum(5)}
            >5</CalcButton>
            <CalcButton
              className="calc-number"
              onClick={() => this.handleNum(6)}
            >6</CalcButton>
            <CalcButton
              className="calc-operator"
              onClick={() => this.handleOperator('-')}
            >-</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton
              className="calc-number"
              onClick={() => this.handleNum(1)}
            >1</CalcButton>
            <CalcButton
              className="calc-number"
              onClick={() => this.handleNum(2)}
            >2</CalcButton>
            <CalcButton
              className="calc-number"
              onClick={() => this.handleNum(3)}
            >3</CalcButton>
            <CalcButton
              className="calc-operator"
              onClick={() => this.handleOperator('+')}
            >+</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton
              className="bigger-btn"
              onClick={() => this.handleNum(0)}
            >0</CalcButton>
            <CalcButton onClick={this.showNotImplemented.bind(this)}>.</CalcButton>
            <CalcButton
              className="calc-operator"
              onClick={() => this.handleOperator('=')}
            >=</CalcButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;
