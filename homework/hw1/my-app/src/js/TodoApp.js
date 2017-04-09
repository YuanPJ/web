import React, { Component } from 'react';
import '../css/TodoApp.css';
import Todolist from './TodoList';

class TodoApp extends Component {
  constructor() {
    super('foo');
  }
  render() {
    return (
      <div className="TodoApp">
      </div>
    );
  }
}

export default TodoApp;
